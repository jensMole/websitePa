<?php
	if(isset($_POST['submit'])){

		$msg = "Naam: " .$_POST["naam"] . "\n"
			."Email: " .$_POST["email"] . "\n"
			."Telefoon nummer: " .$_POST["telefoonNummer"] . "\n"
			."Mobiel nummer: " .$_POST["mobielNummer"] . "\n"
			."Bericht: " .$_POST["bericht"];

		$send_contact = mail("jensmolenaers@hotmail.com", "TEST", $msg);

		header("location: contact.php");

	}else{
		header("location: contact.php");
		exit();
	}
?>