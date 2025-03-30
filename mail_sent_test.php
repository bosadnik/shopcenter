<?php
echo "test";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'pro.turbo-smtp.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'bartlomiej@osadnik.com';
    $mail->Password = 'WECC8eC9';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('main@bossworks.pl', 'Formularz');
    $mail->addAddress('bartlomiej.osadnik@gmail.com');

    $mail->Subject = 'Nowa wiadomość';
    // $mail->Body = "Imię: {$_POST['name']}\nEmail: {$_POST['email']}\nWiadomość: {$_POST['message']}";
    $mail->Body = " TEST BODY";


    $mail->send();
    echo 'Wiadomość wysłana!';
} catch (Exception $e) {
    echo "Błąd: {$mail->ErrorInfo}";
}

?>