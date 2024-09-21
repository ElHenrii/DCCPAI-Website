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

// Query to fetch the relationship between products and their owners (brands)
$sql = "SELECT p.product_id, pon.product_owner_name 
        FROM tbl_product p
        JOIN tbl_product_owner po ON p.product_id = po.product_id
        JOIN tbl_product_owner_name pon ON po.product_owner_id = pon.product_owner_id";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $brands = [];
    while ($row = $result->fetch_assoc()) {
        // Push each row of brand-product data into the array
        $brands[] = $row;
    }
    // Return the brand-product relationship data as a JSON response
    echo json_encode(["success" => true, "brands" => $brands]);
} else {
    echo json_encode(["success" => false, "message" => "No brand-product relationships found"]);
}

// Close the connection
$conn->close();
?>