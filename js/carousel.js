// turing flappy bird carousel
$('#turingmodalbutton').click(function() {
	$("#turingmodaltext0").css('visibility','visible');
	$("#turingmodaltext0").css('display', '');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarousel').carousel(0);
	$('#turingcarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
});
$('#turingcarouselback').click(function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarouselbutton0').css('backgroundColor','');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
    $('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
    if($('#turingimage0').is(':visible')){
		$("#turingmodaltext4").css('visibility','visible');
		$("#turingmodaltext4").css('display', '');
		$('#turingcarouselbutton4').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage1').is(':visible')){
		$("#turingmodaltext0").css('visibility','visible');
		$("#turingmodaltext0").css('display', '');
		$('#turingcarouselbutton0').css('backgroundColor','#a6a6a6');
    }
    else if($('#turingimage2').is(':visible')){
		$("#turingmodaltext1").css('visibility','visible');
		$("#turingmodaltext1").css('display', '');
	    $('#turingcarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage3').is(':visible')){
		$("#turingmodaltext2").css('visibility','visible');
		$("#turingmodaltext2").css('display', '');
	    $('#turingcarouselbutton2').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage4').is(':visible')){
		$("#turingmodaltext3").css('visibility','visible');
		$("#turingmodaltext3").css('display', '');
		$('#turingcarouselbutton3').css('background-color', '#a6a6a6');
    }
	$('#turingcarousel').carousel('prev');
    return false;
});

$('#turingcarouselforward').click(function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarouselbutton0').css('backgroundColor','');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
    if($('#turingimage0').is(':visible')){
		$("#turingmodaltext1").css('visibility','visible');
		$("#turingmodaltext1").css('display', '');
		$('#turingcarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage1').is(':visible')){
		$("#turingmodaltext2").css('visibility','visible');
		$("#turingmodaltext2").css('display', '');
		$('#turingcarouselbutton2').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage2').is(':visible')){
		$("#turingmodaltext3").css('visibility','visible');
		$("#turingmodaltext3").css('display', '');
		$('#turingcarouselbutton3').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage3').is(':visible')){
		$("#turingmodaltext4").css('visibility','visible');
		$("#turingmodaltext4").css('display', '');
		$('#turingcarouselbutton4').css('background-color', '#a6a6a6');
    }
    else if($('#turingimage4').is(':visible')){
		$("#turingmodaltext0").css('visibility','visible');
		$("#turingmodaltext0").css('display', '');
		$('#turingcarouselbutton0').css('background-color', '#a6a6a6');
    }
	$('#turingcarousel').carousel('next');
    return false;
});

$('#turingcarouselbutton0').on('click', function() {
	$("#turingmodaltext0").css('visibility','visible');
	$("#turingmodaltext0").css('display', '');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarousel').carousel(0);
	$('#turingcarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
	return false;
});
$('#turingcarouselbutton1').on('click', function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','visible');
	$("#turingmodaltext1").css('display', '');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarousel').carousel(1);
	$('#turingcarouselbutton0').css('background-color', '');
	$('#turingcarouselbutton1').css('background-color', '#a6a6a6');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
	return false;
});
$('#turingcarouselbutton2').on('click', function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','visible');
	$("#turingmodaltext2").css('display', '');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarousel').carousel(2);
	$('#turingcarouselbutton0').css('background-color', '');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '#a6a6a6');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '');
	return false;
});
$('#turingcarouselbutton3').on('click', function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','visible');
	$("#turingmodaltext3").css('display', '');
	$("#turingmodaltext4").css('visibility','hidden');
	$("#turingmodaltext4").css('display', 'none');
	$('#turingcarousel').carousel(3);
	$('#turingcarouselbutton0').css('background-color', '');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '#a6a6a6');
	$('#turingcarouselbutton4').css('background-color', '');
	return false;
});
$('#turingcarouselbutton4').on('click', function() {
	$("#turingmodaltext0").css('visibility','hidden');
	$("#turingmodaltext0").css('display', 'none');
	$("#turingmodaltext1").css('visibility','hidden');
	$("#turingmodaltext1").css('display', 'none');
	$("#turingmodaltext2").css('visibility','hidden');
	$("#turingmodaltext2").css('display', 'none');
	$("#turingmodaltext3").css('visibility','hidden');
	$("#turingmodaltext3").css('display', 'none');
	$("#turingmodaltext4").css('visibility','visible');
	$("#turingmodaltext4").css('display', '');
	$('#turingcarousel').carousel(4);
	$('#turingcarouselbutton0').css('background-color', '');
	$('#turingcarouselbutton1').css('background-color', '');
	$('#turingcarouselbutton2').css('background-color', '');
	$('#turingcarouselbutton3').css('background-color', '');
	$('#turingcarouselbutton4').css('background-color', '#a6a6a6');
	return false;
});

