


startAd = function()
{
//animation 1
var calendartick, spinnerAni1, clockAni1, dollarAni1, graphAni1, clockHourHandAni1, clockMinuteHandAni1;

	
calendartick = document.getElementsByClassName("calendartick");
spinnerAni1 = document.getElementById("spinnerAni1");
clockAni1 = document.getElementById("clockAni1");
clockHourHandAni1 = document.getElementById("clockHourHandAni1");
clockMinuteHandAni1 = document.getElementById("clockMinuteHandAni1");
dollarAni1 = document.getElementById("dollarAni1");
graphAni1 = document.getElementById("graphAni1");


TweenMax.set([spinnerAni1, clockAni1, dollarAni1, graphAni1, clockHourHandAni1, clockMinuteHandAni1, calendartick],{transformOrigin: "50% 50%"});


var animation1Spinner = new TimelineMax({repeat:-1});
	
	animation1Spinner.to(spinnerAni1, 10, {rotation:360, ease: Power0.easeNone})
	.to([ clockAni1, dollarAni1, graphAni1], 10, {rotation:-360, ease: Power0.easeNone},"-=10")
	
	
	var animation1Clock = new TimelineMax({repeat:-1});
	
	animation1Clock.to(clockHourHandAni1, 10, {rotation:360, ease: Power0.easeNone})
	.to(clockMinuteHandAni1, 10, {rotation:4320, ease: Power0.easeNone},"-=10")
	
	var animation1Calendar = new TimelineMax({repeat:-1, repeatDelay:2});
	animation1Calendar.staggerFrom(calendartick, 1, {scale:0, ease: Elastic.easeOut.config(1, 0.3)},0.4)
	
	

	
//animation 2
var handAni2, lineFrontAni2, roundAndRoundAni2;

handAni2 = document.getElementById("handAni2");
lineFrontAni2 = document.getElementById("lineFrontAni2");
roundAndRoundAni2 = document.getElementById("roundAndRoundAni2");


TweenMax.set([roundAndRoundAni2, handAni2],{transformOrigin: "50% 50%"});
TweenMax.set(roundAndRoundAni2,{scale:0.8});
TweenMax.set(handAni2,{rotation:-182});

var animation2 = new TimelineMax({repeat:-1, repeatDelay:2});
	
	animation2
		.to(handAni2, 1, {rotation:0, ease: Power1.easeInOut})
		.to(handAni2, 0.5, {rotation:-10})
		.to(handAni2, 0.2, {rotation:0})
		.call(animation21)
		.to(handAni2, 1, {rotation:-182},"+=1.5")
		.fromTo(lineFrontAni2, 0.7, {drawSVG:"0% 6%"}, {drawSVG:"94% 100%", ease:Power0.easeNone},"-=1.5")

		.to(roundAndRoundAni2, 4, {rotation:-2520, ease: Power4.easeInOut},"-=1.5")
	
	function animation21 () {
  TweenMax.fromTo(handAni2, 0.1, {rotation:0},{rotation:10, yoyo:true, repeat:15})
	
	};

	
//animation 3
var pageAni3, dollarsignAni3, bar1Ani3, bar2Ani3, figureAni3, moreAni3;

	
pageAni3 = document.getElementsByClassName("pageAni3");
dollarsignAni3 = document.getElementById("dollarsignAni3");
bar1Ani3 = document.getElementById("bar1Ani3");
bar2Ani3 = document.getElementById("bar2Ani3");
figureAni3 = document.getElementById("figureAni3");
moreAni3 = document.getElementById("moreAni3");


TweenMax.set([dollarsignAni3, bar1Ani3, bar2Ani3],{transformOrigin: "50% 50%"});
TweenMax.set([figureAni3],{transformOrigin: "50% 100%"});


var animation3 = new TimelineMax({repeat:-1});
	
animation3
	.from(dollarsignAni3, 2, {rotation:-2160, scale:0, ease: Back.easeOut.config(1)})
	.from(bar1Ani3, 0.5, {x:-90, ease: Back.easeOut.config(2)},"-=0.5")
	.from(bar2Ani3, 0.5, {x:90, ease: Back.easeOut.config(2)},"-=0.5")
	.from(figureAni3, 0.5, {opacity:0, y:"-=20", ease: Back.easeOut.config(2)},"-=0.5")
	.from(moreAni3, 0.5, {opacity:0, y:"+=20", ease: Back.easeOut.config(2)},"-=0.5")
	
	.to([dollarsignAni3, bar1Ani3, bar2Ani3, figureAni3, moreAni3], 0.5, {opacity:0},"+=5")
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
//animation 4
var counterAni4, counterOuter, diyAni4, arrowAni4, text2Ani4;

counterAni4 = document.getElementsByClassName("counterCounterAni4");
counterOuter = document.getElementsByClassName("counterOuter");
diyAni4 = document.getElementById("diyAni4");
arrowAni4	= document.getElementById("arrowAni4");
text2Ani4	= document.getElementById("text2Ani4");
	
	TweenMax.set(text2Ani4,{transformOrigin: "50% 50%"});

	
var animation4Countup = new TimelineMax({repeat:-1});
	animation4Countup
	.call(countup)
	.from(diyAni4, 1, {y:55, ease: Elastic.easeOut.config(1.5, 0.4)},"+=3.4")
	.from(arrowAni4, 1, {y:-55, ease: Elastic.easeOut.config(1.5, 0.4)},"-=1")
	.from(text2Ani4, 1, {scale:0, ease: Elastic.easeOut.config(1.5, 0.4)},"-=1")
	.to([counterOuter, text2Ani4, diyAni4, arrowAni4], 1, {opacity:0, delay:5},"+=5")
	.call(resetAni2)

	
	function resetAni2(){
		
	$('.counterAni4').text('0')
		
	}
	
	
	function countup(){
	
	$('.counterAni4').each(function() {
  var $this = $(this),
      countToAni4 = $this.attr('data-countAni4');
		
  $({ countNumAni2: $this.text()}).animate({
    countNumAni2: countToAni4
  },
  {
    duration: 3500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNumAni2)+ "%");
    },
    complete: function() {
      $this.text(this.countNumAni2 + "%");
//      alert('finished');
    }
  });  
});		
}
	
	
	
