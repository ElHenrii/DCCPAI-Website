<?php

header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Content-Type: application/json'); // Set content type to JSON

// Database connection details
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

// Check if product_id is provided in the GET request
if (!isset($_GET['product_id'])) {
    echo json_encode(["success" => false, "message" => "product_id is required"]);
    exit;
}

// Sanitize product_id to prevent SQL injection
$product_id = intval($_GET['product_id']);

// SQL query to retrieve product owner name using product_id
$sql = "
    SELECT pon.product_owner_name 
    FROM tbl_product_owner po
    INNER JOIN tbl_product_owner_name pon 
    ON po.product_owner_id = pon.product_owner_id
    WHERE po.product_id = ?
";

// Prepare and execute the query
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $product_id); // Bind the product_id to the query
$stmt->execute();
$result = $stmt->get_result();

// Check if any result was found
if ($result->num_rows > 0) {
    $owner = $result->fetch_assoc();
    echo json_encode(["success" => true, "product_owner_name" => $owner['product_owner_name']]);
} else {
    echo json_encode(["success" => false, "message" => "No owner found for the given product_id"]);
}

// Close the connection
$conn->close();

?>