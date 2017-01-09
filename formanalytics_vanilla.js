/*********************************
	ZWAKKE VELDEN - Pure JavaScript
*********************************/

//select elements
const form = document.getElementsByTagName("FORM")[0];
var selected;

//bind 'focus in' events
form.addEventListener('focusin', function(e){
  //keyboard input gets focus
  if(e.target.tagName == "INPUT" && e.target.type != "submit" && e.target.type != "radio"){
    console.log("focus in keyboard input: " + e.target.name);
    console.log(e.target);
  }

  //select box gets focus
  if(e.target.tagName == "SELECT"){
    console.log("focus in select: " + e.target.name);
    console.log(e.target);
  }

});

//bind 'focusout' events
form.addEventListener('focusout', function(e){
  //keyboard input gets focus
  if(e.target.tagName == "INPUT" && e.target.type != "submit" && e.target.type != "radio"){
    console.log("focus out keyboard input: " + e.target.name);
  }

  //radio input gets focus
  if(e.target.tagName == "INPUT" && e.target.type == "radio"){
    //do things
    console.log("focus out radio input: " + e.target.name);
    console.log(e.target);
  }
});

//bind 'change' events
form.addEventListener('change', function(e){
  if(e.target.tagName == "SELECT"){
    //do things when input gets focus
    console.log("change select: " + e.target.name);
  }

  //radio input gets focus
  if(e.target.tagName == "INPUT" && e.target.type == "radio"){
    //do things
    console.log("change radio input: " + e.target.name);
    console.log(e.target);
  }
});
