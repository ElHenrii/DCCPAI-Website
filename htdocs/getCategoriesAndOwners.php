<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = ""; // Assuming no password
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

// Fetch categories
$categorySql = "SELECT category_id, product_category, product_isCacao FROM tbl_category";
$categoryResult = $conn->query($categorySql);

$categories = array();
if ($categoryResult->num_rows > 0) {
    while ($row = $categoryResult->fetch_assoc()) {
        $row['product_isCacao'] = (bool)$row['product_isCacao'];
        $categories[] = $row;
    }
} else {
    $categories = [];
}

// Fetch product owners
$ownerSql = "SELECT product_owner_id, product_owner_name FROM tbl_product_owner_name";
$ownerResult = $conn->query($ownerSql);

$owners = array();
if ($ownerResult->num_rows > 0) {
    while ($row = $ownerResult->fetch_assoc()) {
        $owners[] = $row;
    }
} else {
    $owners = [];
}

// Fetch product-owner relationships
$productOwnerSql = "SELECT product_id, product_owner_id FROM tbl_product_owner";
$productOwnerResult = $conn->query($productOwnerSql);

$productOwners = array();
if ($productOwnerResult->num_rows > 0) {
    while ($row = $productOwnerResult->fetch_assoc()) {
        $productOwners[] = $row;
    }
} else {
    $productOwners = [];
}

// Return the data as a JSON response
echo json_encode([
    "categories" => $categories,
    "owners" => $owners,
    "productOwners" => $productOwners
]);

$conn->close();
?>