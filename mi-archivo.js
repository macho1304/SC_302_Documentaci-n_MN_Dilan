alert("Hola mundo");
alert("Hola mundo_editado");
console.log("Cambios en el archivo");

//Calendario jquery//
<!doctype html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>jQuery  Datepicker </title>
		  <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
		  <link rel="stylesheet" href="style.css">
		  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
		  <script src="jquery.ui.datepicker-es.js"></script>
		<script>
		   $(function() {
		    $( "#datepicker" ).datepicker( $.datepicker.regional[ "Es" ]);
		   });
		</script>
	</head>
	 <body>
	    <p>Date: <input type="text" id="datepicker">
	 </body>
	</html>
