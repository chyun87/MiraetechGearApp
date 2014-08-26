// Gear 2 Swipe Gesture Tutorial
// ----------------------------------
//
// Copyright (c)2014 Dibia Victor, Denvycom
// Distributed under MIT license
//
// https://github.com/chuvidi2003/GearSwipeTutorial
$(window).load(function(){
	
	var mySwiper = new Swiper('.swiper-container',{
	    mode:'vertical',
	    slidesPerView : 'auto',
	  });  
	
	//This listens for the back button press
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	
	var incElement = document.getElementById('inc-container');
	var decElement = document.getElementById('dec-container');
	var startElement = document.getElementById('start-container');
	
	// Tap Gesture Enable
	/*
    var hammertime = Hammer(element, {
    	  tapHighlightColor: "rgba(5,0,0,0.9)" ,
    		  showTouches: true
    }).on("tap", function(event) {
    	$('#startVibrate').html("Tap");
    });*/ 
    
	var hammertimeinc = Hammer(startElement, {
	  	  tapHighlightColor: "rgba(5,0,0,0.9)" ,
	  		  showTouches: true
	  }).on("tap", function(event) {
	  	$('#startVibrate').html("Start Vibrate");
	  	// function to inc
	  }); 
	
    var hammertimeinc = Hammer(incElement, {
	  	  tapHighlightColor: "rgba(5,0,0,0.9)" ,
	  		  showTouches: true
	  }).on("tap", function(event) {
	  	$('#bpmValue').html(function(i, val) {
	  		return +val+1
	  	});
	  }); 
    
    var hammertime = Hammer(decElement, {
	  	  tapHighlightColor: "rgba(5,0,0,0.9)" ,
	  		  showTouches: true
	  }).on("tap", function(event) {
		 $('#bpmValue').html(function(i, val) {
		  		return +val-1
		 });	  	
	  }); 
    
    // Hold Gesture Enable
    var hammertime = Hammer(element).on("hold", function(event) {
    	$('#startVibrate').html("Hold");
    });
    
    // Rotate Gesture Enable
    var hammertime = Hammer(element).on("rotate", function(event) {
    	$('#startVibrate').html("Rotate");
    });
    
 // Swipe  Gesture  
    var hammertime = Hammer(element).on("swipeup", function(event) {
    	$('#startVibrate').html("Swipe up");
    });
    var hammertime = Hammer(element).on("swipedown", function(event) {
    	$('#startVibrate').html("Swipe down");
    });
    var hammertime = Hammer(element).on("swipeleft", function(event) {
    	$('#startVibrate').html("Swipe left");
    });
    var hammertime = Hammer(element).on("swiperight", function(event) {
    	$('#startVibrate').html("Swipe right");
    });
    
    // Pinc gesture
    var hammertime = Hammer(element).on("pinchin", function(event) {
    	$('#startVibrate').html("Pinch In");
    });
    var hammertime = Hammer(element).on("pinchout", function(event) {
    	$('#startVibrate').html("Pinch Out");
    });
    
});