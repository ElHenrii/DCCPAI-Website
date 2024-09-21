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

// Query to fetch categories
$sql = "SELECT category_id, product_category, product_isCacao FROM tbl_category";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $categories = [];
    while ($row = $result->fetch_assoc()) {
        // Push each row of category data into the array
        $categories[] = $row;
    }
    // Return the category data as a JSON response
    echo json_encode(["success" => true, "categories" => $categories]);
} else {
    echo json_encode(["success" => false, "message" => "No categories found"]);
}

// Close the connection
$conn->close();
?>