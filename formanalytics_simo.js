/*********************************
	WEAK FIELDS exits with timings

  original source: https://www.simoahava.com/analytics/form-field-timing-with-google-tag-manager/


  Current assumptions
  - The form should be selected on the body element (this can perhaps be more precize a bit more down the DOM tree?)
  - time spent in a field is expressed in miliseconds
  - A field is prefilled if the first enter contains the classes ng-not-empty and ng-untouched
  - A field is valid if it contains the class ng-is-valid
  - A field is completed with autocomplete or copy/paste if more than one characters gets inserted wihtin 2 miliseconds


  BUGS
  - firefox and safari don't fire the event focus on radio and checbox inputs. Need to do split the action based on input types.

*********************************/

(function() {

  //select form and create fields
  var form = document.querySelector('body');
  var fields = {};

  var enterField = function(e) {
    var element = e.target;
    var name = element.name;

    console.log("Focus on: " + element.name);

    fields[name] = {};

    //set timestamp for start entering field
    fields[name].timeEnter = new Date().getTime();

    //see if field was empty when entering field
    if($(element).hasClass("ng-was-not-empty") && $(element).hasClass("ng-untouched")){
      fields[name].prefilled = true;
    }else{
      fields[name].prefilled = false;
    }

    //see if autocomplete is used, or the user types all the way

  }

  var leaveField = function(e) {
    //set vars
    var element = e.target;
    var leaveType = e.type;

    var fieldName = element.name;
    var fieldType = element.tagName;
    var timeSpent;
    var fieldWasPrefilled;
    var fieldIsValid = false;


    if (fields.hasOwnProperty(fieldName)) {
      //focus event was present

      //keyboard input types
      if(fieldType == "INPUT" && element.type != "checkbox" && element.type != "radio"){
        //do all things for input types
        console.log(leaveType + " on: keyboard input " + element.name);
      }

      //selectboxes
      if(fieldType == "SELECT"){
        console.log(leaveType + " on: select option " + element.value);
      }

      //track time spent in field between enter and exit
      timeSpent = new Date().getTime() - fields[fieldName].timeEnter;

      //check if field was prefilled with Angular at enter
      fieldWasPrefilled = fields[fieldName].prefilled;

      //check if value of field was valid at exit
      if($(element).hasClass("ng-is-valid")){
        fieldIsValid = true;
      }

      //check how many characters were typed

      //check how many corrections were made while typing

      //only count if user is passed max session time (30 minutes)
      if (timeSpent > 0 && timeSpent < 1800000) {

        //send to analytics
        console.log({
          'eventCategory' : 'forms',
          'eventAction' : 'exit field',
          'eventLabel' : fieldName,
          'customMetricTimeSpent' : timeSpent,
          'customMetricLeaveType' : leaveType,
          'customMetricWasPrefilled' : fieldWasPrefilled,
          'customMetricIsValid' : fieldIsValid
        });
      }
      delete fields[fieldName];

    } else {
      //if the field was not set with a focus event

      if(leaveType == "change"){
        //radios
        if(fieldType == "INPUT"  && element.type == "radio"){
          console.log(leaveType + " on: radio option. No focus event registered.");
        }

        //checkboxes
        if(fieldType == "INPUT"  && element.type == "checkbox"){
          console.log(leaveType + " on: checkbox. No focus event registered.");
        }
      }

    }
  }

  if (form) {
    form.addEventListener('focus', function(e) { enterField(e); }, true);
    form.addEventListener('blur', function(e) { leaveField(e); }, true);
    form.addEventListener('change', function(e) { leaveField(e); }, true);

    // //playing around with each character that gets input
    // form.addEventListener('keypress', function(e) { console.log(e)}, true)
  }
})();


/* EXAMPLES OF FIELDS
prefilled, but untouched:
<input type="text" name="verzekerd_bedrag" id="verzekerd_bedrag" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required ng-valid-integer ng-valid-min ng-valid-max" placeholder="bedrag" ng-model="ctrl.settingsForm.verzekerdBedrag" ng-model-options="{ updateOn: 'blur' }" required="" cb-number="" cb-min="10000" cb-max="2000000" cb-integer="">

prefilled, but unchanged:
<input type="text" name="verzekerd_bedrag" id="verzekerd_bedrag" class="form-control ng-pristine ng-valid ng-not-empty ng-valid-required ng-valid-integer ng-valid-min ng-valid-max ng-touched" placeholder="bedrag" ng-model="ctrl.settingsForm.verzekerdBedrag" ng-model-options="{ updateOn: 'blur' }" required="" cb-number="" cb-min="10000" cb-max="2000000" cb-integer="">

prefilled, but changed:
<input type="text" name="verzekerd_bedrag" id="verzekerd_bedrag" class="form-control ng-valid ng-not-empty ng-valid-required ng-valid-integer ng-valid-min ng-valid-max ng-touched ng-dirty ng-valid-parse" placeholder="bedrag" ng-model="ctrl.settingsForm.verzekerdBedrag" ng-model-options="{ updateOn: 'blur' }" required="" cb-number="" cb-min="10000" cb-max="2000000" cb-integer="" style="">
*/