//python maplestory carousel
$('#pythonmodalbutton').click(function() {
	$("#pythonmodaltext0").css('visibility','visible');
	$("#pythonmodaltext0").css('display', '');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(0);
	$('#pythoncarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
});
$('#pythoncarouselback').click(function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
    if($('#pythonimage0').is(':visible')){
		$("#pythonmodaltext6").css('visibility','visible');
		$("#pythonmodaltext6").css('display', '');
		$('#pythoncarouselbutton6').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage1').is(':visible')){
		$("#pythonmodaltext0").css('visibility','visible');
		$("#pythonmodaltext0").css('display', '');
		$('#pythoncarouselbutton0').css('backgroundColor','#a6a6a6');
    }
    else if($('#pythonimage2').is(':visible')){
		$("#pythonmodaltext1").css('visibility','visible');
		$("#pythonmodaltext1").css('display', '');
	    $('#pythoncarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage3').is(':visible')){
		$("#pythonmodaltext2").css('visibility','visible');
		$("#pythonmodaltext2").css('display', '');
	    $('#pythoncarouselbutton2').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage4').is(':visible')){
		$("#pythonmodaltext3").css('visibility','visible');
		$("#pythonmodaltext3").css('display', '');
	    $('#pythoncarouselbutton3').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage5').is(':visible')){
		$("#pythonmodaltext4").css('visibility','visible');
		$("#pythonmodaltext4").css('display', '');
	    $('#pythoncarouselbutton4').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage6').is(':visible')){
		$("#pythonmodaltext5").css('visibility','visible');
		$("#pythonmodaltext5").css('display', '');
	    $('#pythoncarouselbutton5').css('background-color', '#a6a6a6');
    }
	$('#pythoncarousel').carousel('prev');
    return false;
});

$('#pythoncarouselforward').click(function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
    if($('#pythonimage0').is(':visible')){
		$("#pythonmodaltext1").css('visibility','visible');
		$("#pythonmodaltext1").css('display', '');
		$('#pythoncarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage1').is(':visible')){
		$("#pythonmodaltext2").css('visibility','visible');
		$("#pythonmodaltext2").css('display', '');
		$('#pythoncarouselbutton2').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage2').is(':visible')){
		$("#pythonmodaltext3").css('visibility','visible');
		$("#pythonmodaltext3").css('display', '');
		$('#pythoncarouselbutton3').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage3').is(':visible')){
		$("#pythonmodaltext4").css('visibility','visible');
		$("#pythonmodaltext4").css('display', '');
		$('#pythoncarouselbutton4').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage4').is(':visible')){
		$("#pythonmodaltext5").css('visibility','visible');
		$("#pythonmodaltext5").css('display', '');
		$('#pythoncarouselbutton5').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage5').is(':visible')){
		$("#pythonmodaltext6").css('visibility','visible');
		$("#pythonmodaltext6").css('display', '');
		$('#pythoncarouselbutton6').css('background-color', '#a6a6a6');
    }
    else if($('#pythonimage6').is(':visible')){
		$("#pythonmodaltext0").css('visibility','visible');
		$("#pythonmodaltext0").css('display', '');
		$('#pythoncarouselbutton0').css('background-color', '#a6a6a6');
    }
	$('#pythoncarousel').carousel('next');
    return false;
});

