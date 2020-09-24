<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$creds = json_decode(file_get_contents("php://input")) ?: (object) array();

$servername = "localhost";
$username = "root";
$password = "";
$database = "creedorians";

$mood = $_POST['mood'];
// $mood = "happy";

$mysqli = new mysqli($servername, $username, $password, $database);
$query = "SELECT * FROM tracks WHERE Track_Mood = '$mood'";
$res = $mysqli->query($query);

$playlist = [];

while($row = $res->fetch_assoc())
    array_push($playlist, $row);

echo json_encode($playlist);

?>