<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$sub= $_POST['sub'];
$message= $_POST['message'];


$to = "prasadmudhole401@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  sub = " . $sub . "\r\n Message =" . $message;
$headers = "From: noreply@SelfIntorweb.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>