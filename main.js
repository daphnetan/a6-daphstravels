// TODO (Step 2): fill in code creating destination objects here
var destination = {
    "placesAround": [
        {
            "name": "Paris",
            "price": "$2.00",
            "img": "img/paris.png",
            "id": 0
        },
        {
            "name": "Lisbon",
            "price": "$5.00",
            "img": "img/lisbon.png",
            "id": 1
        },
        {
            "name": "Copenhagen",
            "price": "$22.00",
            "img": "img/copenhagen.jpg",
            "id": 2
        }
    ]
}
/* 
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
 */