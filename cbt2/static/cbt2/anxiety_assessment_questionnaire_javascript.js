var score=[];
var index=0;
var noOfQuestions = 7;

$(document).ready(function(){
	//$carousel_inner = $(".carousel-inner");
	/*
	$("#inner-carousel").append("<div class=\"item carousel1\">\
      <img src=\"images/therapist_professional.png\">\
      <div class=\"carousel-caption\">\
        <p>Have you found little pleasure or interest in doing things?</p>\
      </div>\
    </div>");
    $("#inner-carousel").append("<div class=\"item\">\
      <img src=\"images/therapist_professional.png\">\
      <div class=\"carousel-caption\">\
        <p>Have you found yourself feeling down, depressed or hopeless?</p>\
      </div>\
    </div>");
    //confirm("it is working");
    $(".left").click(function(){
    	confirm("left button clicked");
    });
    $(".right").click(function(){
    	confirm("left button clicked");
    });
    $(document).click(function(){
    	$(".carousel1").addClass("active");
    });
*/
//var count = 0;

//getting the index of the current question to set the score for that index
$("#carousel-example-generic").on('slid.bs.carousel', function(){
	var carouselData = $(this).data('bs.carousel');
  	var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  	//confirm("current quesiton no. "+currentIndex);
  	index = parseInt(currentIndex);
});

//on clicking an option the next question is displayed and the selected option is stored in the current index derived from above
$(".btn-anxiety-severity-option").click(function(){
  //storing the selected option
  //console.log(index);
  score[index] = parseInt($(this).val());

  //console.log(noOfUndefined(score)+"undefined; "+checkForUndefinedArrayValue(score));
  //console.log(score[0]+""+score[1]+""+score[3]+""+score[4]+""+""+score[5]+""+""+score[6]+""+""+score[7]+""+""+score[8]);
  //checking if one option is selected for every question
  if(noOfUndefined(score)){
    //confirm(arraySum(score));
    $("#score-string").val(stringArray(score));
    $("#submit-button").removeClass("disabled");
    // proceed to next page
  }else{
    console.log("not complete yet");
  }
  //proceeding to next question on click of a button
	$("#carousel-example-generic").carousel('next');
  
	//check if the user is on the last question; if yes then check if any question is left unanswered
	if(index === (noOfQuestions-1)){
   if(checkForUndefinedArrayValue(score)){
      //console.log("reaching here");
      confirm(arraySum(score));
   }else{
      confirm("You haven't selected an option for all the questions. Please do so.");
    }
  }
});

//lame hack to make carousel work for something it wasn't meant to be used for
$('#carousel-example-generic').carousel({
  interval: 10000000
});
//$("#carousel-example-generic").carousel('pause');
});

//calculate the sum of a passed array
var arraySum = function(arr){
	var sum=0;
	for(var i in arr){
		sum+=arr[i];
		console.log(arr[i]);
	}
	console.log(sum);
	return sum;
}

//this function checks if any of the value in the passed array is undefined. what it effectively does is see if the user has answered all the questions
var checkForUndefinedArrayValue = function(arr){
  console.log(arr.length);
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(typeof(arr[i]) === 'undefined'){
      console.log("not reaching here");
      return false;
    }
  }
  console.log("reaching here");
  return true;
}

var noOfUndefined = function(arr){
  for(var i=0; i<noOfQuestions; i++){
    if(typeof(arr[i]) === 'undefined'){
      return false;
    }
  }
  return true;
}

var stringArray = function(arr){
  var arrayString = '';
  for(var i=0; i<arr.length; i++){
    arrayString+=arr[i];
  }
  return arrayString;
}