<?php
	if(isset($_POST['submit'])){

		$msg = '<!DOCTYPE html>
	<html>
	<head>
		<title></title>
	</head>
	<body style="background-color: #b3b5b7;">
		<div id="mail" style="width: 770px;margin: auto;background-color: white;border-radius: 15%;">
			<div id="logo" style="background-color: #37393a;border-radius: 10%;">
				<img id="logoafbeelding" src="https://i.imgur.com/3smh3KU.png" alt="afbeelding" style="margin-left: 20px;">
			</div>
		<h2 class="rodeLetters titleTekst" style="text-align: center;"><span style="color: red;">B</span>ouwwerken <span style="color: red;">M</span>olenaers <span style="color: red;">R</span>onald</h2>

			<div id="gegevens" style="padding: 10px;margin-left: 10px;">
				<p id="bericht" style="font-size: 120%;font-weight: bold;">
				Hallo Meneer Ronald, Mevrouw Waghemans<br>
				</p>
				<p>
				Er is een mail aangekomen van '.$_POST["naam"] .' met als bericht:<br>
				'.$_POST["bericht"].'
				</p>

				<p id="info">
					E-mailadres van '.$_POST["naam"] .': '.$_POST["email"] .'.<br>
					De telefoon- en/of mobiel-nummer van '.$_POST["naam"] .': Telefoon: '.$_POST["telefoonNummer"] .', mobiel: '.$_POST["mobielNummer"] .'.
				</p>

				<p id="footer">
					Met vriendelijke groeten,<br>
					'.$_POST["naam"] .'.
				</p>

				<p id="copy" style="font-size: 70%;text-align: center;">
					design door Jens M.
				</p>
			</div>       	
		</div>
	</body>
</html>';

$headers = "MIME-Version: 1.0\n" ;
$headers .= "Content-Type: text/html; charset=\"iso-8859-1\"\n";

		mail("bouwwerken@bmronny.be", "Mail Contact", $msg, $headers);

		header("location: bedankt.html");

	}else{
		header("location: contact.php");
		exit();
	}
?>