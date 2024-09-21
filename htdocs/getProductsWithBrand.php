<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

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

// Query to fetch products and their associated brand (owner)
$sql = "
    SELECT 
        p.product_id, p.product_name, p.product_description, p.product_price, p.display, p.available, p.product_deleted,
        o.product_owner_name
    FROM 
        tbl_product p
    JOIN 
        tbl_product_owner po ON p.product_id = po.product_id
    JOIN 
        tbl_product_owner_name o ON po.product_owner_id = o.product_owner_id
";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $products = [];
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode(["success" => true, "products" => $products]);
} else {
    echo json_encode(["success" => false, "message" => "No products found"]);
}

// Close the connection
$conn->close();
?>