// TODO (Step 2): fill in code creating destination objects here
var destination = {
    "placesAround": [
        {
            "place": "Paris, France",
            "id": 0,
            "description": Paris is one of those cities that is so romanticized, you wonder if it's real. And the thing is, it is. This was one of the first cities abroad I traveled to as an adult, and to this day, this trip is one of my favorites. The culture, food, and areas to explore feel endless. It's this perfect mix of tourist attractions and city living. I spent an entire week there, and it didn't feel like quite enough time. I'd definitely go back again to see the amazing art once more in person, and to run through a city so rich in history.
            //images
            "img1": "img/paris1.png",
            "img2": "img/paris2.png",
            "img3": "img/paris3.png",
            "img4": "img/paris4.png",
            "img5": "img/paris5.png",
            "img6": "img/paris6.png",

            //eat recommendations
            "eatName1": "something goes here", 
            "eatAddress1": "something goes here",
            "eatComments1": "something goes here",

            "eatName2": "something goes here",
            "eatAddress2": "something goes here",
            "eatComments2": "something goes here",

            "eatName3": "something goes here",
            "eatAddress3": "something goes here",
            "eatComments3": "something goes here",

            //play recommendations
            "playName1": "something goes here", 
            "playAddress1": "something goes here",
            "playComments1": "something goes here",

            "playName2": "something goes here",
            "playAddress2": "something goes here",
            "playComments2": "something goes here",

            "playName3": "something goes here",
            "playAddress3": "something goes here",
            "playComments3": "something goes here",

            //stay recommendation
            "stayName": "something goes here", 
            "stayAddress": "something goes here",
            "stayComments": "something goes here"
        },

        {
            "place": "Lisbon, Portugal",
            "id": 1,

            //images
            "img1": "img/lisbon1.jpeg",
            "img2": "img/lisbon2.jpeg",
            "img3": "img/lisbon3.jpeg",
            "img4": "img/lisbon4.jpeg",
            "img5": "img/lisbon5.jpeg",
            "img6": "img/lisbon6.jpeg",

            //eat recommendations
            "eatName1": "something goes here", 
            "eatAddress1": "something goes here",
            "eatComments1": "something goes here",

            "eatName2": "something goes here",
            "eatAddress2": "something goes here",
            "eatComments2": "something goes here",

            "eatName3": "something goes here",
            "eatAddress3": "something goes here",
            "eatComments3": "something goes here",

            //play recommendations
            "playName1": "something goes here", 
            "playAddress1": "something goes here",
            "playComments1": "something goes here",

            "playName2": "something goes here",
            "playAddress2": "something goes here",
            "playComments2": "something goes here",

            "playName3": "something goes here",
            "playAddress3": "something goes here",
            "playComments3": "something goes here",

            //stay recommendation
            "stayName": "something goes here", 
            "stayAddress": "something goes here",
            "stayComments": "something goes here"
        },
        {
            "place": "Copenhagen, Denmark",
            "img": "img/copenhagen.jpg",
            "id": 2
        }
    ]
}

$(document).ready(function(){
    // TODO (Step 4): fill in code for changing selection-template here
    
    // get the HTML template using jQuery
    var source = $("#selection-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(destination);
    // add the new HTML to the page
    $("#product-selection-container").append(newHTML);

    // TODO (Step 7): add function call for 1st update to detail-template
    updateProductDetail(0);

    // TODO: (Step 8): add code below for changing product details on click
    $(".product-selection").click(function(){
        var id = $(this).attr("id");
        updateProductDetail(id);
    });

});

// TODO (Step 6): fill in function for updating detail-template based on id
function updateProductDetail(id) {
  // get the HTML template using jQuery
  var source = $("#detail-template").html();
  // compile the template into a function
  var template = Handlebars.compile(source);
  // create new HTML using our data
  var newHTML = template(destination.placesAround[id]);
  // add the new HTML to the page
  $("#destination-container").html(newHTML);
}