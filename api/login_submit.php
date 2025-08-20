<?php
  session_start();
  require "../includes/database_connect_hide_error.php";

  if( $con )  //$con does not contains false or null value, i.e. $con is true
  {
    $email = $_POST["email"];
    $password = $_POST["password"];
    // If password is stored in hashed format.
    $password = sha1($password);

    $sql_query = " SELECT * FROM users WHERE email='$email' AND password='$password'; ";
    $result = mysqli_query($con,$sql_query);
    if( $result )
    {
      $row_count = mysqli_num_rows($result);

      //If user with entered email and password already exists, single record of user details will be fetched & user gets logged in, by code below:
      if( $row_count == 1 ){
        $row = mysqli_fetch_assoc($result);
        // When logged in, user_id and full_name session variables gets initialised according to the user data.
        $_SESSION["user_id"] = $row["id"];
        $_SESSION["full_name"] = $row["full_name"];
        // Upon successfull logging in, user gets redirected to home page.
        // header("location: /PGLIFE/index.php");
        // exit();
        $response = array("success" => true, "message" => "Successfully Logged IN!");
        echo json_encode($response);
        return;
      }
      elseif( $row_count == 0 ){
        //When email and password do not match/exists in record...
        $response = array("success" => false, "message" => "Incorrect Username or Password!");
        echo json_encode($response);
        return;
      }
    }
    else{
      // if $result has false value...
      $response = array("success" => false, "message" => "We couldn't log you in at the moment!");
      echo json_encode($response);
      return;
    }
  }
  else{
    //when $con has false value
    $response = array("success" => false, "message" => "Database Connectivity Error!");
    echo json_encode($response);
    return;
  }
?>



<?php mysqli_close($con); ?>