$('#pythoncarouselbutton0').on('click', function() {
	$("#pythonmodaltext0").css('visibility','visible');
	$("#pythonmodaltext0").css('display', '');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(0);
	$('#pythoncarouselbutton0').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton1').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','visible');
	$("#pythonmodaltext1").css('display', '');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(1);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton2').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','visible');
	$("#pythonmodaltext2").css('display', '');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(2);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton3').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','visible');
	$("#pythonmodaltext3").css('display', '');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(3);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton4').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','visible');
	$("#pythonmodaltext4").css('display', '');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(4);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton5').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','visible');
	$("#pythonmodaltext5").css('display', '');
	$("#pythonmodaltext6").css('visibility','hidden');
	$("#pythonmodaltext6").css('display', 'none');
	$('#pythoncarousel').carousel(5);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '#a6a6a6');
	$('#pythoncarouselbutton6').css('background-color', '');
	return false;
});
$('#pythoncarouselbutton6').on('click', function() {
	$("#pythonmodaltext0").css('visibility','hidden');
	$("#pythonmodaltext0").css('display', 'none');
	$("#pythonmodaltext1").css('visibility','hidden');
	$("#pythonmodaltext1").css('display', 'none');
	$("#pythonmodaltext2").css('visibility','hidden');
	$("#pythonmodaltext2").css('display', 'none');
	$("#pythonmodaltext3").css('visibility','hidden');
	$("#pythonmodaltext3").css('display', 'none');
	$("#pythonmodaltext4").css('visibility','hidden');
	$("#pythonmodaltext4").css('display', 'none');
	$("#pythonmodaltext5").css('visibility','hidden');
	$("#pythonmodaltext5").css('display', 'none');
	$("#pythonmodaltext6").css('visibility','visible');
	$("#pythonmodaltext6").css('display', '');
	$('#pythoncarousel').carousel(6);
	$('#pythoncarouselbutton0').css('background-color', '');
	$('#pythoncarouselbutton1').css('background-color', '');
	$('#pythoncarouselbutton2').css('background-color', '');
	$('#pythoncarouselbutton3').css('background-color', '');
	$('#pythoncarouselbutton4').css('background-color', '');
	$('#pythoncarouselbutton5').css('background-color', '');
	$('#pythoncarouselbutton6').css('background-color', '#a6a6a6');
	return false;
});

// HTML Carousel
$('#htmlmodalbutton').click(function() {
	$("#htmlmodaltext0").css('visibility','visible');
	$("#htmlmodaltext0").css('display', '');
	$('#htmlcarousel').carousel(0);
	$('#htmlcarouselbutton0').css('backgroundColor','#a6a6a6');
});

// Brick Breaker Carousel
$('#brickbreakermodalbutton').click(function() {
	$("#brickbreakermodaltext0").css('visibility','visible');
	$("#brickbreakermodaltext0").css('display', '');
	$("#brickbreakermodaltext1").css('visibility','hidden');
	$("#brickbreakermodaltext1").css('display', 'none');
	$('#brickbreakercarousel').carousel(0);
	$('#brickbreakercarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#brickbreakercarouselbutton1').css('background-color', '');
});
$('#brickbreakercarouselback').click(function() {
	$("#brickbreakermodaltext0").css('visibility','hidden');
	$("#brickbreakermodaltext0").css('display', 'none');
	$("#brickbreakermodaltext1").css('visibility','hidden');
	$("#brickbreakermodaltext1").css('display', 'none');
	$('#brickbreakercarouselbutton0').css('backgroundColor','');
	$('#brickbreakercarouselbutton1').css('background-color', '');
    if($('#brickbreakerimage0').is(':visible')){
		$("#brickbreakermodaltext1").css('visibility','visible');
		$("#brickbreakermodaltext1").css('display', '');
		$('#brickbreakercarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#brickbreakerimage1').is(':visible')){
		$("#brickbreakermodaltext0").css('visibility','visible');
		$("#brickbreakermodaltext0").css('display', '');
		$('#brickbreakercarouselbutton0').css('backgroundColor','#a6a6a6');
    }
	$('#brickbreakercarousel').carousel('prev');
    return false;
});

$('#brickbreakercarouselforward').click(function() {
	$("#brickbreakermodaltext0").css('visibility','hidden');
	$("#brickbreakermodaltext0").css('display', 'none');
	$("#brickbreakermodaltext1").css('visibility','hidden');
	$("#brickbreakermodaltext1").css('display', 'none');
	$('#brickbreakercarouselbutton0').css('backgroundColor','');
	$('#brickbreakercarouselbutton1').css('background-color', '');
    if($('#brickbreakerimage0').is(':visible')){
		$("#brickbreakermodaltext1").css('visibility','visible');
		$("#brickbreakermodaltext1").css('display', '');
		$('#brickbreakercarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#brickbreakerimage1').is(':visible')){
		$("#brickbreakermodaltext0").css('visibility','visible');
		$("#brickbreakermodaltext0").css('display', '');
		$('#brickbreakercarouselbutton0').css('background-color', '#a6a6a6');
    }
	$('#brickbreakercarousel').carousel('next');
    return false;
});

