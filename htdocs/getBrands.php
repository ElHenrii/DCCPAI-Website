<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "reactdb"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Query to fetch product owners (brands)
$sql = "SELECT product_owner_id, product_owner_name FROM tbl_product_owner_name";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $brands = [];
    while ($row = $result->fetch_assoc()) {
        $brands[] = $row;
    }
    echo json_encode(["success" => true, "brands" => $brands]);
} else {
    echo json_encode(["success" => false, "message" => "No brands found"]);
}

// Close the connection
$conn->close();
?>