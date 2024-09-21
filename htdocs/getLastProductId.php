<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['error' => "Connection failed: " . $conn->connect_error]);
    exit;
}

$sql = "SELECT MAX(product_id) AS lastId FROM tbl_product"; // Ensure your column and table names are correct
$result = $conn->query($sql);

// This part of the API response
if ($result && $row = $result->fetch_assoc()) {
    echo json_encode(['lastId' => $row['lastId']]);
} else {
    echo json_encode(['error' => "Error retrieving last ID: " . $conn->error]);
}


$conn->close();
?>