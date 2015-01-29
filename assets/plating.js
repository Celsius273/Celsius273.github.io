$(document).ready(function(){
	var w = $(window);

	$("#about-nav").hover(function(){
		$("#about-nav").toggleClass( "active" );

	},function(){	
		$("#about-nav").toggleClass( "active" );
	});

	$("#projects-nav").hover(function(){
		$("#projects-nav").toggleClass( "active" );
	},function(){
		$("#projects-nav").toggleClass( "active" );
	});

	$("#contact-nav").hover(function(){
		$("#contact-nav").toggleClass( "active" );
	},function(){
		$("#contact-nav").toggleClass( "active" );
	});

	function updateNavbar(){
		var about_offset = $("#about").offset();
	    var about_position = about_offset.top-w.scrollTop();

	    var project_offset = $("#projects").offset();
	    var project_position = project_offset.top-w.scrollTop();

	    var contact_offset = $("#contact").offset();
	    var contact_position = contact_offset.top-w.scrollTop();

	    if ( $(window).height() - $("#contact").height() == contact_position){
	    	$("#about-nav").toggleClass( "active" , false);
	    	$("#projects-nav").toggleClass( "active" , false);
	    	$("#contact-nav").toggleClass( "active" , true);
	    }else if (project_position <= 0){
	    	$("#about-nav").toggleClass( "active" , false);
	    	$("#projects-nav").toggleClass( "active" , true);
	    	$("#contact-nav").toggleClass( "active" , false);
	    }else if (about_position <= 0){
	    	$("#about-nav").toggleClass( "active" , true);
	    	$("#projects-nav").toggleClass( "active" , false);
	    	$("#contact-nav").toggleClass( "active" , false);
	    }else{
	    	$("#about-nav").toggleClass( "active" , false);
	    	$("#projects-nav").toggleClass( "active" , false);
	    	$("#contact-nav").toggleClass( "active" , false);
	    }
	}

	setInterval(updateNavbar, 50);

});