<?php

echo "<br />";
print_r($_POST['to_field']);
echo "<br />";
print_r($_POST['from_field']);
echo "<br />";
print_r($_POST['html_file']);


$headers = "From: " . strip_tags($_POST['from_field']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['from_field']) . "\r\n";
$headers .= "CC: susan@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$html_message = file_get_contents($_POST['html_file']);
// print_r($html_message);

// $to = $_POST['to_field'];
// $subject = 'test message';
// $message = "$html_message";
//
// mail($to, $subject, $message);

// ========
// $to      = 'alex@designbymodus.com';
// $subject = 'the subject';
// $message = 'hello';
// $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();
//
// mail($to, $subject, $message, $headers);

echo 'hi there.';