//animation 5
var blueArrowPathAni5, orangeArrowPathAni5, blueArrowAni5, orangeArrowAni5, moreAni5, figureAni5;

blueArrowPathAni5 = document.getElementById("blueArrowPathAni5");
orangeArrowPathAni5 = document.getElementById("orangeArrowPathAni5");
blueArrowAni5 = document.getElementById("blueArrowAni5");
orangeArrowAni5 = document.getElementById("orangeArrowAni5");
moreAni5 = document.getElementById("moreAni5");
figureAni5 = document.getElementById("figureAni5");

	
	TweenMax.set([blueArrowAni5, orangeArrowAni5],{transformOrigin: "50% 50%"});

var animation5 = new TimelineMax({repeat:-1, repeatDelay:2});

	
animation5
	.from(blueArrowAni5, 1.5, {x:-45, y:45, scale:0, ease: Power2.easeInOut})
	.fromTo(blueArrowPathAni5, 1.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%", ease: Power2.easeInOut},"-=1.48")
	.from(figureAni5, 1.5, {y:50, ease: Power2.easeInOut},"-=1.48")

	.fromTo(orangeArrowPathAni5, 1.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", ease: Power2.easeInOut})
	.from(orangeArrowAni5, 1.5, {x:-68, y:68, scale:0, ease: Power2.easeInOut},"-=1.5")
	.from(moreAni5, 1.5, {y:-20, ease: Power2.easeInOut},"-=1.5")
	.to([moreAni5, orangeArrowAni5, orangeArrowPathAni5, figureAni5, blueArrowPathAni5, blueArrowAni5], 1.5, {opacity:0},"+=5")
	
	
	
//animation 6
var handAni2, lineFrontAni2, roundAndRoundAni2;

penAni6 = document.getElementById("penAni6");
line1Ani6 = document.getElementById("line1Ani6");
line2Ani6 = document.getElementById("line2Ani6");
line3Ani6 = document.getElementById("line3Ani6");
line4Ani6 = document.getElementById("line4Ani6");
line5Ani6 = document.getElementById("line5Ani6");
line6Ani6 = document.getElementById("line6Ani6");
crossLine1Ani6 = document.getElementById("crossLine1Ani6");
crossLine2Ani6 = document.getElementById("crossLine2Ani6");


//TweenMax.set(penAni6,{x:-38, y:-5});
TweenMax.set(penAni6,{transformOrigin: "50% 50%"});

var animation6 = new TimelineMax({repeat:-1, repeatDelay:2});
	
	animation6
	
		.to(penAni6, 1, {x:-32, y:-10, rotation:4, ease: Power2.easeInOut})
		
		.to(penAni6, 0.5, {x:-50, y:3, rotation:-4, ease: Power2.easeInOut})
		.fromTo(crossLine1Ani6, 0.5, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%", ease: Power2.easeInOut},"-=0.5")
		.to(penAni6, 0.3, {x:-48, y:-10, rotation:4, ease: Power2.easeInOut})
		.to(penAni6, 0.5, {x:-34, y:5, rotation:-4, ease: Power2.easeInOut})
		.fromTo(crossLine2Ani6, 0.5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", ease: Power2.easeInOut},"-=0.5")
		.to(penAni6, 0.7, {x:0, y:0, rotation:0, ease: Power2.easeInOut})
		.to([crossLine1Ani6, crossLine2Ani6], 0.3, {opacity:0}, "+=5")
	
	
	
//		.to(handAni2, 0.5, {rotation:-10})
//		.to(handAni2, 0.2, {rotation:0})
//		.call(animation21)
//		.to(handAni2, 1, {rotation:-182},"+=1.5")
//		.fromTo(lineFrontAni2, 0.7, {drawSVG:"0% 6%"}, {drawSVG:"94% 100%", ease:Power0.easeNone},"-=1.5")
//
//		.to(roundAndRoundAni2, 4, {rotation:-2520, ease: Power4.easeInOut},"-=1.5")
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//animation 7
var cog1Ani7, cog2Ani7, cog3Ani7;

cog1Ani7 = document.getElementById("cog1Ani7");
cog2Ani7 = document.getElementById("cog2Ani7");
cog3Ani7 = document.getElementById("cog3Ani7");


var animation7 = new TimelineMax({repeat:-1, yoyo:true});

		TweenMax.set([cog1Ani7, cog2Ani7, cog3Ani7],{transformOrigin: "50% 50%"});
	
animation7
	.to(cog1Ani7, 20, {rotation:1800, ease: Power2.easeInOut})
	.to(cog2Ani7, 20, {rotation:-1800, ease: Power2.easeInOut},"-=20")
	.to(cog3Ani7, 20, {rotation:1800, ease: Power2.easeInOut},"-=20")
	
//animation 8
var leftToRightAni8;

leftToRightAni8 = document.getElementById("leftToRightAni8");



//TweenMax.set([leftToBottomAni8,rightToBottomAni8],{opacity:0});


var animation8 = new TimelineMax({repeat:-1, yoyo:true});
	
	animation8
	
		.fromTo(leftToRightAni8, 0.7, {drawSVG:"0% 5%"}, {drawSVG:"95% 100%", ease:Power0.easeNone})
		
		.fromTo(leftToRightAni8, 0.7, {drawSVG:"0% 5%"}, {drawSVG:"95% 100%", ease:Power0.easeNone})
	
		.fromTo(leftToRightAni8, 0.7, {drawSVG:"95% 100%"}, {drawSVG:"0% 5%", ease:Power0.easeNone})
	

		
	
	

//animation 9
var allShapesAni9, shape1Ani9, shape2Ani9, shape3Ani9, shape4Ani9;

allShapesAni9 = document.getElementById("allShapesAni9");
shape1Ani9 = document.getElementById("shape1Ani9");
shape2Ani9 = document.getElementById("shape2Ani9");
shape3Ani9 = document.getElementById("shape3Ani9");
shape4Ani9 = document.getElementById("shape4Ani9");

var animation9 = new TimelineMax({repeat:-1});
	TweenMax.set([shape1Ani9, shape2Ani9, shape3Ani9, shape4Ani9],{scale:1.1,transformOrigin: "50% 50%"});
		TweenMax.set(allShapesAni9,{transformOrigin: "50% 50%"});
	
animation9
	.from(shape1Ani9, 0.5, {rotation:-80, x:-105, y:-5, ease: Power1.easeInOut})
		.to(shape1Ani9, 0.2, {scale:1},"-=0.1")
		.from(shape2Ani9, 0.5, {rotation:20, x:70, y:-30, ease: Power1.easeInOut})
		.to(shape2Ani9, 0.2, {scale:1},"-=0.1")
		.from(shape4Ani9, 0.5, {rotation:-50, x:-60, y:45, ease: Power1.easeInOut})
		.to(shape4Ani9, 0.2, {scale:1},"-=0.1")
		.from(shape3Ani9, 0.5, {rotation:20, x:90, y:15, ease: Power1.easeInOut})
		.to(shape3Ani9, 0.2, {scale:1},"-=0.1")
	
	.to(shape1Ani9, 1, {rotation:-80, x:-105, y:-5, scale:1.1, ease: Power4.easeInOut},"+=2")
		.to(shape2Ani9, 1, {rotation:20, x:70, y:-30, scale:1.1, ease: Power4.easeInOut},"-=1")
		.to(shape4Ani9, 1, {rotation:-50, x:-60, y:45, scale:1.1, ease: Power4.easeInOut},"-=1")
		.to(shape3Ani9, 1, {rotation:20, x:90, y:15, scale:1.1, ease: Power4.easeInOut},"-=1")
		




	
//var animation4Countup = new TimelineMax({repeat:-1});
//	animation4Countup
//	.call(countup)
//	.to(counterOuter, 1, {opacity:0, delay:5},"+=5")
//	.call(resetAni2)
//
//	
//	function resetAni2(){
//		
//	$('.counterAni4').text('0')
//		
//	}
//	
//	
//	function countup(){
//	
//	$('.counterAni4').each(function() {
//  var $this = $(this),
//      countToAni4 = $this.attr('data-countAni4');
//		
//  $({ countNumAni2: $this.text()}).animate({
//    countNumAni2: countToAni4
//  },
//  {
//    duration: 2500,
//    easing:'linear',
//    step: function() {
//      $this.text(Math.floor(this.countNumAni2)+ "%");
//    },
//    complete: function() {
//      $this.text(this.countNumAni2 + "%");
////      alert('finished');
//    }
//  });  
//});		

	
	
////animation 3
//	var awning1Ani3, awning2Ani3, awning3Ani3, awning4Ani3, awning5Ani3, awning6Ani3, awning7Ani3, awning8Ani3, awning9Ani3, counterOuterAni3;
//
//	awning1Ani3 = document.getElementById("awning1Ani3");
//	awning2Ani3 = document.getElementById("awning2Ani3");
//	awning3Ani3 = document.getElementById("awning3Ani3");
//	awning4Ani3 = document.getElementById("awning4Ani3");
//	awning5Ani3 = document.getElementById("awning5Ani3");
//	awning6Ani3 = document.getElementById("awning6Ani3");
//	awning7Ani3 = document.getElementById("awning7Ani3");
//	awning8Ani3 = document.getElementById("awning8Ani3");
//	awning9Ani3 = document.getElementById("awning9Ani3");
//	
//	counterOuterAni3 = document.getElementsByClassName("counterOuterAni3");
//
//	TweenLite.set([awning1Ani3,awning2Ani3, awning3Ani3,awning4Ani3,awning5Ani3,awning6Ani3,awning7Ani3,awning8Ani3,awning9Ani3],{transformPerspective: 1500, rotationX:-50, transformOrigin: "50% 0%"});
//	
//	
//	var animation3awingings1 = new TimelineMax({repeat:-1, repeatDelay:0.5});
//	animation3awingings1
//	.staggerFromTo([awning1Ani3,awning2Ani3, awning3Ani3,awning4Ani3,awning5Ani3,awning6Ani3,awning7Ani3,awning8Ani3,awning9Ani3], 3, {rotationX: -50},{rotationX: 0, ease: Back.easeOut.config(7)}, 0.01)
//	
//	.staggerTo([awning1Ani3,awning2Ani3, awning3Ani3,awning4Ani3,awning5Ani3,awning6Ani3,awning7Ani3,awning8Ani3,awning9Ani3], 3, {rotationX: -40, ease: Back.easeOut.config(2)}, 0.03)
//	
//	.staggerFromTo([awning1Ani3,awning2Ani3, awning3Ani3,awning4Ani3,awning5Ani3,awning6Ani3,awning7Ani3,awning8Ani3,awning9Ani3], 4, {rotationX: -40},{rotationX: 0, ease: Back.easeOut.config(2)}, 0.01)
//	
//	.staggerTo([awning1Ani3,awning2Ani3, awning3Ani3,awning4Ani3,awning5Ani3,awning6Ani3,awning7Ani3,awning8Ani3,awning9Ani3], 2, {rotationX: -50, ease: Back.easeOut.config(1)}, 0.02)
//	
//
//	var animation3Countup = new TimelineMax({repeat:-1});
//	animation3Countup
//	.call(countupAni3)
//	.to(counterOuterAni3, 1, {opacity:0, delay:5},"+=5")
//
//	.call(resetAni3)
//
//	
//	function resetAni3(){
//		
//	$('.counterAni3').text('0')
//		
//	}
//	
//	
//	function countupAni3(){
//	
//	$('.counterAni3').each(function() {
//  var $this = $(this),
//      countToAni3 = $this.attr('data-countAni3');
//		
//  $({ countNumAni3: $this.text()}).animate({
//    countNumAni3: countToAni3
//  },
//  {
//    duration: 2500,
//    easing:'linear',
//    step: function() {
//      $this.text(Math.floor(this.countNumAni3)+ "%");
//    },
//    complete: function() {
//      $this.text(this.countNumAni3 + "%");
////      alert('finished');
//    }
//  });  
//});		
//}
//
//	
////animation 4
//var globeLandAni4, heartAni4, bagBlueAni4, truckAni4, cameraAni4, shopAni4, cartAni4,
//blockOrange1Ani4, blockOrange2Ani4, blockGrey1Ani4, blockGrey2Ani4, blockMaroon2Ani4, blockRed2Ani4, blockOrange3Ani4, blockBlue1Ani4, blockDarkBlue1Ani4, blockDarkBlue2Ani4, bounceOuterAni4;
//	
//	globeLandAni4 = document.getElementById("globeLandAni4");
//	heartAni4 = document.getElementById("heartAni4");
//	bagBlueAni4 = document.getElementById("bagBlueAni4");
//	truckAni4 = document.getElementById("truckAni4");
//	cameraAni4 = document.getElementById("cameraAni4");
//	shopAni4 = document.getElementById("shopAni4");
//	cartAni4 = document.getElementById("cartAni4");
//	blockOrange1Ani4 = document.getElementById("blockOrange1Ani4");
//	blockOrange2Ani4 = document.getElementById("blockOrange2Ani4");
//	blockGrey1Ani4 = document.getElementById("blockGrey1Ani4");
//	blockGrey2Ani4 = document.getElementById("blockGrey2Ani4");
//	blockMaroon2Ani4 = document.getElementById("blockMaroon2Ani4");
//	blockRed2Ani4 = document.getElementById("blockRed2Ani4");
//	blockOrange3Ani4 = document.getElementById("blockOrange3Ani4");
//	blockBlue1Ani4 = document.getElementById("blockBlue1Ani4");
//	blockDarkBlue1Ani4 = document.getElementById("blockDarkBlue1Ani4");
//	blockDarkBlue2Ani4 = document.getElementById("blockDarkBlue2Ani4");
//	bounceOuterAni4 = document.getElementsByClassName("bounceOuterAni4");
//
//	TweenMax.set(globeLandAni4,{x:170});
//
//	var animation4Globe = new TimelineMax({repeat:-1});
//	animation4Globe
//	.to(globeLandAni4, 10, {x:-146, ease: Power0.easeNone})
//	
//	TweenLite.set([heartAni4, bagBlueAni4, blockRed2Ani4, blockOrange3Ani4, cameraAni4, truckAni4, blockDarkBlue1Ani4, blockDarkBlue1Ani4, blockDarkBlue1Ani4, blockMaroon2Ani4, blockOrange1Ani4, shopAni4, blockBlue1Ani4, blockDarkBlue2Ani4, blockOrange2Ani4, cartAni4],{transformPerspective: 1500, transformOrigin: "50% 50%"});
//	
//	var animation4 = new TimelineMax({repeat:-1, repeatDelay:1, yoyo:true});
//	
//	animation4
//	.from(heartAni4, 1, {x:146, y:20, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(bagBlueAni4, 1, {x:-80, y:-80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockRed2Ani4, 1, {x:-130, y:0, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockOrange3Ani4, 1, {x:130, y:-80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockGrey2Ani4, 1, {x:-150, y:-80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(cameraAni4, 1, {x:130, y:80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(truckAni4, 1, {x:130, y:-30, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockDarkBlue1Ani4, 1, {x:-130, y:30, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockMaroon2Ani4, 1, {x:80, y:30, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockOrange1Ani4, 1, {x:-30, y:40, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(shopAni4, 1, {x:-60, y:-40, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockGrey1Ani4, 1, {x:150, y:-80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockBlue1Ani4, 1, {x:0, y:80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockDarkBlue2Ani4, 1, {x:0, y:-30, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(blockOrange2Ani4, 1, {x:130, y:80, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//	.from(cartAni4, 1, {x:-50, y:50, rotationY:-720, scaleX:0, scaleY:0, ease: Power3.easeOut}, "-=0.7")
//		
//	var animation4Bounce = new TimelineMax({repeat:-1, yoyo:true});
//	animation4Bounce
//	.staggerTo(bounceOuterAni4, 2, {y:5, ease: Back.easeInOut.config(4)}, 0.3)
//	
//	
//	
//	//animation 5
//	var money1Ani5, money2Ani5, money3Ani5, money4Ani5, money5Ani5, money6Ani5, money7Ani5, money8Ani5, money9Ani5, moneyTopAni5, graphDataAni5, serverLight1Ani5, serverLight2Ani5, serverLight3Ani5, dialPath1Ani5, dialPath2Ani5, dialPath3Ani5, dialPath4Ani5, dialPath5Ani5, arrowFrontAni5, arrowHeadAni5, dialAni5;
//	
//	money1Ani5 = document.getElementById("money1Ani5");
//	money2Ani5 = document.getElementById("money2Ani5");
//	money3Ani5 = document.getElementById("money3Ani5");
//	money4Ani5 = document.getElementById("money4Ani5");
//	money5Ani5 = document.getElementById("money5Ani5");
//	money6Ani5 = document.getElementById("money6Ani5");
//	money7Ani5 = document.getElementById("money7Ani5");
//	money8Ani5 = document.getElementById("money8Ani5");
//	money9Ani5 = document.getElementById("money9Ani5");
//	moneyTopAni5 = document.getElementById("moneyTopAni5");
//	
//	graphDataAni5 = document.getElementById("graphDataAni5");
//	
//	serverLight1Ani5 = document.getElementById("serverLight1Ani5");
//	serverLight2Ani5 = document.getElementById("serverLight2Ani5");
//	serverLight3Ani5 = document.getElementById("serverLight3Ani5");
//	
//	dialPath1Ani5 = document.getElementById("dialPath1Ani5");
//	dialPath2Ani5 = document.getElementById("dialPath2Ani5");
//	dialPath3Ani5 = document.getElementById("dialPath3Ani5");
//	dialPath4Ani5 = document.getElementById("dialPath4Ani5");
//	dialPath5Ani5 = document.getElementById("dialPath5Ani5");
//	arrowFrontAni5 = document.getElementById("arrowFrontAni5");
//	arrowHeadAni5 = document.getElementById("arrowHeadAni5");
//	dialAni5 = document.getElementById("dialAni5");
//	arrowBackAni5 = document.getElementById("arrowBackAni5");
//	arrowBackHeadAni5 = document.getElementById("arrowBackHeadAni5");
//
//
//	TweenLite.set([dialPath2Ani5, dialPath3Ani5, dialPath4Ani5, dialPath5Ani5],{opacity:0});
//	
//	TweenLite.set(dialAni5,{transformOrigin: "50% 50%"});
//	
//	dialAni5
//	
//	
//	var animation5Money = new TimelineMax({repeat:-1, repeatDelay:0.5});
//	animation5Money
//	.staggerFrom([money1Ani5, money2Ani5, money3Ani5, money4Ani5, money5Ani5, money6Ani5, money7Ani5, money8Ani5, money9Ani5], 0.5, {opacity:0, ease: Power3.easeOut}, 0.2)
//	.from(moneyTopAni5, 4.6, {y:"+=55", ease: Power3.easeOut}, 0)
//	
//	var animation5graph = new TimelineMax({repeat:-1});
//	animation5graph
//	.from(graphDataAni5, 0.2, {opacity:0})
//	.to(graphDataAni5, 10, {x:-74, ease: Power1.easeOut},"-=0.2")
//	.to(graphDataAni5, 0.5, {opacity:0})
//	
//	
//	var animation5line = new TimelineMax({repeat:-1, repeatDelay:0.5});
//	animation5line
//	.fromTo(dialPath1Ani5, 1, {drawSVG:"0% 3%"}, {drawSVG:"97% 100%", ease:Power0.easeNone})
//	.to(dialPath1Ani5, 0.2, {opacity:0})
//	
//	
//		var animation5arrow = new TimelineMax({repeat:-1});
//	animation5arrow
////	.fromTo(arrowFrontAni5, 1, {drawSVG:"0% 2%"}, {drawSVG:"98% 100%", ease:Power0.easeNone})
//	.to(arrowBackAni5, 1, {stroke:"#F29111"})
//	.to(arrowBackHeadAni5, 1, {fill:"#F29111"},"-=1")
//	.to(arrowBackAni5, 1, {stroke:"#FFD39E"})
//	.to(arrowBackHeadAni5, 1, {fill:"#FFD39E"},"-=1")
//	
//	var animation5dial = new TimelineMax({repeat:-1, repeatDelay:0.5});
//	animation5dial
//	.to(dialAni5, 1, {rotation:"+=20", ease: Back.easeOut.config(2)})
//	
//	.to(dialAni5, 4, {rotation:"-=30", ease: Back.easeOut.config(2)})
//	.to(dialAni5, 3, {rotation:"+=20", ease: Back.easeInOut.config(2)})
//	.to(dialAni5, 3, {rotation:"-=10", ease: Back.easeInOut.config(2)})
//	.to(dialAni5, 3, {rotation:"+=30", ease: Back.easeInOut.config(2)})
//	.to(dialAni5, 2, {rotation:"-=30", ease: Power2.easeInOut})
//	
//	
//	
//	
//	
//	TweenMax.to(serverLight1Ani5, 1, {opacity: 0, ease:RoughEase.ease.config({strength: 2, points: 200, randomize: true, taper: "none", clamp: true}), repeat: -1, yoyo: true });
//	
//	TweenMax.to(serverLight2Ani5, 1, {opacity: 0, ease:RoughEase.ease.config({strength: 2, points: 200, randomize: false, taper: "none", clamp: true}),delay:0.5, repeat: -1, yoyo: true, repeatDely:3 });
//	
//	TweenMax.to(serverLight3Ani5, 3, {opacity: 0, ease:RoughEase.ease.config({strength: 1, points: 50, randomize: true, taper: "none", clamp: true}), repeat: -1, yoyo: true,  repeatDely:6 });
//	
//	
//	//animation 6
//	var offerAni6, phoneAni6, signal1Ani6, signal2Ani6, signal3Ani6;
//	
//	offerAni6 = document.getElementById("offerAni6");
//	phoneAni6 = document.getElementById("phoneAni6");
//	signal1Ani6 = document.getElementById("signal1Ani6");
//	signal2Ani6 = document.getElementById("signal2Ani6");
//	signal3Ani6 = document.getElementById("signal3Ani6");
//	
//
//
//	TweenMax.set([phoneAni6, offerAni6],{transformOrigin: "50% 50%"});
//
//	TweenMax.set(offerAni6,{scaleX:0, scaleY:0});
//
//	var animation6 = new TimelineMax({repeat:-1, repeatDelay:2});
//	animation6
//	.from(phoneAni6, 2, {scaleX:0, scaleY:0, rotation:30, ease: Elastic.easeOut.config(1, 0.6)})
//	.to(signal1Ani6, 0.5, {fill:"#F29111"},"-=1")
//	.to(signal2Ani6, 0.5, {fill:"#F29111"},"-=0.9")
//	.to(signal3Ani6, 0.5, {fill:"#F29111"},"-=0.7")
//	.to([signal1Ani6, signal2Ani6, signal3Ani6], 0.2, {fill:"#DEE0E0"})
//	.to(signal1Ani6, 0.5, {fill:"#F29111"})
//	.to(signal2Ani6, 0.5, {fill:"#F29111"},"-=0.2")
//	.to(signal3Ani6, 0.5, {fill:"#F29111"},"-=0.2")
//	.to([signal1Ani6, signal2Ani6, signal3Ani6], 0.2, {fill:"#DEE0E0"})
//	.to(signal1Ani6, 0.5, {fill:"#F29111"})
//	.to(signal2Ani6, 0.5, {fill:"#F29111"},"-=0.2")
//	.to(signal3Ani6, 0.5, {fill:"#F29111"},"-=0.2")
//	.to([signal1Ani6, signal2Ani6, signal3Ani6], 0.2, {fill:"#DEE0E0"})
//	.to(offerAni6, 1, {scaleX:1, scaleY:1, rotation:360, ease: Elastic.easeOut.config(1, 0.5)},"-=1")
//	.to(phoneAni6, 1, {x:-200, y:40, scale:0.2, ease: Power3.easeIn},"+=0.5")
//	.to(phoneAni6, 0.5, {opacity:0, ease: Power3.easeIn},"-=0.5")
//	
//	
//	
//	//animation 7
//var vanAni7, parcel1Ani7, parcel2Ani7, parcel3Ani7, tick1Ani, tick2Ani7, tick3Ani7, largeHandAni7, smallHandAni7;
//
//	
//	
//	vanAni7 = document.getElementById("vanAni7");
//	parcel1Ani7 = document.getElementById("parcel1Ani7");
//	parcel2Ani7 = document.getElementById("parcel2Ani7");
//	parcel3Ani7 = document.getElementById("parcel3Ani7");
//	tick1Ani7 = document.getElementById("tick1Ani7");
//	tick2Ani7 = document.getElementById("tick2Ani7");
//	tick3Ani7 = document.getElementById("tick3Ani7");
//	
//	largeHandAni7 = document.getElementsByClassName("largeHandAni7");
//	smallHandAni7 = document.getElementsByClassName("smallHandAni7");
//
//	
//
//	TweenMax.set([parcel1Ani7, parcel2Ani7, parcel3Ani7, smallHandAni7, largeHandAni7, tick1Ani7, tick2Ani7, tick3Ani7],{transformOrigin: "50% 50%"});
//	TweenMax.set([tick1Ani7, tick2Ani7, tick3Ani7],{rotationY:-90});
//	TweenMax.set(vanAni7,{x:-540});
//	
//	
//	
//	
//	var animation7 = new TimelineMax({delay:1, repeat:-1, repeatDelay:2});
//	animation7
//	.to(vanAni7, 3, {x:400, ease: Power0.easeNone})
//	.from(parcel1Ani7, 1, {y:75, scale:0, rotation:180, ease: Back.easeOut.config(3)},"-=1.7")
//	.to(tick1Ani7, 0.3, {rotationY:0, ease: Back.easeOut.config(3)},"-=1.3")
//	.from(parcel2Ani7, 1, {y:75, scale:0, rotation:180, ease: Back.easeOut.config(3)},"-=1.3")
//	.to(tick3Ani7, 0.3, {rotationY:0, ease: Back.easeOut.config(3)},"-=1")
//	.set(vanAni7,{x:-540})
//	.to(vanAni7, 3, {x:400, ease: Power0.easeNone})
//		
//	.from(parcel3Ani7, 1, {y:75, scale:0, rotation:180, ease: Back.easeOut.config(3)},"-=0.7")
//	.to(tick2Ani7, 0.3, {rotationY:0, ease: Back.easeOut.config(3)},"-=0.7")
//	.to([parcel1Ani7, parcel2Ani7, parcel3Ani7], 0.5, {scale:0, delay:2})
//	.to([tick1Ani7, tick2Ani7, tick3Ani7], 0.5, {rotationY:-90},"-=0.5")
//
//	
//	
//	var animation7Clock = new TimelineMax({ repeat:-1,});
//	animation7Clock
//	.to(largeHandAni7, 10, {rotation:360, ease: Power0.easeNone})
//	.to(smallHandAni7, 10, {rotation:3600, ease: Power0.easeNone},"-=10")
//	
};	
