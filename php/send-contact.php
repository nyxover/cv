<?php
	$contact_name = @trim(stripslashes($_POST['contact_name'])); 
	$contact_email = @trim(stripslashes($_POST['contact_email']));
	$contact_message = @trim(stripslashes($_POST['contact_message']));

    $email_subject = 'nyx! - Un nouveau message de votre site CV';//replace with subject name
	$email_to = 'buirette.pierre@gmail.com';//replace with your email

	$body = 'Name: ' . $contact_name . "\n\n" . 'Email: ' . $contact_email . "\n\n" . 'Message: ' . $contact_message;

	$success = @mail($email_to, $email_subject, $body);
	
?>

<!DOCTYPE HTML>
<html lang="fr">
<head>
	<script>alert("Merci de m'avoir laisser un message je vous recontacte le plus vite possible /"<br>"/ Thank you for contact us. As early as possible  we will contact you.");</script>
        <meta HTTP-EQUIV="REFRESH" content="0; url=../index.html">        
</head>