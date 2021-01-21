'use strict';

console.log("some_string");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});
	$("a.thumbnail").click(projectClick);


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "green")
    var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    //containingProject.fadeOut();
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(description).fadeOut();
    }
}

/*$(".project").click(function(projectClick) {
	console.log("test");
	$("#fade_mes").fadeOut();
});*/

/*var containingProject = $(this).closest(".project");
containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");*/

/*$('#myelement').click(changeText);
  
function changeText(event){
	$(this).text("Changed text");
}

var description = $(".description");
description.addClass("active");

$("description").click(function(e) {
	$(this).toggleClass("active");
})*/