$(document).ready(function(){
	var w = $(window);
	var mouseoverride = false;
	var screenHeight = w.innerHeight;
	$("#scroller").click(function(e){
		$("html, body").animate({scrollTop : w.height()});
	});

	$("#about-nav").hover(function(){
		$("#about-nav").toggleClass( "active", true );
		mouseoverride = true;
	},function(){
		if (mouseoverride == true){	
			$("#about-nav").toggleClass( "active", false );
			mouseoverride = false;
		}
	});

	$("#projects-nav").hover(function(){
		$("#projects-nav").toggleClass( "active", true );
		mouseoverride = true;
	},function(){
		if (mouseoverride == true){	
			$("#projects-nav").toggleClass( "active", false );
			mouseoverride = false;
		}
	});

	$("#contact-nav").hover(function(){
		$("#contact-nav").toggleClass( "active", true );
		mouseoverride = true;
	},function(){
		if (mouseoverride == true){	
			$("#contact-nav").toggleClass( "active", false );
			mouseoverride = false;
		}
	});

	function resizeProjects(){
		var photos = document.getElementsByClassName('project-photo');
		for(i=0; i<photos.length; i++) {
		    photos[i].style.height = (0.7111111111111111*photos[i].offsetWidth)+"px";
		  }
	}

	function updateNavbar(){
		//Well the website as of now only has 3 sections so this code should be fine
		var about_offset = $("#about").offset();
	    var about_position = about_offset.top-w.scrollTop();

	    var project_offset = $("#projects").offset();
	    var project_position = project_offset.top-w.scrollTop();

	    var contact_offset = $("#contact").offset();
	    var contact_position = contact_offset.top-w.scrollTop();

	    if ( $(window).height() - $("#contact").height() == contact_position){
	    	$("#contact-nav").toggleClass( "active" , true);
	    	if (mouseoverride == false){
	    		$("#projects-nav").toggleClass( "active", false );
	    		$("#about-nav").toggleClass( "active", false );
	    	}
	    }else if (project_position <= 0){
	    	$("#projects-nav").toggleClass( "active" , true);
	    	if (mouseoverride == false){
	    		$("#about-nav").toggleClass( "active", false );
	    		$("#contact-nav").toggleClass( "active", false );
	    	}
	    }else if (about_position <= 0){
	    	$("#about-nav").toggleClass( "active" , true);
	    	if (mouseoverride == false){
	    		$("#projects-nav").toggleClass( "active", false );
	    		$("#contact-nav").toggleClass( "active", false );
	    	}
	    }else{
	    	if (mouseoverride == false){
	    		$("#about-nav").toggleClass( "active", false );
	    		$("#projects-nav").toggleClass( "active", false );
	    		$("#contact-nav").toggleClass( "active", false );
	    	}
	    }
	}


	$('#bt1').click(function() {
		$('#fr1').attr('target',"_blank");
        $('#fr1').attr('action','mailto:kelvin.8000@gmail.com?subject=' + $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#fr1').submit();
    });

	setInterval(updateNavbar, 50);
	setInterval(resizeProjects, 50);
});