// JavaScript Document
//オケループさせる奴
var okeloop = function(){
	$("#oke2").get(0).play();
	setInterval(function(){
		$("#oke1").get(0).play();
		setTimeout(function(){$("#oke2").get(0).play();},7999);
	},7999);
}

//最初の画面消えたら曲流すよ
$(function(){
	$(".start").click(function(){
		$(".first").addClass("hidden");
		setTimeout(function(){
				$(".first").addClass("displaynone");
			},200);
		okeloop();
	});
});

//クリックされた具材の画像を表示するやつ
$(function(){
	$("#mat1").click(function(){
		$("#hourensou").insertBefore("#dekitacurry");
		$("#hourensou").removeClass("displaynone");
		$("#mat1").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/hourensou_spinach.png" class="ingimg">');
		}
	});
	
	$("#mat2").click(function(){
		$("#satumaimo").insertBefore("#dekitacurry");
		$("#satumaimo").removeClass("displaynone");
		$("#mat2").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/satsumaimo_sweetpotato.png" class="ingimg">');
		}
	});
	
	$("#mat3").click(function(){
		$("#ninjin").insertBefore("#dekitacurry");
		$("#ninjin").removeClass("displaynone");
		$("#mat3").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/ninjin_carrot.png" class="ingimg">');
		}
	});
	
	$("#mat4").click(function(){
		$("#jagaimo").insertBefore("#dekitacurry");
		$("#jagaimo").removeClass("displaynone");
		$("#mat4").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/vegetable_maru_dansyaku.png" class="ingimg">');
		}
	});
	
	$("#mat5").click(function(){
		$("#tamanegi").insertBefore("#dekitacurry");
		$("#tamanegi").removeClass("displaynone");
		$("#mat5").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/tamanegi_onion.png" class="ingimg">');
		}
	});
	
	$("#mat6").click(function(){
		$("#gyuuniku").insertBefore("#dekitacurry");
		$("#gyuuniku").removeClass("displaynone");
		$("#mat6").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/niku_gyu.png" class="ingimg">');
		}
	});
	
	$("#mat7").click(function(){
		$("#butaniku").insertBefore("#dekitacurry");
		$("#butaniku").removeClass("displaynone");
		$("#mat7").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/niku_buta.png" class="ingimg">');
		}
	});
	
	$("#mat8").click(function(){
		$("#toriniku").insertBefore("#dekitacurry");
		$("#toriniku").removeClass("displaynone");
		$("#mat8").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/niku_tori.png" class="ingimg">');
		}
	});
	
	$("#mat9").click(function(){
		$("#hikiniku").insertBefore("#dekitacurry");
		$("#hikiniku").removeClass("displaynone");
		$("#mat9").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/food_hikiniku_beef.png" class="ingimg">');
		}
	});
	
	$("#mat10").click(function(){
		$("#tomato").insertBefore("#dekitacurry");
		$("#tomato").removeClass("displaynone");
		$("#mat10").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/tomato_red.png" class="ingimg">');
		}
	});
	
	$("#mat11").click(function(){
		$("#kabotya").insertBefore("#dekitacurry");
		$("#kabotya").removeClass("displaynone");
		$("#mat11").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/kabocha.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/kabocha.png" class="ingimg">');
		}
	});
	
	$("#mat12").click(function(){
		$("#kinoko").insertBefore("#dekitacurry");
		$("#kinoko").removeClass("displaynone");
		$("#mat12").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/kinoko_shimeji.png" class="ingimg">');
		}
	});
	
	$("#mat13").click(function(){
		$("#ringo").insertBefore("#dekitacurry");
		$("#ringo").removeClass("displaynone");
		$("#mat13").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/fruit_apple.png" class="ingimg">');
		}
	});
	
	$("#mat14").click(function(){
		$("#nasu").insertBefore("#dekitacurry");
		$("#nasu").removeClass("displaynone");
		$("#mat14").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/nasu_eggplant.png" class="ingimg">');
		}
	});
	
	$("#mat15").click(function(){
		$("#tamago").insertBefore("#dekitacurry");
		$("#tamago").removeClass("displaynone");
		$("#mat15").addClass("selected");
		if($(this).hasClass("hako1")){
			$("#ingbox1").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako2")){
			$("#ingbox2").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako3")){
			$("#ingbox3").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako4")){
			$("#ingbox4").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako5")){
			$("#ingbox5").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako6")){
			$("#ingbox6").append('<img src="./images/egg_white.png" class="ingimg">');
		}
		else if($(this).hasClass("hako7")){
			$("#ingbox7").append('<img src="./images/egg_white.png" class="ingimg">');
		}
	});
});

