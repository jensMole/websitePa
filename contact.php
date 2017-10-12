<!DOCTYPE html>
<html lang="nl">
  <head>
    <title>
      Home || BMR
    </title>
    <link rel="shortcut icon" href="afbeeldingen/bmr.png"/>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  	<meta name="description" content="Welkom bij BMR. Bouwerken Molenaers Ronald zorgt voor het bouwen van jouw huis." />
  	<meta name="keywords" content="Bouw, Construction" />
  	<meta name="author" content="Jens M." />

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- css file -->
    <link href="HoofdCss.css" type="text/css" rel="stylesheet"/>
    <!-- font -->
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
  </head>
  <body>

    <!-- Navigatie -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" name="menu" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="icon navbar-brand" href="index.html"><img id="logo" src="afbeeldingen/bmrsmall.png" alt="afbeelding"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
            <!--<li><a href="binnenkort.html">Info</a></li>-->
            <li><a href="binnenkort.html">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
    <!-- Navigatie -->

    
    <!-- Naam, Email, Telefoon/gsm nummer, Bericht -->
    <section id="contactInfo">   
      <form action="contact-us-send.php" method="post"> 
       <div id="info" class="container">
        <div class="row">  
          <div class="col-sm-7">
            <table id="dataContact">
              <tr>
                <td><label for="naam">Naam:</label></td>
              </tr>
              <tr>
                <td><input class="afstand" type="text" name="naam" id="naam" size="30" required="required" placeholder="Naam invoeren"/></td>
              </tr>

              <tr>
                <td><label for="email">E-mailadres:</label></td>
              </tr>
              <tr>
                <td><input class="afstand" type="email" name="email" id="email" size="30" required="required" placeholder="E-mailadres invoeren" /></td>
              </tr>

              <tr>
                <td><label for="telefoonNummer">Telefoon:</label></td>
              </tr>
              <tr>
                <td><input class="afstand" type="text" name="telefoonNummer" id="telefoonNummer" size="30" placeholder="Telefoonnummer invoeren"/></td>
              </tr>

              <tr>
                <td><label for="mobielNummer">Mobiel:</label></td>
              </tr>
              <tr>
                <td><input class="afstand" type="text" name="mobielNummer" id="mobielNummer" size="30" placeholder="Mobiel nummer invoeren" /></td>
              </tr>
            </table>
          </div>
          <div class="col-sm-5">
            <table id="berichtTable">
              <tr>
                <td><label for="bericht">Bericht:</label></td>
              </tr>
              <tr>
                <td><textarea name="bericht" id="bericht" rows="9" cols="30" required placeholder="Bericht invoeren"></textarea></td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="submit" value="Verzenden"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
       </div>
      </form>
    </section>


    <!-- footer -->
    <section id="footkleur">
      <footer id="foot">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 col-sm-offset-1 tekstCenter">
              <p class="footTitel">
                <b>Bouwwerken Molenaers <br/> Ronald</b>
              </p>
              <p class="tekstFoot titleWebDesign">
                Geenstraat 49, 3660 Opglabbeek, Belgi&euml;<br/>
                tel: +32(0)89 85 34 56<br/>
                gsm: 0497315589<br/>
               <a href="mailto:bouwwerken@bmronny.be">bouwwerken@bmronny.be</a>
              </p>
            </div>
            <div class="col-sm-5 col-sm-offset-1 hidden-xs">
               <h6 class="footTitel siteMap">
                   <b>Sitemap</b>
               </h6>
                <ul class="linkenfoot">
                   <li><a href="index.html">HOME</a></li>
                   <li><a href="contact.php">CONTACT</a></li>
                </ul>
            </div>
          </div>
          <br/>
          <div class="row">
              <div class="col-sm-5 col-sm-offset-1 tekstFoot titleWebDesign">
                <hr/>
                   &copy; 2017 Bouwwerken molenaers Ronald<br/>
                   <a href="http://thebelgiumgames.co.nf/" target="_blank">webdesign by Jens</a><br/>
              </div>
              <div class="col-sm-5 col-sm-offset-1">
                  <br/>
                  <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">
                        <img class="license" alt="Creative Commons-Licentie" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                   </a>
              </div>
          </div>
        </div>
      </footer>
    </section>
    <!-- footer -->

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <!--<script src="hoofdjs.js"></script>-->
  </body>
</html>
