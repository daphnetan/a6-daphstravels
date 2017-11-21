//function that passes id from index to destination page
function show(id) { 
    localStorage.setItem("idd",JSON.stringify(id)); //create variable that stores id 
    window.location.href="destination.html"; //pass through to the next page
}

//places object that contains information by place
var places = {
    "desiredPlace": [
        {
            "name": "Paris, France",
            //id
            "id": 0,
            //other info
            "description": "Paris is one of those cities that is so romanticized, you wonder if it's real. And the thing is, it is. This was one of the first cities abroad I traveled to as an adult, and to this day, this trip is one of my favorites. The culture, food, and areas to explore feel endless. It's this perfect mix of tourist attractions and city living. I spent an entire week there, and it didn't feel like quite enough time. I'd definitely go back again to see the amazing art once more in person, and to run through a city so rich in history.",
            
            //images
            "img": "img/paris.png",
            "img1": "img/paris1.jpg",
            "img2": "img/paris2.jpg",
            "img3": "img/paris3.jpg",
            "img4": "img/paris4.jpg",
            "img5": "img/paris5.jpg",
            "img6": "img/paris6.jpg",

            //eat
            "eatName1": "Pierre Herme", 
            "eatAddress1": "72 Rue Bonaparte, 75006 Paris, France",
            "eatComments1": "We woke up almost every morning and headed to Pierre Herme to get croissants and macarons. Literally, the most indulgent way to start every morning. No regrets.",

            "eatName2": "Septime",
            "eatAddress2": "80 Rue de Charonne, 75011 Paris, France",
            "eatComments2": "If you want a trendy place to eat but want fair prices, head to Septime for lunch. I remember eating a vegetable dish with a poached egg—sounds ordinary, but it was out of this world. Call in ahead of time to make a reservation. Seriously, do it.",

            "eatName3": "Berthillon",
            "eatAddress3": "29-31 Rue Saint-Louis en l'Île, 75004 Paris, France",
            "eatComments3": "I ate two ice cream cones one morning because it was that good. In fact, I ate one before the Notre Dame and another later that evening. The flavoring is so deep and rich, especially the Pistachio and Hazelnut. No regrets.",

            // play
            "playName1": "Notre-Dame de Paris", 
            "playAddress1": "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
            "playComments1": "One of my favorite days in Paris was when  I climbed the Notre-Dame (387 steps!) first thing in the morning. It was a crisp, fall morning and I got a full view of Parisian bustle. The Eiffel Tower looked ever so picturesque from here, making the climb worth the wait.",

            "playName2": "Musée d'Orsay",
            "playAddress2": "1 Rue de la Légion d'Honneur, 75007 Paris, France",
            "playComments2": "The architecture of this museum alone is worth the visit. A former railway station, this museum hosts paintings from famed artists I had only seen in history books and museums at home. I could spend an entire afternoon just lounging around.",

            "playName3": "Monet’s Residence",
            "playAddress3": "84 Rue Claude Monet, 27620 Giverny, France",
            "playComments3": "Growing up, I would attempt to engage with my inner Monet. Nothing beat going a little outside of Paris for half a day to see the inspiration for Monet’s creations was breathtaking. I also got to walk up and down his street, to get a better sense the cozy corners of the real Parisian lifestyle.",

            //stay
            "stayName": "Notre-Dame de Paris", 
            "stayAddress": "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
            "stayComments": "I'm not sure if our Airbnb is still in operation. It wasn’t necessarily a place I would recommend. The area, however, was great and conveniently located. We could get almost anywhere by foot, especially to Pierre Herme and the museums. Priorities, people.",
            
        },
        {
            "name": "Sevilla, Spain",
            "id": 1,
            "description": "Seville is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmarks include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giralda.",
            
            //images
            "img": "img/sevilla.jpg",
            "img1": "img/sevilla1.jpg",
            "img2": "img/sevilla2.jpg",
            "img3": "img/sevilla3.jpg",
            "img4": "img/sevilla4.jpg",
            "img5": "img/sevilla5.jpg",
            "img6": "img/sevilla6.jpg",

             //eat
             "eatName1": "Pierre Herme", 
             "eatAddress1": "72 Rue Bonaparte, 75006 Paris, France",
             "eatComments1": "We woke up almost every morning and headed to Pierre Herme to get croissants and macarons. Literally, the most indulgent way to start every morning. No regrets.",
 
             "eatName2": "Septime",
             "eatAddress2": "80 Rue de Charonne, 75011 Paris, France",
             "eatComments2": "If you want a trendy place to eat but want fair prices, head to Septime for lunch. I remember eating a vegetable dish with a poached egg—sounds ordinary, but it was out of this world. Call in ahead of time to make a reservation. Seriously, do it.",
 
             "eatName3": "Berthillon",
             "eatAddress3": "29-31 Rue Saint-Louis en l'Île, 75004 Paris, France",
             "eatComments3": "I ate two ice cream cones one morning because it was that good. In fact, I ate one before the Notre Dame and another later that evening. The flavoring is so deep and rich, especially the Pistachio and Hazelnut. No regrets.",
 
             // play
             "playName1": "let's play", 
             "playAddress1": "testy test test",
             "playComments1": "One of my favorite days in Paris was when  I climbed the Notre-Dame (387 steps!) first thing in the morning. It was a crisp, fall morning and I got a full view of Parisian bustle. The Eiffel Tower looked ever so picturesque from here, making the climb worth the wait.",
 
             "playName2": "Musée d'Orsay",
             "playAddress2": "1 Rue de la Légion d'Honneur, 75007 Paris, France",
             "playComments2": "The architecture of this museum alone is worth the visit. A former railway station, this museum hosts paintings from famed artists I had only seen in history books and museums at home. I could spend an entire afternoon just lounging around.",
 
             "playName3": "Monet’s Residence",
             "playAddress3": "84 Rue Claude Monet, 27620 Giverny, France",
             "playComments3": "Growing up, I would attempt to engage with my inner Monet. Nothing beat going a little outside of Paris for half a day to see the inspiration for Monet’s creations was breathtaking. I also got to walk up and down his street, to get a better sense the cozy corners of the real Parisian lifestyle.",
 
             //stay
             "stayName": "daphne's haus", 
             "stayAddress": "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
             "stayComments": "I'm not sure if our Airbnb is still in operation. It wasn’t necessarily a place I would recommend. The area, however, was great and conveniently located. We could get almost anywhere by foot, especially to Pierre Herme and the museums. Priorities, people.", 
            
        },

        {
            "name": "Lisbon, Portugal",
            "id": 2,
            "description": "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.",

            //images
            "img": "img/lisbon.jpeg",
            "img1": "img/lisbon1.jpeg",
            "img2": "img/lisbon2.jpeg",
            "img3": "img/lisbon3.jpeg",
            "img4": "img/lisbon4.jpeg",
            "img5": "img/lisbon5.jpeg",
            "img6": "img/lisbon6.jpeg",

             //eat
             "eatName1": "Pierre Herme", 
             "eatAddress1": "72 Rue Bonaparte, 75006 Paris, France",
             "eatComments1": "We woke up almost every morning and headed to Pierre Herme to get croissants and macarons. Literally, the most indulgent way to start every morning. No regrets.",
 
             "eatName2": "Septime",
             "eatAddress2": "80 Rue de Charonne, 75011 Paris, France",
             "eatComments2": "If you want a trendy place to eat but want fair prices, head to Septime for lunch. I remember eating a vegetable dish with a poached egg—sounds ordinary, but it was out of this world. Call in ahead of time to make a reservation. Seriously, do it.",
 
             "eatName3": "Berthillon",
             "eatAddress3": "29-31 Rue Saint-Louis en l'Île, 75004 Paris, France",
             "eatComments3": "I ate two ice cream cones one morning because it was that good. In fact, I ate one before the Notre Dame and another later that evening. The flavoring is so deep and rich, especially the Pistachio and Hazelnut. No regrets.",
 
             // play
             "playName1": "Notre-Dame de Paris", 
             "playAddress1": "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
             "playComments1": "One of my favorite days in Paris was when  I climbed the Notre-Dame (387 steps!) first thing in the morning. It was a crisp, fall morning and I got a full view of Parisian bustle. The Eiffel Tower looked ever so picturesque from here, making the climb worth the wait.",
 
             "playName2": "Musée d'Orsay",
             "playAddress2": "1 Rue de la Légion d'Honneur, 75007 Paris, France",
             "playComments2": "The architecture of this museum alone is worth the visit. A former railway station, this museum hosts paintings from famed artists I had only seen in history books and museums at home. I could spend an entire afternoon just lounging around.",
 
             "playName3": "Monet’s Residence",
             "playAddress3": "84 Rue Claude Monet, 27620 Giverny, France",
             "playComments3": "Growing up, I would attempt to engage with my inner Monet. Nothing beat going a little outside of Paris for half a day to see the inspiration for Monet’s creations was breathtaking. I also got to walk up and down his street, to get a better sense the cozy corners of the real Parisian lifestyle.",
 
             //stay
             "stayName": "toodles", 
             "stayAddress": "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
             "stayComments": "I'm not sure if our Airbnb is still in operation. It wasn’t necessarily a place I would recommend. The area, however, was great and conveniently located. We could get almost anywhere by foot, especially to Pierre Herme and the museums. Priorities, people.",          
        },
        
        {
            "name": "Copenhagen, Denmark",
            //id
            "id": 3,

            //images
            "img": "img/copenhagen.jpg",
            "img1": "img/copenhagen1.jpg",
            "img2": "img/copenhagen2.jpg",
            "img3": "img/copenhagen3.jpg",
            "img4": "img/copenhagen4.jpg",
            "img5": "img/copenhagen5.jpg",
            "img6": "img/copenhagen6.jpg",
        },

        {
            "name": "UK + Ireland",
            //id
            "id": 4,
            "img": "img/uk.png",
            "img1": "img/uk1.jpg",
            "img2": "img/uk2.jpg",
            "img3": "img/uk3.jpg",
            "img4": "img/uk4.jpg",
            "img5": "img/uk5.jpg",
            "img6": "img/uk6.jpg",
        },

        {
            "name": "Marrakech, Morocco",
            //id
            "id": 5,

             //images
             "img": "img/morocco.png",
             "img1": "img/morocco1.jpg",
             "img2": "img/morocco2.jpg",
             "img3": "img/morocco3.jpg",
             "img4": "img/morocco4.jpg",
             "img5": "img/morocco5.jpg",
             "img6": "img/morocco6.jpg",
        },
    ]
}

