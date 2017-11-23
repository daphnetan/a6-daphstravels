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
            "description": "Sevilla was initially a temporary stopover before heading to Morocco. We didn’t know what off-season travel meant until this trip when strong winds cancelled our ferry ride to Morocco 2 days in a row. Alas, we ended up staying in Sevilla for more than one day and I’m so thankful we did. This town has a cozy flair, and is quite different from Barcelona and Madrid. There’s orange trees sprinkled across the city. We did try to eat some, and really, these are just beautiful and pretty to look at. All in all, Sevilla welcomed us in with this Spanish ease that I didn’t experience in Madrid or Barcelona. The one thing I wish we did do was watch flamenco dancing since we were in Southern Spain. Sevilla is definitely one of those towns that would have been an amazing study abroad city--a good middle between small and large, offering art and culture that would never cease to inspire.",
            
            //images
            "img": "img/sevilla.jpg",
            "img1": "img/sevilla1.jpg",
            "img2": "img/sevilla2.jpg",
            "img3": "img/sevilla3.jpg",
            "img4": "img/sevilla4.jpg",
            "img5": "img/sevilla5.jpg",
            "img6": "img/sevilla6.jpg",

             //eat
             "eatName1": "Eslava", 
             "eatAddress1": "Calle Eslava, 3, 41002, Sevilla, Spain",
             "eatComments1": "The sangria here was amazing and only 2 euro. It was ridiculously fruity but the red wine still held its ground. The food was also pretty good and well-made.",
 
             "eatName2": "La Azotea",
             "eatAddress2": "Calle Jesús del Gran Poder, 31, 41002, Sevilla, Spain",
             "eatComments2": "This other tapas restaurant had really great seafood. Though pricier in comparison to the place listed above, it felt well-worth the money. The sangria was also really good, but not as great as Eslava’s. Definitely get their seafood tapas.",
 
             "eatName3": "McDonald’s",
             "eatComments3": "Why is an American establishment on here? I’m not being obnoxious, I swear. It’s a thing of mine to go to grocery stores and McDonald’s in other countries. With McDonald’s in particular, I like to try different desserts and the mix-ins for the McFlurry here was this hazelnut cream that was divine. We went at 11 pm two nights in a row because it was that good and a nice sweet treat.",
 
             // play
             "playName1": "Plaza de España", 
             "playAddress1": "Av de Isabel la Católica, 41004 Sevilla, Spain",
             "playComments1": "Sevilla is full of must-sees, something that I didn’t necessarily expect for whatever reason. The plaza, however, was built for a great exposition of 1929. Its architecture is unique--blending elements from the Renaissance and Moorish Revivals--and was featured in a Star Wars movie. How cool is that?",
 
             "playName2": "Alcázar of Seville",
             "playAddress2": "Patio de Banderas, s/n, 41004 Sevilla, Spain",
             "playComments2": "This was a sneak peek of what we would fully experience in Morocco. It was beautiful--and not just in one section, but all areas of the grounds. You shouldn’t be surprised by that fact since this was the royal palace for Moorish Muslim kings. This should be on your list, no matter what. Make time for it because it is that worth it.",
 
             "playName3": "Parasol",
             "playAddress3": "Pl. de la Encarnación, s/n, 41003 Sevilla, Spain",
             "playComments3": "This spot isn’t historical or holds significant meaning in history by any means, but I loved it because of its unique design. It’s placed in the middle of the city, juxtaposing the heritage, aged buildings all around it. I loved taking pictures of it because of its curvature. The design was made up by a German architect and is supposed to resemble the stitching of mushroom heads.",
             
             //stay
             "stayName": "Hostal Jardin de la Alameda", 
             "stayAddress": "Jesús del Gran Poder, 130, Casco Antiguo, Sevilla, 41002, Spain",
             "stayComments": "This hostel was pretty cheap all things considered. There’s more walking required to get to the city, but I didn’t mind it at all. Super nice staff and everything was clean and organized. I’d stay there again if I were on a tight budget.",
        },

        {
            "name": "Lisbon, Portugal",
            "id": 2,
            "description": "I lived in Washington DC the past four years but never knew that Lisbon was on the same latitude until a friend told me right before I left for my trip. Even when I was there, this very fact took me by surprise since the city is so drastically different from that of the nation’s capital. Colored walls splashed with yellow or blue tile were a common sight alongside wet laundry hung on string right outside windows. It’s such a picturesque city, I could have taken my camera around just about anywhere and taken rolls and rolls of film (which I did anyway when I visited). I wished I had more free time to roam around the winding roads up the hill; there were so many corners that held so much life and stories itching to be told. We were there for five days, which it extra leisurely. If I could redo it, I would have stayed in Lisbon for two and a half or three days and then gone to Porto to get another sense of the European West Coast. Either way, Lisbon is a small town and you can get a good sense of Portugal in little time. It’s city made up of the most beautiful tile; it goes down in my books as a place with distinct character and tons of grit--the architecture alone will tell you so.",            
            
            //images
            "img": "img/lisbon.jpeg",
            "img1": "img/lisbon1.jpeg",
            "img2": "img/lisbon2.jpeg",
            "img3": "img/lisbon3.jpeg",
            "img4": "img/lisbon4.jpeg",
            "img5": "img/lisbon5.jpeg",
            "img6": "img/lisbon6.jpeg",

             //eat
             "eatName1": "Pastéis de Belém", 
             "eatAddress1": "R. de Belém, 84- 92, 1300-085, Lisboa, Portugal",
             "eatComments1": "The creamiest egg tarts I’ve had by far. Since I’m half cantonese, I have a soft spot for egg tarts. This affection has been going strong for so long that my mom automatically orders it at dim sum or takes me to a special bakery in Los Angeles whenever I was home for the holidays to fulfill this craving. This place in particular was the best Portuguese style egg tart I’ve ever had -- the flaky crust was on point and the filling was nice and custardy. Be sure to stop by here if you can.",

             "eatName2": "A Padaria Portuguesa",
             "eatAddress2": "Praça Luís de Camões 44, 1200-108, Lisboa, Portugal",
             "eatComments2": "This bakery was cute and close to where we stayed in Chiado. It was also recommended by our Airbnb hosts for a quick bite and guaranteed satisfying meal. We went for brunch one of the mornings, ate and people-watched for a while.",

             "eatName3": "Mercado Da Ribeira",
             "eatAddress3": "481 Av. 24 de Julho, 1200, Lisboa, Portugal ",
             "eatComments3": "This is a huge, covered market where you can pick and choose what you want to eat. There is a variety of menus to browse through. I remembered getting a seafood pasta that was absolutely delicious that came with dessert and a drink. There’s a longer story to it you can ask me about, but a random man came up, grabbed my dessert with his bare hands, then walked away. Looking back, it’s more humorous than shocking but also I’m adding to my list of ‘Things that don’t make sense.’",

             // play
             "playName1": "São Jorge Castle", 
             "playAddress1": "R. de Santa Cruz do Castelo, 1100-129, Lisboa, Portugal",
             "playComments1": "When I think of Lisbon, I imagine the yellow trams going up slopes that offer amazing views overlooking the city. Alfama, the district that houses the castle, is just that. A neighborhood that rests on the slopes, Alfama is amazing to climb up to reach the castle. The Moorish castle is one of the main attractions in the area and overlooks the city. It was once a fortified citadel during medieval times and is worth the visit for the views alone.",

             "playName2": "Sintra Castles",
             "playAddress2": "2710 Sintra, Portugal",
             "playComments2": "If you do have more time, make it out to the castles in Sintra. All the castles there make you think of fairytales, and are rightfully labeled as UNESCO Heritage Sites. You have to take a train from Rossio to get there, but exploring castles upon castles where Portuguese kings and queens used for their summer weekend getaways (at least, that’s what I think) make it a unique experience. This trip out of Lisbon itself takes up almost the entire day, so be sure to plan well by bringing plenty of water and snacks.",

             "playName3": "Praça do Comércio",
             "playAddress3": "Praça do Comércio, 1100-148, Lisboa, Portugal",
             "playComments3": "The name of this place means “Square of Commerce,” which testifies to the importance of this space to Lisbon’s economy. You can clearly see that government buildings and port activity make up the majority of the square here. It is one of the largest squares in Europe and worth marking on your map.",

             //stay
             "stayName": "Airbnb", 
             "stayAddress": "RUA do Norte, Number 56, Lisbon, Portugal",
             "stayComments": "This Airbnb was located right in the middle of Chiado, making it easy to get to the beaches but also the other neighborhoods. I do wish the host was upfront that the location can get pretty loud at night since it is smack in the middle of the nightlife scene. Other than that, the flat itself was really well-decorated and located to lots of great restaurants and bars.",
            },
        
        {
            "name": "Copenhagen, Denmark",
            //id
            "id": 3,
            "description":"This city is small, quaint, and humble. It’s not saturated with tourist destinations and things to do--Copenhagen is clearly one of those places you’d have to live to experience it to its fullest extent. What I really enjoyed here was its sense of calm and structure, which you could clearly see in how people swiftly biked across town. Copenhagen also is home to the Hygge aesthetic, which has infiltrated American design culture right now. This made seeing and experiencing it my favorite part of the trip. I loved walking through the markets and little shops that sold drawing supplies and stationery. I’m seriously a big sucker for these types of places. I will say, it is as expensive as people warned me to be. I’m not confident that I’ll go back to visit for leisure, but I’m always inspired by the designs and work that is published and created by people here.",

            //images
            "img": "img/copenhagen.jpg",
            "img1": "img/copenhagen1.jpg",
            "img2": "img/copenhagen2.jpg",
            "img3": "img/copenhagen3.jpg",
            "img4": "img/copenhagen4.jpg",
            "img5": "img/copenhagen5.jpg",
            "img6": "img/copenhagen6.jpg",

            //eat
            "eatName1": "CUB Coffee Bar", 
            "eatAddress1": "Boldhusgade 6, Copenhagen, Denmark 1062",
            "eatComments1": "This underground coffee bar is the American hipster’s dream, except the people who come here in Copenhagen are far from hipsters. They genuinely discuss art with passion and delight, a refreshing conversation to eavesdrop and departure from the snobbish scene that I came across --thankfully, sparingly--in DC. The barista took coffee seriously, and my cortado and pastry was ridiculously good. I would love a version of this in DC so I could hide out and work away on designs during the weekend.",

            "eatName2": "Andersen Bakery", 
            "eatAddress2": "Thorshavnsgade 26, 2300 København S, Denmark",
            "eatComments2": "We stayed a couple blocks from this bakery, and naturally, we had to try any place with solid coffee and pastries. We made our way there one morning and it was absolutely crowded. We snagged some traditional Danish pastries, such as the wienerbrød.",

            "eatName3": "108", 
            "eatAddress3": "Strandgade 108, Copenhagen 1401, Denmark",
            "eatComments3": "This is the Noma’s casual little sister. I loved my meal there, and it was the perfect way to finish off the final leg of my most recent trip to Europe. I just remember the freshly baked bread with lightly whipped butter as well as chicken that fell off the bone. So, so worth it. Take note that portions are pretty large, so share mains and sides with friends so you’ll have room for dessert.",
            
            // play
            "playName1": "King's Garden", 
            "playAddress1": "Øster Voldgade 4A, 1350 København, Denmark",
            "playComments1": "Also known as Rosenborg Castle Gardens, King’s Garden is the place to be for a spring or summer afternoon stroll. There’s tall lime bushes lined up--Knight’s and Lady’s path--that make you feel like you’re walking through Versailles. This was my favorite place to visit in Copenhagen that felt distinctly different than the other gardens I had seen in other cities during the same trip. This would rank number one for me within our Copenhagen itinerary.",

            "playName2": "Design Museum", 
            "playAddress2": "Bredgade 68, 1260 København, Denmark",
            "playComments2": "This Design Museum is free to the public and made my designer heart skip a beat. I never knew how much Danish architecture and design sought to model Japanese aesthetics. My favorite room by far was the one with different chair designs. There were probably 100 chairs placed in little cubicles in this room. Though it honestly smelled a little and was kind of stuffy, it was one of the coolest rooms in the entire museum.",

            "playName3": "Nyhavn", 
            "playAddress3": "København K, Denmark",
            "playComments3": "This is perhaps one of the most “Instagrammed” places in Copenhagen, you know, the pictures of docked ships and a rainbow of canal townhouses. It’s a stretch of brightly colored 18th century townhouses along a canal with lots of wooden ships docked right in front. I loved walking through it, but in retrospect, this place is a little overhyped. Don’t expect too much from here.",
            
            //stay
            "stayName": "Urban House Copenhagen by MEININGER", 
            "stayAddress": "Colbjørnsensgade 11, 1652 København V, Denmark",
            "stayComments": "This hostel is pretty great--very well equipped, conveniently located, and technologically advanced. You don’t need to wait in line to get a room key and the rooms are clean. It’s a little small and narrow, but given Copenhagen’s prices and that space is a prime real estate, this was just what we needed for the time we had in the city.",
        },

        {
            "name": "UK + Ireland",
            //id
            "id": 4,
            "description":"The UK always has a near and dear place in my heart. Having studied abroad in Cambridge for a summer, I have an affection for the country across the pond and strong inclination for English tea—English and Earl Grey in particular—brews.  Two of my best friends from college and I, ever since graduation almost 5 years ago now, try to make annual trips together. This time around, we went off to the United Kingdom and Ireland. We visited Edinburgh, Oxford, and Bath in the UK before heading off to Dublin, Ireland. Most of the images to your left are from Bath and the day trip we took to the Cliffs of Moher, but the places I suggest are from my favorite places the entire trip. Unsurprisingly, the one place I loved the most was Oxford. It’s so quaint, and academic knowingly ebbs and flows around street corners as the school encapsulates the small town. Dublin itself was somewhat disappointing, but I recommend the Irish countryside to get picturesque views and a true sense of Irish history.",

            //images
            "img": "img/uk.png",
            "img1": "img/uk1.jpg",
            "img2": "img/uk2.jpg",
            "img3": "img/uk3.jpg",
            "img4": "img/uk4.jpg",
            "img5": "img/uk5.jpg",
            "img6": "img/uk6.jpg",

             //eat
             "eatName1": "Southpour", 
             "eatAddress1": "1-5 Newington Rd, Edinburgh EH9 1QR, UK",
             "eatComments1": "We stopped by here after the hike at Arthur’s Seat. It was perfect for lunch and had lots of large windows for nice breeze and sunlight to come in. We enjoyed the contemporary decor and window booth so much that we wished we could have sat and chatted for hours over drinks too.",
 
             "eatName2": "Vaults and Gardens", 
             "eatAddress2": "University Church, 1 Radcliffe Sq, Oxford OX1 4AH, UK",
             "eatComments2": "This place, hands-down, has the best scones I’ve ever had…in my life. And I’m so serious. The scones were so fluffy, not too sweet, and came delivered with a whole pot of tea. The jam was the perfectly sweet but not overbearingly so: you can still taste the deep flavors of the strawberry (that’s what I went with for my jam). This shop is tucked in a corner, under some academic building from what I remember, making it conducive for long hours of conversation and tea refills.",
 
             "eatName3": "Sally Lunn", 
             "eatAddress3": "4 N Parade, Bath BA1 1NX, UK",
             "eatComments3": "We stopped by this traditional shop for buns that were larger than our faces.  It wasn’t anything super extraordinary but we took any excuse to sit down for sweets and tea in the afternoon. I will say that the decor in this venue was absolutely adorable, and if you want to feel like you’re Belle from Beauty and the Beast, come through here.",

             "eatName4": "Cornucopia", 
             "eatAddress4": "19-20 Wicklow St, Dublin 2, Ireland",
             "eatComments4": "Oddly enough, we kept eating vegetarian food on this trip and it was actually quite delicious. In Dublin, this was our final meal. It was a cold and rainy day. The soups and curries here hit the spot and were reasonably priced. Come here if you need a break from all the meat and stews that are typical of the Irish diet.",
             
             // play
             "playName1": "Arthur’s Seat", 
             "playAddress1": "Edinburgh EH8 8AL, UK",
             "playComments1": "The views from Arthur’s Seat were an incredible way to kick off our 10-day trip. I highly recommend it in the morning. We stopped by a coffee place in the morning and then headed right for the hike. You get some picturesque memories of the Edinburgh landscape without having to work too much. The incline isn’t too bad and well-worth it.",
 
             "playName2": "Oxford", 
             "playAddress2": "Oxford OX1 2JD, UK",
             "playComments2": "I love English row houses, perhaps a soft spot that transfers from my love for Capitol Hill row homes in Washington DC. Open fields and ivy sprawling on brick walls make for a great town, don’t you think? I know it’s the wrong school, but the Theory of Everything soundtrack played softly in my mental background. That sense of academic passion and discovery that pervaded the town in itself made Oxford simply lovely.",
 
             "playName3": "Roman Baths", 
             "playAddress3": "Stall St, Bath BA1 1LZ, UK",
             "playComments3": "Bath as a whole is quaint and you can explore the entire town easily in a day. Though we exhausted the entire area, my favorite place in Bath was seeing the Roman Baths. The tour gave you sense of how people lived and came together through the common baths. With these types of places, I love walking and exploring the space to get a physical sense of cultural habits in the B.C. era.",

             "playName4": "Cliffs of Moher", 
             "playAddress4": "Lislorkan North, Liscannor, Co. Clare, Ireland",
             "playComments4": "We took a day trip to the Cliffs of Moher with a  bus tour. By that time, we were so exhausted from traveling that we were so thankful to have a hilarious tour guide who made this part of the trip enjoyable. The cliffs felt unreal, and the skies that day were clear and blue. The sun was also out, which was sheer luck since it often rains in Ireland in spring. Spend some time out in the Irish countryside; we didn’t have the freedom to do so but the rolling hills of the area and cliffs made me wish we had more time to walk around to explore the cliffs to its fullest extent.",
             
             //stay
             "stayName": "Airbnb with Ann and Chris", 
             "stayAddress": "35/2 Lauriston St, Edinburgh, Edinburgh EH3 9DQ, UK",
             "stayComments": "This was one of the best Airbnb experiences I’ve ever had. The apartment was new, cozy, and conveniently located. The cleanliness was top notch, and really set the standard for the rest of our trip. We could walk anywhere and felt pretty safe. It’s close to Sainsbury’s, so we often picked up a bottle of wine and some beer to finish off our day or a pastry in the morning for breakfast.",

             "stayName2": "Bath: Holiday Inn Express", 
             "stayAddress2": "Lower Bristol Road, Brougham Hayes, Bath BA2 3QU, UK",
             "stayComments2": "Conveniently located and really easy to get to. It’s harder to get housing in Bath that’s close to the main town square, so be sure to lock it down earlier rather than later.",

             "stayName3": "Staycity Serviced Apartments", 
             "stayAddress3": "42-76 Saint Augustine Street, Dublin 8, Ireland",
             "stayComments3": "This was not my favorite place we stayed at and quite expensive, but it was the best we could find in Dublin. It was not terribly close to anything either so I can’t give it a 100% recommendation.",
             },

        {
            "name": "Marrakech, Morocco",
            //id
            "id": 5,
            "description":"Morocco was a trip for the books—it’s one of those places that is better experienced in person. From riding camels in the Sahara to exploring Marrakech, Morocco is an interesting place full of beautiful architecture and expansive deserts. I loved walking through the souks to see the different items merchants purchased. Haggling is a must in Morocco, and you have to be prepared to step away from a store without hesitation in order to get items at fair prices. I loved the rugs they sold and seeing how to made leather bags from scratch. The artisans there really know their craft in a way I hadn’t seen first hand. Together, the Sahara Desert and Marrakech made my first encounter with Morocco an unforgettable one. I still have my eye on Chefchaouen though.",

             //images
             "img": "img/morocco.png",
             "img1": "img/morocco1.jpg",
             "img2": "img/morocco2.jpg",
             "img3": "img/morocco3.jpg",
             "img4": "img/morocco4.jpg",
             "img5": "img/morocco5.jpg",
             "img6": "img/morocco6.jpg",

              //eat
            "eatName1": "Food Stalls in Jemaa el-Fna", 
            "eatAddress1": "Derb Chtouka, Marrakesh 40008, Morocco",
            "eatComments1": "A lot of Morocco wasn’t planned in detail for us. So for food, I’ll opt to list items to definitely try. We didn’t try to eat at specific places here and used our senses (sight and smell) to dictate where we ate.",

            "eatName2": "Foods to try", 
            "eatAddress2": "Anywhere across the city",
            "eatComments2": "Chicken tajine in orange and olives with dense chewy bread; Grilled goat, lamb, and beef, r’ghaif (flatbread), and tomato salad; Pastilla (filo dough with chicken and almonds); Harira (tomato/bean soup)",

            "eatName3": "Fish and Poulet Shop", 
            "eatAddress3": "Intersection of Rue Moulay Ismail and Rue Ibn Khaldoun",
            "eatComments3": "Like I mentioned above, tajine is a must have in Morocco. I have no idea what the name of this store was. We just stopped by because we were starving and it looked like a lot of locals ate there. The owners also seemed friendly, so we found some seating and got two fish and one chicken. The meal reminded me of something my grandma might make for me--simple, well-seasoned, and with fresh ingredients. I also loved the fact that we simply found a hole in the wall rather than looked up a specific place online. The spontaneity of this place also made this meal taste extra good.",
            
            // play
            "playName1": "Sahara Desert", 
            "playComments1": "I didn’t shower for two days, rode a camel named MJ (short for Michael Jackson), slept in a tent built of rugs, lay under the stars in the freezing cold, and met some interesting characters at our camp site. This portion of the trip was one of the wildest things I’ve done, but one that I’m so thankful for. How often can you say that you spent the evening eating tanginess and then dancing to Berber music? We woke up to experience the Sahara sunrise, which was insanely beautiful. The sand dunes go on for forever that you’d probably get lost if you didn’t grow up in the area. I had never seen stars so bright and clear either—it’s one of those moments that you experience knowing that you may never do it ever again.",

            "playName2": "Jemaa el-Fnaa", 
            "playAddress2": "Derb Chtouka, Marrakesh 40008, Morocco",
            "playComments2": "This place embodies “hustle and bustle.” We explored here at night and went around looking at trinkets, postcards, scarfs, and leather bags. Since I was limited on space in my luggage, I didn’t seriously consider buying anything. I really did love the leather bags I saw and regret not just grabbing one. Next time.",

            "playName3": "Ben Youssef Medrasa", 
            "playAddress3": "Kaat Benahid, Marrakech 40000, Morocco",
            "playComments3": "The amount of detailing in the tiles in this former Islamic college is insane. We spent a solid hour and a half taking pictures and soaking in the space. The arches (oh the arches!) made for perfect architecture images. The color choices of the tile made my inner designer happy and inspired. You have to pay a small fee to see the space, but it’s so worth it.",

            "playName4": "El Bahia Palace", 
            "playAddress4": "Medina Avenue Imam el Ghazali, Marrakech 40000, Morocco",
            "playComments4": "This palace is unassuming on the outside as you enter but as you keep walking, the different areas begin to unfold its magic. I loved the doorways and tiling of the ceilings in this palace. You could tell that there was a lot of craftsmanship in bringing the entire palace together. Make time for this palace so you can appreciate the thoughtfulness of the structures.",
            
            //stay
            "stayName": "Riad Douja", 
            "stayAddress": "48 Riad Zitoun El Kdim, Derb Boulokat, 48, Marrakesh 40040, Morocco",
            "stayComments": "This place met my expectations given our lower price point for the trip. You do get a snazzy Moroccan breakfast on the riad’s rooftop in the morning, which is normal for most riads to do. I personally love lounging around and slowly eating breakfast. We had a variety of breads, juices, tea, and eggs to fill us up that morning. Communication was a little harder for us since we didn’t speak French, but it wasn’t impossible to get points across.",
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


