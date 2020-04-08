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

    $to      = 'gmail@gmail.com';
    $subject = 'Website Message';
    $message = $messagemain;
    $headers = 'From: info@website.com' . "\r\n" .
        'Reply-To: info@website.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $messagemain, $headers);

        header("location:thankyou.php");
  }
?>



<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"  class="formmain" method="post" enctype="multipart/form-data" id="c-form">
                      <div class="form-field">
                          <input type="text" placeholder="Name" name="name">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <input type="text" placeholder="Email" name="email">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <input type="text" placeholder="Phone" name="phone" id="intTextBox">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <textarea name="message" placeholder="Message"></textarea>
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                        <div class="g-recaptcha" data-sitekey="[recaptcha key]"></div>
                        <div class="c-error error"></div>
                      </div>
                      <div class="form-field">
                           <input type="hidden" value="<?php echo  date("d/m/Y")." || ".date("h:i:sa"); ?>" name="date">
                          <input type="submit" value="submit" class="submit" name="submit">
                      </div>
                  </form>