$(document).ready(function(){
    //populate page with destination choice
    var i=JSON.parse(localStorage.getItem("idd"));
    updateProductDetail(i);
    updateEatDetail(i);
    updatePlayDetail(i);
    updateStayDetail(i);

    // populate other guides "footer"
    var source = $("#selection-template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(places);
    $("#product-selection-container").append(newHTML);

    //change place details on click in other guides
    $(".product-selection").click(function() {
        $(window).scrollTop(0);
        var idd = $(this).attr("id");
        updateProductDetail(idd);       
        updateEatDetail(idd);
        updatePlayDetail(idd);
        updateStayDetail(idd);
    });
});

//update detail-template based on id
function updateProductDetail(id) {
    // get the HTML template using jQuery
    var source = $("#detail-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(places.desiredPlace[id]);
    // add the new HTML to the page
    $("#product-detail-container").html(newHTML);
}

//updating play-template based on id
function updateEatDetail(id) {
    // get the HTML template using jQuery
    var source = $("#eat-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(places.desiredPlace[id]);
    // add the new HTML to the page
    $("#eat-detail-container").html(newHTML);
}

//updating play-template based on id
function updatePlayDetail(id) {
    // get the HTML template using jQuery
    var source = $("#play-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(places.desiredPlace[id]);
    // add the new HTML to the page
    $("#play-detail-container").html(newHTML);
}

//updating stay-template based on id
function updateStayDetail(id) {
    // get the HTML template using jQuery
    var source = $("#stay-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(places.desiredPlace[id]);
    // add the new HTML to the page
    $("#stay-detail-container").html(newHTML);
}


