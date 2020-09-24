<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$creds = json_decode(file_get_contents("php://input")) ?: (object) array();

$servername = "localhost";
$username = "id14949109_raghav";
$password = "M-EIE#0Eph_EW|qm";
$database = "id14949109_musify";

$trackname = $creds->trackname;
$newmood = $creds->newmood;

// $trackname = "Euphoria";
// $newmood = "Happy";

$mysqli = new mysqli($servername, $username, $password, $database);
$query = "UPDATE tracks SET Track_Mood = '$newmood' WHERE Track_Name = '$trackname'";
$res = $mysqli->query($query);

echo '{"message":"mood added"}';
?>