//クリックされたら音楽流して代入
$(function(){
	$(".mat").click(function(){
		if($(".mat").hasClass("hako1")){
			$("#dummy1").removeClass("no1");
			$(this).addClass("no1").children('audio').get(0).play();
			$(".mat").addClass("hako2").removeClass("hako1");
		}
		else if($(".mat").hasClass("hako2")){
			$("#dummy2").removeClass("no2");
			$(".mat").addClass("hako3").removeClass("hako2");
			$(this).addClass("no2").children('audio').get(0).play();
		}
		else if($(".mat").hasClass("hako3")){
			$("#dummy3").removeClass("no3");
			$(".mat").addClass("hako4").removeClass("hako3");
			$(this).addClass("no3").children('audio').get(0).play();
		}
		else if($(".mat").hasClass("hako4")){
			$("#dummy4").removeClass("no4");
			$(".mat").addClass("hako5").removeClass("hako4");
			$(this).addClass("no4").children('audio').get(0).play();
		}
		else if($(".mat").hasClass("hako5")){
			$("#dummy5").removeClass("no5");
			$(".mat").addClass("hako6").removeClass("hako5");
			$(this).addClass("no5").children('audio').get(0).play();
		}
		else if($(".mat").hasClass("hako6")){
			$("#dummy6").removeClass("no6");
			$(".mat").addClass("hako7").removeClass("hako6");
			$(this).addClass("no6").children('audio').get(0).play();
		}
		else if($(".mat").hasClass("hako7")){
			$("#dummy7").removeClass("no7");
			$(".mat").removeClass("hako6").removeClass("hako7");
			$(this).addClass("no7").children('audio').get(0).play();
			$("#finishbutton").removeClass("displaynone");
			$("#guzaiwoerandene").addClass("displaynone");
			$(".mat").not(".selected").addClass("locked");
		}
	});
});

var paused = false;


var timeoutingredients = function(){
	setTimeout(function(){
		if(paused){return}
			$(".no2").children('audio').get(0).play();
			$("#ingbox2").addClass("nowplaythis");
			$("#ingbox1,#ingbox3,#ingbox4,#ingbox5,#ingbox6,#ingbox7").removeClass("nowplaythis");
		},1000);
		setTimeout(function(){
			if(paused){return}
			$(".no3").children('audio').get(0).play();
			$("#ingbox3").addClass("nowplaythis");
			$("#ingbox1,#ingbox2,#ingbox4,#ingbox5,#ingbox6,#ingbox7").removeClass("nowplaythis");
		},2000);
		setTimeout(function(){
			if(paused){return}
			$(".no4").children('audio').get(0).play();
			$("#ingbox4").addClass("nowplaythis");
			$("#ingbox1,#ingbox2,#ingbox3,#ingbox5,#ingbox6,#ingbox7").removeClass("nowplaythis");
		},3000);
		setTimeout(function(){
			if(paused){return}
			$(".no5").children('audio').get(0).play();
			$("#ingbox5").addClass("nowplaythis");
			$("#ingbox1,#ingbox2,#ingbox3,#ingbox4,#ingbox6,#ingbox7").removeClass("nowplaythis");
		},4000);
		setTimeout(function(){
			if(paused){return}
			$(".no6").children('audio').get(0).play();
			$("#ingbox6").addClass("nowplaythis");
			$("#ingbox1,#ingbox2,#ingbox3,#ingbox4,#ingbox5,#ingbox7").removeClass("nowplaythis");
		},5000);
		setTimeout(function(){
			if(paused){return}
			$(".no7").children('audio').get(0).play();
			$("#ingbox7").addClass("nowplaythis");
			$("#ingbox1,#ingbox2,#ingbox3,#ingbox4,#ingbox5,#ingbox6").removeClass("nowplaythis");
		},6000);
}

//材料ループと今どれ再生してるか見せる関数
var loopingredients = function(){		
		setInterval(function(){
			if(paused){return}
			$(".no1").children('audio').get(0).play();
			$("#ingbox1").addClass("nowplaythis");
			$("#ingbox2,#ingbox3,#ingbox4,#ingbox5,#ingbox6,#ingbox7").removeClass("nowplaythis");
			timeoutingredients();
		},7999);
}
//を呼び出すやつ
$(function(){
	$(".start").click(function(){
		$(".no1").children('audio').get(0).play();
		$("#ingbox1").addClass("nowplaythis");
		$("#ingbox2,#ingbox3,#ingbox4,#ingbox5,#ingbox6,#ingbox7").removeClass("nowplaythis");
		timeoutingredients();
		loopingredients();
	});
});


//全部終わったあとのやつ
$(function(){
	$("#finishbutton").click(function(){
		paused = true;
		$(".done").removeClass("displaynone");
		$("#oke1").get(0).volume = 0.75;
		$("#oke2").get(0).volume = 0.75;
		setTimeout(function(){$("#oke1").get(0).volume = 0.5;},100);
		setTimeout(function(){$("#oke2").get(0).volume = 0.5;},100);
		setTimeout(function(){$("#oke1").get(0).volume = 0.25;},200);
		setTimeout(function(){$("#oke2").get(0).volume = 0.25;},200);
		setTimeout(function(){$("#oke1").get(0).volume = 0;},300);
		setTimeout(function(){$("#oke2").get(0).volume = 0;},300);
		$(".mat").children('audio').get(0).pause();	
		$(".mat").children('audio').get(0).currentTime=0;	
		setTimeout(function(){$('#okeKansei').get(0).play();},1000);
		setTimeout(function(){$(".no1").children('audio').get(0).play();},1000);
		setTimeout(function(){$(".no2").children('audio').get(0).play();},2000);
		setTimeout(function(){$(".no3").children('audio').get(0).play();},3000);
		setTimeout(function(){$(".no4").children('audio').get(0).play();},4000);
		setTimeout(function(){$(".no5").children('audio').get(0).play();},5000);
		setTimeout(function(){$(".no6").children('audio').get(0).play();},6000);
		setTimeout(function(){$(".no7").children('audio').get(0).play();},7000);
		setTimeout(function(){$("#nokaree").get(0).play();},8000);
		setTimeout(function(){
			$(".restart").removeClass("unshown");
		},9000);
	});
});