<!DOCTYPE html>
<html>
<head>
	<title>Google Colors</title>
	<style type="text/css">
	* {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}

	body {
		overflow: hidden;
	}

	.block {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
	}

	.block:hover {
		color: white !important;
	}
	</style>
</head>
<body>
	<?php
	$db = new PDO();
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

	function getData($sql, $db) {
	  $result = $db->query($sql);
	  return $result->fetchAll(PDO::FETCH_ASSOC);
	}

	$sql = "SELECT `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` FROM `colors` WHERE `id` <= 16";
	$colors = getData($sql, $db);
	// var_dump($colors);

	foreach ($colors as $color) {
		echo '<div class="row">'."\n";
		foreach ($color as $key => $value) {
			echo '<div class="block" style="color: #'.$value.'; background: #'.$value.';">#'.$value.'</div>';
		}
		echo '</div>'."\n";
	}
	?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>
		$h = $(window).height() / 16;
		$w = $(window).width() / 9;
		$(".row").height($h);
		$(".row").width($(window).width());
		$(".row .block").height($h);
		$(".row .block").width($w);
		$(".row .block").css("line-height", $h + "px");
	</script>
</body>
</html>