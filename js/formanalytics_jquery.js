/*********************************
	WEAK FIELDS - jQuery
*********************************/

//select form element with all its children elements
var form = $("form");

//settings for reporting
var log = {};
log.elements = false;
log.timings = true;

//do things when input fields in the form are used
form.on('focusin', function(e){
  //keyboard input gets focus
  if(e.target.tagName == "INPUT" && e.target.type != "submit" && e.target.type != "radio"){
    let input = e.target;

    if(log.elements == true){
      console.log("focus in keyboard input: " + input.name);
      console.log(input);
    }

    if();
  }

  //select box gets focus
  if(e.target.tagName == "SELECT"){
    let select = e.target;

    if(log.elements == true){
      console.log("focus in select: " + select.name);
      console.log(select);
    }
  }

});

form.on('focusout', function(e){
  //keyboard input gets focus
  if(e.target.tagName == "INPUT" && e.target.type != "submit" && e.target.type != "radio"){
    //do things
    let input = e.target;

    if(log.elements == true){
      console.log("focus out keyboard input: " + input.name);
    }
  }

});

form.on('change', function(e){
  if(e.target.tagName == "SELECT"){
    //do things
    let select = e.target;

    if(log.elements == true){
      console.log("change select: " + select.name);
      console.log(select);
    }
  }

  //radio input gets focus
  if(e.target.tagName == "INPUT" && e.target.type == "radio"){
    //do things
    let radio = e.target;

    if(log.elements == true){
      console.log("change radio input: " + radio.name);
      console.log(radio);
    }
  }
});
