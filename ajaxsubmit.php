<?php

  $name = $email = $phone = $message ="";

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $phone = test_input($_POST["phone"]);
    $message = test_input($_POST["message"]);

    $messagemain = 'Name: ' . $firstname ."\r\n" .
      'Email: ' . $email ."\r\n" .
      'Phone Number: ' . $phone ."\r\n" .
      'Message: ' . $message ;

    $to      = 'gmail@gmail.com, gmail2@gmail.com';
    $subject = 'Website Message';
    $message = $messagemain;
    $headers = 'From: info@website.com' . "\r\n" .
        'Reply-To: info@website.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $messagemain, $headers);

       // header("location:thankyou.php");
  }
?>
