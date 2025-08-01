
# 🏠 ApnaGhar – PG Life Web Application

**ApnaGhar** is a responsive web application built with **PHP** and **MySQL**, designed to help users search for Paying Guest (PG) accommodations efficiently. It features secure login/signup, real-time listings, advanced filters, and booking functionality, all wrapped in a clean, responsive UI.

---

## ✨ Features

* 🔐 **User Authentication**: Secure login and signup system for users
* 🏘️ **PG Listings**: Explore PG accommodations with complete details
* 📊 **Smart Filters**: Search by rent range and rating
* 📦 **Booking System**: Seamless booking of PGs
* 📱 **Responsive Design**: Works smoothly on both mobile and desktop
* ⚙️ **Admin Dashboard**: Manage users, listings, and PG data

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, Bootstrap
* **Backend**: PHP
* **Database**: MySQL
* **Version Control**: Git & GitHub

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Akku1508/ApnaGhar_Internshala-Pg-Life-Project.git
cd ApnaGhar_Internshala-Pg-Life-Project
```

### 2. Setup Local Server

* Use **XAMPP** or **WAMP** to run a local PHP server.
* Move the project folder into the `htdocs` directory (for XAMPP).

### 3. Import the Database

* Launch **phpMyAdmin**.
* Create a new database (e.g., `pglife`).
* Import the `pglife.sql` file found in the root directory.

### 4. Configure Database Connection

Edit the `includes/config.php` file:

```php
define("DB_SERVER", "localhost");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "pglife");
```

> ⚠️ Update the credentials based on your local setup.

### 5. Run the Application

Start Apache and MySQL in XAMPP and navigate to:

```
http://localhost/ApnaGhar_Internshala-Pg-Life-Project/
```


## 📅 Project Details

* **Project Name**: ApnaGhar – PG Life Clone
* **Timeline**: July 2024
* **Team Size**: 3 Members
* **Objective**: Academic project developed during an internship for learning full-stack PHP development

---

## 🙌 Credits

Inspired by **Internshala PG Life** tutorial project. Built for educational purposes to enhance practical skills in PHP and MySQL web development.
