<?php

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


$servername = "162.243.192.155";
$username = "root";
$password = "Abc011395*";

// Create connection
$conn = mysql_connect($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
