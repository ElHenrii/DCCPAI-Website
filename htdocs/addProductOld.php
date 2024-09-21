<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Decode the JSON sent from the frontend
$data = json_decode(file_get_contents("php://input"), true);

// Database credentials
$servername = "localhost";
$username = "root";
$password = ""; // Assuming no password
$dbname = "reactdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO tbl_product (product_name, product_description, product_price) VALUES (?, ?, ?)");
if (!$stmt) {
    echo json_encode(["message" => "Error preparing statement: " . $conn->error]);
    exit;
}

// Bind parameters. Note: 'id' should likely be an integer, so 'i' instead of 's'
$stmt->bind_param("ssd", $name, $description, $price);

// Assign values from the decoded JSON
$name = $data['name'];
$description = $data['description'];
$price = $data['price'];

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["message" => "Product added successfully!", "success" => true]);
} else {
    echo json_encode(["message" => "Error adding product: " . $stmt->error]);
}

// Close statement and connection
$stmt->close();
$conn->close();








?>