$('#brickbreakercarouselbutton0').on('click', function() {
	$("#brickbreakermodaltext0").css('visibility','visible');
	$("#brickbreakermodaltext0").css('display', '');
	$("#brickbreakermodaltext1").css('visibility','hidden');
	$("#brickbreakermodaltext1").css('display', 'none');
	$('#brickbreakercarousel').carousel(0);
	$('#brickbreakercarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#brickbreakercarouselbutton1').css('background-color', '');
	return false;
});
$('#brickbreakercarouselbutton1').on('click', function() {
	$("#brickbreakermodaltext0").css('visibility','hidden');
	$("#brickbreakermodaltext0").css('display', 'none');
	$("#brickbreakermodaltext1").css('visibility','visible');
	$("#brickbreakermodaltext1").css('display', '');
	$('#brickbreakercarousel').carousel(1);
	$('#brickbreakercarouselbutton0').css('backgroundColor','');
	$('#brickbreakercarouselbutton1').css('background-color', '#a6a6a6');
	return false;
});

// Shooter Carousel
$('#shootermodalbutton').click(function() {
	$("#shootermodaltext0").css('visibility','visible');
	$("#shootermodaltext0").css('display', '');
	$("#shootermodaltext1").css('visibility','hidden');
	$("#shootermodaltext1").css('display', 'none');
	$('#shootercarousel').carousel(0);
	$('#shootercarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#shootercarouselbutton1').css('background-color', '');
});
$('#shootercarouselback').click(function() {
	$("#shootermodaltext0").css('visibility','hidden');
	$("#shootermodaltext0").css('display', 'none');
	$("#shootermodaltext1").css('visibility','hidden');
	$("#shootermodaltext1").css('display', 'none');
	$('#shootercarouselbutton0').css('backgroundColor','');
	$('#shootercarouselbutton1').css('background-color', '');
    if($('#shooterimage0').is(':visible')){
		$("#shootermodaltext1").css('visibility','visible');
		$("#shootermodaltext1").css('display', '');
		$('#shootercarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#shooterimage1').is(':visible')){
		$("#shootermodaltext0").css('visibility','visible');
		$("#shootermodaltext0").css('display', '');
		$('#shootercarouselbutton0').css('backgroundColor','#a6a6a6');
    }
	$('#shootercarousel').carousel('prev');
    return false;
});

$('#shootercarouselforward').click(function() {
	$("#shootermodaltext0").css('visibility','hidden');
	$("#shootermodaltext0").css('display', 'none');
	$("#shootermodaltext1").css('visibility','hidden');
	$("#shootermodaltext1").css('display', 'none');
	$('#shootercarouselbutton0').css('backgroundColor','');
	$('#shootercarouselbutton1').css('background-color', '');
    if($('#shooterimage0').is(':visible')){
		$("#shootermodaltext1").css('visibility','visible');
		$("#shootermodaltext1").css('display', '');
		$('#shootercarouselbutton1').css('background-color', '#a6a6a6');
    }
    else if($('#shooterimage1').is(':visible')){
		$("#shootermodaltext0").css('visibility','visible');
		$("#shootermodaltext0").css('display', '');
		$('#shootercarouselbutton0').css('background-color', '#a6a6a6');
    }
	$('#shootercarousel').carousel('next');
    return false;
});

$('#shootercarouselbutton0').on('click', function() {
	$("#shootermodaltext0").css('visibility','visible');
	$("#shootermodaltext0").css('display', '');
	$("#shootermodaltext1").css('visibility','hidden');
	$("#shootermodaltext1").css('display', 'none');
	$('#shootercarousel').carousel(0);
	$('#shootercarouselbutton0').css('backgroundColor','#a6a6a6');
	$('#shootercarouselbutton1').css('background-color', '');
	return false;
});
$('#shootercarouselbutton1').on('click', function() {
	$("#shootermodaltext0").css('visibility','hidden');
	$("#shootermodaltext0").css('display', 'none');
	$("#shootermodaltext1").css('visibility','visible');
	$("#shootermodaltext1").css('display', '');
	$('#shootercarousel').carousel(1);
	$('#shootercarouselbutton0').css('backgroundColor','');
	$('#shootercarouselbutton1').css('background-color', '#a6a6a6');
	return false;
});