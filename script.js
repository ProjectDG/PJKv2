var elem = document.getElementsByTagName("BODY")[0];
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//openFullscreen();

class Drink{
    constructor(name, glass, rim, liquor = [], liqueur = [], mixers = [], garnish = [], photo, batch, instructions = []){
     this.name = name;
     this.glass = glass;
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.batch = batch;
     this.instructions = instructions;
    };
   };
   

    /*  -----------------------Drink Template-----------------------
   let  = new Drink(
       "",
       "",
       "",
       [""],
       [""],
       [""],
       [""],
       "./images/.png", 
       null);
   */



    // PJK Cocktails ................................................................................................
   let shisoLovely = new Drink("Shiso Lovely", "Coupe Glass", null, ["Wheatly Vodka - 1.5 oz"], ["St. Germain - 1 oz"], ["Shiso Leaf - 1 ea.","Lemon Juice - 1 oz", "Simple Syrup - .5 oz"], ["Shiso Leaf"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Double Strain"]);
   let empressWu = new Drink("Empress Wu", "Coupe Glass", null, ["Wheatly Vodka - 1.5 oz"], ["Aqua Perfecta:", "Basil Brandy - 1 oz"], ["Lime Juice - .75 oz", "Simple Syrup - .75 oz"], ["Basil Sprig"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Double Strain"]);
   let callMeKoko = new Drink("Call Me 'Koko'", "Rocks Glass", null, ["Rivi Gin - 1.5 oz", "Ilegal Mezcal .5 oz"], null, ["Lemon Juice - .75 oz", "Pomegranate Juice - .75 oz", "Lychee Syrup .5 oz"], ["Dehydrated Lemon &" ,"Basil Sprig"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Strain"]);
   let sakeSangria = new Drink("Sake Sangria", "Wine Glass", null, ["Living Jewel Sake - 2 oz"], ["Domaine De Canton - .5 oz", "Chambord - .25 oz", "Dry Curacao - .25 oz"], ["Pineapple Juice - .75 oz", "Pomegranate Juice - .75 oz", "Lemon Juice .5 oz"], ["Pineapple Leaf &", "Dehydrated Orange"],null, null,["Instructions", "--------------------------------", "Splash of Soda in Glass", "--------------------------------", "Shake", "&", "Dirty Pour Over Soda"]);
   let thatYuzuThatYouDo = new Drink("That Yuzu, That You Do", "Rocks Glass", "Guest Choice", ["Corazon Blanco - 2 oz"], ["Grand Marnier - .5 oz"], ["Lime Juice - .75","Yuzu Juice - .25 oz", "Agave - .25 oz"], ["Dehydrated Lime"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Strain"]);
   let snowOnFuji = new Drink("Snow On Fuji", "Coupe Glass", null, ["Fuji Apple Gin - 2 oz"], null, ["Lemon Juice - 1 oz", "Lychee Syrup - .75 oz", "Albert Bichot Brut - (Topped)"], ["Lychee & Mint Spring"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Double Strain"]);
   let theButterflyEffect = new Drink("The Butterfly Effect", "Rocks Glass", null, ["Ilegal Mezcal - 1 oz"], ["St. Germain - .5 oz"], ["Egg White - 1", "Lemon Juice - .5 oz", "Lime Juice - .5 oz", "Simple Syrup - .5 oz"],null,null,null,["Instructions", "--------------------------------", "- Dry Shake","--------------------------------", "- Shake With Ice","--------------------------------", "- Pour Over Large Rock","--------------------------------", "- Let Settle & Top With 1/2 oz Butterfly Pea / Honeysuckle Gin"]);
   let upAllNight = new Drink("Up All Night", "Martini Glass", null, ["Wheatly Vodka - 2 oz"], ["Borghettis Espresso - .75 oz", "Montenegro - .25 oz"], ["5 Spice Syrup - .5 oz"], ["Espresso Grounds & Beans"],null,null,["Instructions", "--------------------------------",  "Shake", "&", "Double Strain"]);
   let openSesame = new Drink("Open Sesame", "Rocks Glass", null, ["Sesame Gin - 1 oz", "St. George Terrior - 1 oz"], ["Domain De Canton - .5 oz", "Dry Curacao - .25 oz", "Lillet Blanc - .25 oz"], ["Lemon Bitters - 3 Dashes"], ["Flashed Orange Peel"],null,null,["Instructions", "--------------------------------",  "Mixing Glass", "--------------------------------", "Stir & Pour Over Large Rock"]);
   let pjkOldFashioned = new Drink("PJK Old Fashioned", "Rocks Glass", null, ["Rittenhouse Rye - 2.5 oz"], null, ["Angostura Bitters - 4 Dashes", "Orange Bitters - 4 Dashes", "Black Tea Syrup - .25 oz"], ["Orange Peel & Luxardo Cherry"],null,null,["Instructions", "--------------------------------",  "Build in Mixing Glass", "--------------------------------", "Stir & Strain Over Large Rock"]);
   let dragonsHive = new Drink("Dragon's Hive", "Coupe Glass", null, ["Dos Hombres Mezcal - 1.5 oz,", "Butterfly Pea / Honeysuckle Gin - .25 oz"], ["Chinola Passion Fruit - .5 oz"], ["Honey Syrup - .75 oz,", "Lemon Juice - 1 oz"], ["Unknown"], null, null, ["Instructions", "--------------------------------", "Shake", "&", "Double Strain"])
   let zenInferno = new Drink("Zen Inferno", "Rocks Glass", "Tajin", ["Casamigos Reposado - 1.5 oz"], ["Cointreau - .75 oz"], ["Chili Tincture - 2 ea.,", "Lime Juice - .5 oz,", "Mango Puree - 1 oz,", "Pineapple Juice - .75 oz"], ["Pineapple Leaf & Mango"], null, null, ["Instructions", "--------------------------------", "Shake", "&", "Strain"])
   let lotusBlossom = new Drink("Lotus Blossom", "Martini Glass", null, ["Gin or Vodka - 1.5 oz"], ["Sake - 1.5 oz", "Vermouth Blanc - .25 oz"], null, ["Unknown"], null, null, ["--------------------------------", "Instructions", "--------------------------------", "Shake", "&", "Double Strain", "--------------------------------", "Foam Batch", "--------------------------------", "Plum Wine - 6 oz,", "Agave - 5 oz,", "Lemon Juice - 3 oz"])
   let crouchingTiger = new Drink("Crouching Tiger", "Pint Glass", null, null, null, ["Lime,", "Pineapple,", "Matcha Syrup,", "Shiso"], ["Unknown"], null, null, null);
   let myOhMaiTaiBatch = new Drink("My Oh Mai Tai (Batch)", null, null, ["White Rum - 1 Cup", "Dark Rum - 1 Cup"], ["Dry Curacao - 1/2 Cup"], ["Lime Juice - 3/4 Cup,", "Milk - 2 Cups,", "Orgeat - 1/2 Cup"], null, null, "Batch", ["Foam Batch", "--------------------------------", "- Egg White - 2 ea.", "- Passion Fruit Liqueur - 150 ml", "- Cherry Liqueur - 150 ml", "- Lime Juice - 150 ml"]);


   // PJK Originals ................................................................................................
   let afterHours = new Drink("After Hours", "Martini Glass", null, ["St. George Gin - 2 oz", "St. George Citrus Vodka - 1 oz", "Lillet Blanc - 1 oz"], null, null, ["Orange Peel"],null, null,["Instructions", "--------------------------------", "Add to Mixing Glass", "&", "Stir and Strain"]);
   let shanghaiStreetFight = new Drink("Shanghai Street Fight", "Rocks Glass", null, ["Rittenhouse Rye - 2 oz"], ["Fernet Branca - .5 oz", "Aperol - .5 oz"], ["Angostura Bitters - 1 Dash"], ["Orange Peel"],null, null,["Instructions", "--------------------------------", "Add to Mixing Glass", "&", "Stir & Strain Over Large Rock"]);
   let midnightHour = new Drink("Midnight Hour", "Coupe Glass", null, ["Plantation Dark Rum - 2 oz"], null, ["Lime Juice - .5 oz", "Five Spice Syrup - .5 oz"], ["Star Anise"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Double Strain"]);   
   let pjKiller = new Drink("PJ Killer", "Collins Glass", null, ["Coconut Rum - 1.5 oz"], ["Luxardo Cherry Liqueur - .5 oz", "Drambuie - .25 oz", "Dry Vermouth - .25 oz"], ["Lime Juice - .75 oz", "Demerara Syrup - .5 oz", "Pineapple Juice - .5 oz"], ["Cinnamon Stick & Shavings"],null, null, ["Instructions", "--------------------------------", "Shake", "&", "Strain"]);
   let roseColoredGlasses = new Drink("Rose Colored Glasses", "Coupe Glass", null, ["Rose Vodka - 1.5 oz"], ["Cointreau - .75 oz", "Campari - .25 oz"], ["Lemon Juice - 1 oz", "Simple Syrup - .5 oz"], ["Gold Dust & Rose Bud"],null, null,["Instructions", "--------------------------------", "Shake", "&", "Double Strain", "--------------------------------", "Top with Honey Fig Foam"]);





   // Margaritas................................................................................................
   let houseMargarita = new Drink("House Margarita", "Margarita Glass", "Guest Choice", ["Jose Cuervo", "Tradicional Silver - 2 oz"], ["Triple Sec - 1 oz"], ["Sour Mix - 3 oz"], ["Lime Wedge"],"./images/houseMargarita.png", null,["Flavored Margarita:", "-------------------------","Sour Mix:" ,"2 oz", "-------------------------","Strawberry,", "Mango,", "Prickly Pear,", "Passion Fruit or", "Pomegranate:", "1 oz"]);
   let roccoRita = new Drink("Rocco Rita","Margarita Glass", "Guest Choice", ["Gran Centenario Plata - 2 oz"], ["Cointreau - 1 oz"], ["Sour Mix - 3 oz"], ["Lime Wedge"],"./images/roccoRita.png", null, null);
   let cadillac = new Drink("Cadillac", "Margarita Glass", "Guest Choice", ["Gran Centenario Anejo - 2 oz"], ["Grand Marnier - 1 oz"], ["Sour Mix - 3 oz"], ["Lime Wedge"],"./images/cadillac.png", null, null);
   let blackDiamond = new Drink("Black Diamond", "Rocks Glass", "Black Sea Salt", ["Santo Blanco - 2 oz"], null, ["Real Black Cherry Syrup - 1 oz", "Rocco's Lime Mix - 2 oz"], ["Dehydrated Lime Wheel"],"./images/blackDiamond.png", null, null);
   let strawberryBasil = new Drink("Strawberry Basil", "Margarita Glass", "Guest Choice", ["Flecha Azul Blanco - 2 oz"], ["Triple Sec - 1 oz"], ["Agave - .5 oz,", "Rocco's Lime Mix - 3 oz"], ["Strawberry,", "Basil ( Sprig )"],"./images/strawberryBasil.png", null, ["Muddle", "-------------------------", "Basil & Strawberry"]);
   let spicyJalapeno = new Drink("Spicy Jalapeno", "Margarita Glass", "Guest Choice", ["Tanteo Jalapeno - 2 oz"], ["Triple Sec - 1 oz"], ["Rocco's Lime Mix - 3 oz"], ["Lime Wedge,", "Jalapeno Slice"],"./images/jalapeno.png", null, ["Liquor Substitutions:", "-------------------------", "Habanero", "Chipotle"]);
   let twoTango = new Drink("Two Tango", "Old Fashioned Rocks Glass", "Jalapeno Salt", ["Jose Cuervo Tradicional Silver - 1 oz,", "Dos Hombres Mezcal - 1 oz"],null, ["Rocco's Lime Mix - 3 oz"], ["Dehydrated Lime Wheel,", "Dehydrated Chile De Arbol"],"./images/twoTango.png", null, ["Muddle", "-------------------------", "Jalapeno Slice"]);
   let skinnySenorita = new Drink("Skinny Senorita", "Coupe Glass (No Ice)",null, ["Herradura Silver - 2 oz"],null,["Rocco's Lime Mix - 2 oz"], ["Dehydrated Lime Wheel,", "Dehydrated Edible Flowers"],"./images/skinnySenorita.png", null, null);
   let roccoMango = new Drink("Rocco Mango", "Highball", "Hibiscus Salt", ["Batch Mix - 3 oz"],null,["Rocco's Lime Mix - 2 oz"], ["Dehydrated Lime Wheel"],"./images/roccoMango.png", null, ["Batch Mix", "-------------------------", "Jose Cuervo Tradicional Silver:",  "750ml", "-------------------------", "Rock & Roll Mango Tequila:", "750ml", "-------------------------", "J. F. Hayden Mango Liqueur:", "750ml", "-------------------------"]);
   let watermelonKiss = new Drink("Watermelon Kiss", "Margarita Glass",null, ["Casa Del Sol - 2 oz"], ["Triple Sec - 1 oz"], ["Rocco's Lime Mix - 2 oz,", "Finest Call Watermelon - 1 oz"], ["Watermelon Slice"],"./images/watermelonKiss.png", null, null);
   let spicyMango = new Drink("Spicy Mango", "Highball Glass", "Tajin Chile Lime Salt", ["Ghost Tequila - 2 oz"],null, ["Sour Mix - 1 oz", "Real Mango Puree - 1 oz"], ["Dehydrated Lime Wheel,", "Dehydrated Chile De Arbol"],"./images/spicyMango.png", null, null);


   


   

   // Frozen Margaritas
   let houseMargaritaFrozen = new Drink(
       /* Name */         "House Margarita (Frozen)", 
       /* Glass */        "Margarita Glass", 
       /* Rim */          "Guest Choice", 
       /* Liquor */       ["Jose Cuervo:", "Tradicional Silver - 2 oz"], 
       /* Liqueuer */     ["Triple Sec - 1 oz"], 
       /* Mixers */       ["Rocco's Lime Mix - 3 oz"],
       /* Garnish */      ["Lime Wedge"],
       /* Image */        "./images/houseMargaritaFrozen.png", 
       /* Batch */        null,
       /* Instructions */ ["Flavored Margarita:",
                          "-------------------------------",   
                          "Rocco's Lime Mix:", 
                          "2 oz",
                          "-------------------------------",
                          "Strawberry,", 
                          "Mango,", 
                          "Prickly Pear,", 
                          "Passion Fruit or", 
                          "Pomegranate:", 
                          "1 oz"]);
   let roccoRitaFrozen = new Drink(
       /* Name */         "Rocco Rita (Frozen)",
       /* Glass */        "Margarita Glass", 
       /* Rim */          "Guest Choice", 
       /* Liquor */       ["Gran Centenario Plata - 2 oz"], 
       /* Liqueuer */     ["Ciontreau - 1 oz"], 
       /* Mixers */       ["Rocco's Lime Mix - 3 oz"], 
       /* Garnish */      ["Lime Wedge"],
       /* Image */        "./images/roccoRitaFrozen.png", 
       /* Batch */        null,
       /* Instructions */ ["Flavored Margarita:",
                          "-------------------------------",
                          "Rocco's Lime Mix:", 
                          "2 oz",
                          "-------------------------------",
                          "Strawberry,", 
                          "Mango,", 
                          "Prickly Pear,", 
                          "Passion Fruit or", 
                          "Pomegranate:", 
                          "1 oz"]);
   let cadillacFrozen = new Drink("Cadillac (Frozen)", "Margarita Glass", "Guest Choice", ["Gran Centenario Anejo - 2 oz"], ["Grand Marnier - 1 oz"], ["Rocco's Lime Mix - 3 oz"], ["Lime Wedge"],"./images/cadillacFrozen.png", null, null);
   let jalapenoFrozen = new Drink("Jalapeno (Frozen)", "Margarita Glass", "Guest Choice", ["Tanteo Jalapeno - 2 oz"], ["Triple Sec - 1 oz"], ["Rocco's Lime Mix - 3 oz"], ["Lime Wedge,", "Jalapeno Slice" ],"./images/jalapenoFrozen.png", null, ["Liquor Substitutions:", "-------------------------", "Habanero", "Chipotle"]);
   let watermelonKissFrozen = new Drink("Watermelon Kiss (Frozen)", "Margarita Glass",null, ["Casa Del Sol - 2 oz"], ["Triple Sec - 1 oz"], ["Rocco's Lime Mix - 2 oz,", "Finest Call Watermelon - 1 oz"], ["Watermelon Slice"],"./images/watermelonKissFrozen.png", null, null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);
   
// "\(Limon, Pineapple, Mango, Grapefruit,", "Raspberry, DragonBerry, Coconut or Banana)"
   // Specialty Drinks
   let mojito = new Drink("Mojito", "Highball",null, ["Bacardi - 2 oz"],null, ["Simple Syrup - 1 oz,", "Club Soda ( Topped )"], ["Lime Wedge,", "Mint Leaves"],"./images/mojito.png", null, ["Muddle", "-------------------------", "Lime Wedges & Mint Leaves:", "( 4-6 Muddled )", "-------------------------", "Bacardi Flavors:",, "-------------------------", "Coconut, Banana,", "Limón, Pineapple,", "Mango, Grapefruit,", "Raspberry or DragonBerry"]);
   let cocoCabana = new Drink("Coco Cabana", "Highball",null, ["Jose Cuervo", "Tradicional Silver - 2 oz"],null, ["Mint Sprig,", "Real Coco - 1 oz,", "Rocco's Lime Mix - 2 oz,", "Club Soda ( Splash )"], ["Mint Leaves,", "Shaved Coconut,", "Dehydrated Lime Wheel"],"./images/cocoCabana.png", null, null);
   let pricklyPineappleExpress = new Drink("Prickly Pineapple Express", "Highball", "Tajin Chile Lime Salt", ["Jose Cuervo", "Tradicional Silver - 2 oz"],null,["Sour Mix - 1 oz,", "Pineapple Juice - 1 oz,", "Prickly Pear Puree - 1 oz"], ["Dehydrated Pineapple,", "Dehydrated Lime Wheel"],"./images/pricklyPineappleExpress.png", null, null);
   let dosHombrise = new Drink("Dos Homb-Rise", "Highball", "Tajin Chile Lime Salt", ["Dos Hombres Mezcal - 2 oz"],null,["Grenadine - .5 oz,", "Pineapple Juice - 2 oz,", "Rocco's Lime Mix - 1.5 oz"], ["Dehydrated Pineapple"],"./images/dosHombrise.png", null, null);
   let rosaRita = new Drink("Rosa Rita", "Old Fashioned Rocks Glass", "Hibiscus Salt", ["Gran Centenario Plata - 1 oz,", "Hampton Water Rose wine - 3 oz"],null, ["Rocco's Lime Mix - 2 oz,", "Real Stawberry Puree - 1 oz,", "Club Soda - ( Splash )"], ["Dehydrated Lime Wheel,", "Edible Flowers ( 3 Flowers )"],"./images/rosaRita.png", null, null);
   let mexitini = new Drink("Mexitini", "Martini Glass",null,["Cazadores Reposado - 1.5 oz"], ["J. F. Haydens Coffe Liqueuer - 1.5 oz"], ["Agave - .25 oz"], ["3 Coffee Beans"],"./images/mexitini.png", null, null);
   let roccosOldFashioned = new Drink("Rocco's Old Fashioned", "Old Fashioned Rocks Glass", "Bittersweet Chocolate Pinned", ["Gran Centenario Anejo - 2 oz"],null, ["Agave - .5 oz,", "Orange Bitters - 4 Dashes,", "Chocolate Bitters - 4 Dashes"], ["Orange Peel"],"./images/oldFashioned.png", null, null);
   let granLemonade = new Drink("Gran Lemonade", "Rocco's Logo Pint",null, ["Gran Centenario Plata - 2 oz"],null, ["Agave - 1 oz,", "Club Soda ( Topped )"],null,"./images/granLemonade.png", null, ["Muddle", "-------------------------", "6 - 8 Lemons"]);
   let theMules = new Drink("The Mules", "Copper Mug",null, ["Mexican: Gran Centenario Anejo - 2 oz"],null, ["Lime Juice - 1 oz,", "Ginger Beer ( Topped )"], [" Dehydrated Lime Wheel"],"./images/theMules.png", null, ["American:", "Titos - 2 oz",  "------------------------------------", "Smokey:", "Dos Hombres Mezcal - 2 oz"]);
   let espressoMartiniRT = new Drink("Espresso Martini (Rocco's Tacos)", "Martini Glass",null,["Van Gogh Double", "Espresso Vodka - 2 oz"], ["Mr. Black Cold Brew Liqueur - .5 oz"], ["Simple Syrup - .5 oz"], ["3 Coffee Beans"],"./images/mexitini.png", null, null);
   let micheladaRT = new Drink("Michelada (Rocco's Tacos)", "Pint Glass", "Rocco's Spice",["Dos Hombres Mezcal - .5 oz"], null, ["Bloody Mary Mix - 3 oz", "House Draft (Topped)"], ["Lime Wedge"],null, null, null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);


   // Mocktails
   let mockarita = new Drink("Mockarita", "Rocco's Logo Pint", "Guest Choice",null,null, ["Orange Juice - 1 oz,", "Rocco's Lime Mix - 2 oz,", "Zero Ritual Tequila Alt. - 2 oz"], ["Dehydrated Lime Wedge"],"./images/mockarita.png", null, null);
   let pinita = new Drink("Pinita (Nut Allergy)", "Rocco's Logo Pint",null,null,null, ["Mint Sprig,", "Dugan & Dane:", "Tiki Tonic Syrup - 1 oz,", "Rocco's Lime Mix - 1 oz,", "Pineapple Juice - 1.5 oz,", "Club Soda ( Topped )"], ["Mint Sprig,", "Dehydrated Pineapple,", "Dehydrated Lime Wheel"],"./images/pinita.png", null, null);
   let mulecumber = new Drink("Mulecumber", "Rocco's Logo Pint",null,null,null, ["Sour Mix - 1 oz,", "Dugan & Dane Classic Tonic - 1 oz,", "Q Ginger Beer ( Topped )"], ["Basil Leaf,", "Peeled Cucumber,", "Dehydrated Lime Wheel"],"./images/mulecumber.png", null, ["Muddle", "-------------------------", "Basil", "&", "Cucumber", "2 ea."]);
   let roseberry = new Drink("Roseberry", "Rocco's Logo Pint",null,null,null, ["Agave - .25 oz,", "Dugan & Dane:", "Classic Tonic - 1 oz,", "Rosemary Sprig", "Club Soda ( Topped )"], ["Rosemary Sprig,", "Dehydrated Lime Wheel,", "Blueberries ( 4-6 Skewered )"],"./images/roseberry.png", null, ["Muddle", "-------------------------", "Blueberries", "8 ea."]);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);

   // Happy Hour
   let houseHH = new Drink("House","Rocks Glass", "Guest Choice", ["Jose Cuervo", "Tradicional Silver - 1.5 oz"], ["Triple Sec - .5 oz"], ["Sour Mix - 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null, null);
   let skinnyHH = new Drink("Skinny","Rocks Glass", "Guest Choice", ["Jose Cuervo", "Tradicional Silver - 1.5 oz"], ["Triple Sec - .5 oz"], ["Rocco's Lime Mix - 1.5 oz,", "Club Soda ( Topped )"], ["Lime Wedge"],"./images/happyHour.png", null, null);
   let jalapenoHH = new Drink("Jalapeno","Rocks Glass", "Guest Choice", ["Tanteo Jalapeno - 1.5 oz"], ["Triple Sec - .5 oz"], ["Sour Mix - 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null, ["Liquor Substitutions:", "-------------------------", "Habanero", "Chipotle"]);
   let volcanicHH = new Drink("Volcanic","Rocks Glass", "Black Sea Salt", ["Jose Cuervo", "Tradicional Silver - 1.5 oz"], ["Triple Sec - .5 oz"], ["Sour Mix - 1.5 oz,", "Black Cherry Puree - .75 oz"], ["Lime Wedge"],"./images/happyHour.png", null, null);
   let watermelonHH = new Drink("Watermelon","Rocks Glass", "Guest Choice", ["Jose Cuervo", "Tradicional Silver - 1.5 oz"], ["Triple Sec - .5 oz"], ["Sour Mix - 1.5 oz,", "Watermelon Puree - 1 oz"], ["Lime Wedge"],"./images/happyHour.png", null, null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);

   // Sangria
   let whiteSangria = new Drink("White Sangria", "Wine Glass",null, ["Lindeman's Chardonnay - 2 oz"], ["E & J Brandy /", "Amaretto Batch - 1 oz", "--sub: Grand Marnier--"], ["Orange Juice - .25 oz,", "Simple Syrup - .25 oz,", "Ginger Ale ( Topped )"], ["Fruits"],"./images/whiteSangria.png",null, ["Muddle", "-------------------------", "Lime,", "Lemon", "&", "Orange Wedge", "1 ea."]);
   let redSangria = new Drink("Red Sangria", "Wine Glass",null, ["Lindeman's Merlot - 2 oz"], ["E & J Brandy /", "Blackberry Brandy Batch - 1 oz", "--sub: Grand Marnier--"], ["Orange Juice - .25 oz,", "Simple Syrup - .25 oz,", "Ginger Ale ( Topped )"], ["Fruits"],"./images/redSangria.png",null, ["Muddle", "-------------------------", "Lime,", "Lemon", "&", "Orange Wedge", "1 ea."]);
   let roseSangria = new Drink("Rose Sangria", "Wine Glass",null, ["Hampton Water Rose - 2 oz"], ["E & J Brandy /", "Peach Schnapps Batch - 1 oz", "--sub: Grand Marnier--"], ["Orange Juice - .25 oz,", "Simple Syrup - .25 oz,", "Ginger Ale ( Topped )"], ["Fruits"],"./images/roseSangria.png",null, ["Muddle", "-------------------------", "Lime,", "Lemon", "&", "Orange Wedge", "1 ea."]);
   let sangriaPitcher = new Drink("Sangria Pitcher", "Pitcher",null, ["Wine - 14 oz"], ["Batch - 4 oz", "--or sub: Grand Marnier--"], ["Orange Juice - 2 oz,", "Simple Syrup - 2 oz,", "Ginger Ale ( Topped )"], ["Fruits"],null,null, ["Add", "-------------------------", "5 Limes,", "5 Lemons", "&", "5 Orange Wedges"]);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);

   // Specials
   let diddyRita = new Drink
        (
        /* Name */     "Diddy Rita",
        /* Glass */    "Rocks Glass", 
        /* Rim */      "Guest Choice", 
        /* Liquor */   ["Deleon - 2 oz"], 
        /* Liqueuer */ ["Cointreau - .5 oz"], 
        /* Mixers */   ["Agave - .5 oz,", "Sour Mix - 1 oz,", "Blood O.J. - 1.5 oz"], 
        /* Garnish */  ["Orange Slice"],
        /* Image */    "./images/logo.png", 
        /* Batch */    null, null
        );
   let tacoTuesday = new Drink("$2 Off All Tacos and Margaritas", null, null, null, null, null, null,"./images/tacoTuesdayUpdate.png", null, null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);

   // Brunch
   let mimosa = new Drink("Mimosa", "Champagne Flute",null,["Sparkling Wine - 3 oz"],null, ["Orange Juice - 2 oz"],null,"./images/brunch.png", null, null);
   let bloodyMary = new Drink("Bloody Mary", "Mojito Glass", "Rocco's Spice Rim",["Finlandia Vodka - 2 oz"],null, ["Zing Zang - 4 oz"], ["Lemon Wedge,", "Olives ( 3 Skewered )"],"./images/brunch.png", null, null);
   let rose = new Drink("Rosé", "Wine Glass",null, ["House Rosé 6 oz"],null,null,null,"./images/brunch.png", null, null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);


   // Batch Recipes
   let roccoMangoBatch = new Drink("Rocco Mango (Batch)",null,null, ["Jose Cuervo:", "Tradicional Silver  - 1000 ml", "---------------------------------","Rock & Roll:", "Mango Tequila - 1000 ml"], ["J. F. Hayden:", "Mango Liqueur - 1000 ml"],null,null, "./images/logo.png", "Batch", null);
   let houseLiterBatch = new Drink("House Liter (Batch)",null,null, ["Jose Cuervo:", "Tradicional Silver - 6 oz"], ["Triple Sec - 3 oz"], ["Sour Mix - 12 oz,", "Water - 10 oz"],null,"./images/houseLiter.png", "Batch", null);
   let houseLiterFlavorBatch = new Drink("House Liter Flavor (Batch)",null,null, ["Jose Cuervo:", "Tradicional Silver 6 oz"], ["Triple Sec - 3 oz"], ["Puree Flavor - 3 oz", "Sour Mix - 9 oz,", "Water - 10 oz"],null,"./images/houseLiterFlavor.png", "Batch", ["Flavors:", "-------------------------", "Strawberry,", "Mango,", "Prickly Pear,", "Passion Fruit or", "Pomegranate"]);
   //let  = new Drink(null,null,null, null,null,null,null,"./images/logo.png", "Batch");


   // Searchable Drinks
   let aperolSpritz = new Drink("Aperol Spritz", "Wine Glass",null, ["Dry Prosecco - 3 oz"], ["Aperol - 2 oz"], ["Club Soda ( Splash )"], ["Orange Slice"],"./images/aperolSpritz.png", null, null);
   let appleMartini = new Drink("Apple Martini", "Martini Glass",null,["Vodka - 1.5 oz"], ["Sour Apple Pucker - .5 oz"], ["Lemon Juice - 1 oz,","Simple Syrup ( or Agave ) - .5 oz"], ["Apple Slice & Cherry"],"./images/appletini.png", null, null);
   let bellini = new Drink
        (
        /* Name */         "Bellini",
        /* Glass */        "Champagne Flute", 
        /* Rim */          null, 
        /* Liquor */       ["Proseco - 6 oz", "( or other dry sparkling wine )"], 
        /* Liqueuer */     null, 
        /* Mixers */       ["Peach Puree - 3 oz"], 
        /* Garnish */      ["Peach Slice"],
        /* Image */        "./images/bellini.png", 
        /* Batch */        null,
        /* Instructions */ ["Alternate", "( if no peach puree available)", "---------------------------------", "Proseco - 4 oz", "Peach Schnapps - 1 oz"]
        );
    let boulevardier = new Drink
        (
        /* Name */         "Boulevardier",
        /* Glass */        "Rocks Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Rye Whiskey - 1.5 oz"], 
        /* Liqueuer */     [
            "Campari - 1 oz",
             "Sweet Vermouth - 1 oz"
            ], 
        /* Mixers */       null, 
        /* Garnish */      ["Orange Peel & Cherry"],
        /* Image */        "./images/boulevardier.jpeg", 
        /* Batch */        null,
        /* Instructions */ ["Instructions", "--------------------------------", "Add to Mixing Glass", "&", "Stir and Strain Over Large Rock"]
        );
   let chocolateMartini = new Drink("Chocolate Martini", "Martini Glass",null, ["Vodka ( or Vanilla Vodka ) - 2 oz"], ["Crème de Cacao ( White ) - .5 oz,", "Crème de Cacao ( Dark ) - .5 oz"], ["Milk ( For Volume If Wanted ) - 1 oz"], ["Chocolate Shavings", "( On Rim or Top )," , "Chocolate Syrup", "( In Glass Before Pour )"],"./images/chocolateMartini.png", null, null);
   let cosmopolitanOG = new Drink
        (
            /* Name */         "Cosmopolitan ( Original )",
            /* Glass */        "Coupe Glass", 
            /* Rim */          null, 
            /* Liquor */       ["Citron Vodka - 1.5 oz"], 
            /* Liqueuer */     ["Cointreau - 1.5 oz"], 
            /* Mixers */       ["Fresh Lime Juice - 1 oz,",
                                "Cranberry Juice ( 1 - 2 Dashes )"], 
            /* Garnish */      ["Lemon Twist"],
            /* Image */        "./images/cosmopolitanOG.png", 
            /* Batch */        null,
            /* Instructions */ null
        );
    let cosmopolitanCran = new Drink
        (
        /* Name */         "Cosmopolitan ( Cranberry-Esque )",
        /* Glass */        "Coupe Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Citron Vodka - 1.5 oz"], 
        /* Liqueuer */     ["Cointreau - .75 oz"], 
        /* Mixers */       ["Cranberry Juice - 1 oz,",
                            "Fresh Lime Juice - 1 oz,"], 
        /* Garnish */      ["Lemon Twist"],
        /* Image */        "./images/cosmopolitanCran.png", 
        /* Batch */        null,
        /* Instructions */ null
        );
   let espressoMartini = new Drink("Espresso Martini", "Martini Glass",null,["Vodka ( or Vanilla Vodka ) - 2 oz"], ["Kahlua - .5 oz,", "Crème de Cacao - .5 oz"], ["Espresso ( or Coffee ) - .5"], ["Espresso Beans 3"],"./images/espressoMartini.png", null, null);
   let french75 = new Drink("French 75", "Champagne Flute", "Champaign - 2 oz", ["Gin - 1.5 oz"],null, ["Lemon Juice - .75 oz,", "Simple syrup - .75 oz"], ["Lemon Twist"],"./images/french75.png", null, null);
   let frenchMartini = new Drink("French Martini", "Martini Glass",null, ["Vodka - 1.5 oz"], ["Chambord - .5 oz"], ["Pineapple Juice - .75 oz"], ["Lemon Twist"],"./images/frenchMartini.png", null, null);
   let gimlet = new Drink
        (
        /* Name */         "Gimlet",
        /* Glass */        "Rocks / Martini Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Gin - 2 oz"], 
        /* Liqueuer */     null, 
        /* Mixers */       [
            "Lime Juice - .5 oz", 
            "Simple Syrup - .5 oz",
        ], 
        /* Garnish */      ["Lime"],
        /* Image */        "./images/gimlet.jpeg", 
        /* Batch */        null,
        /* Instructions */ ["Instructions", "--------------------------------", "Shake", "&", "Strain"]
        );
   let greenTea = new Drink("Green Tea", "Rocks Glass",null, ["Irish Whiskey - .5 oz"], ["Peach Schnapps - .5 oz"], ["Sour Mix - .5 oz,", "Sprite ( Splash )"],null,"./images/greenTea.png", null, null);
   let hurricane = new Drink("Hurricane", "Hurricane Glass",null, ["Dark Rum - 1 oz,", "Light Rum - 1 oz"],null, ["Lime Juice - .5 oz,", "Orange Juice - .5 oz,", "Simple Syrup - .5 oz,", "Passion Fruit Puree - .5 oz", "Grenadine 1 Teaspoon"], ["Cherry & Orange Slice"],"./images/hurricane.png", null, null);
   let kentuckyMule = new Drink
        (
        /* Name */         "Kentucky Mule",
        /* Glass */        "Copper Mug", 
        /* Rim */          null, 
        /* Liquor */       ["Bourbon - 2 oz"], 
        /* Liqueuer */     null, 
        /* Mixers */       ["Lime Juice - .5 oz", "Ginger Beer - 4 oz"], 
        /* Garnish */      ["Mint Sprig"],
        /* Image */        "./images/kentuckyMule.jpeg", 
        /* Batch */        null,
        /* Instructions */ null
        );
   let longIslandIcedTea = new Drink("Long Island Iced Tea", "Pint Glass",null, ["Gin - .5 oz,", "Rum - .5 oz,", "Vodka - .5 oz,", "Tequila - .5 oz"], ["Triple Sec - .5 oz"], ["Coke - 1 oz,", "Sweet & Sour Mix - 1 oz"], ["Lemon Wheel"], "./images/longIslandIcedTea.png", null, null);
   let maiTai = new Drink("Mai Tai", "Hurricane Glass",null,["Rum - 1.5 oz,", "Dark Rum ( Float ) - .5 oz"], ["Orange Curaçao - .75 oz"], ["Orgeat - .5 oz,", "Lemon Juice - .75 oz"], ["Lime & Mint Sprig"],"./images/maiTai.png", null, null);
   let manhattan = new Drink
        (
        /* Name */         "Manhattan",
        /* Glass */        "Martini / Coupe Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Rye / Canadian Whiskey - 2 oz"], 
        /* Liqueuer */     ["Sweet Vermouth - .75 oz"], 
        /* Mixers */       ["Angostura Bitters - 1 Dash"], 
        /* Garnish */      ["Maraschino Cherry"],
        /* Image */        "./images/manhattan.jpeg", 
        /* Batch */        null,
        /* Instructions */ ["Instructions", "--------------------------------",  "Mixing Glass", "--------------------------------", "Stir & Strain"]
        );
   let mexicanCandyShot = new Drink
        (
        /* Name */         "Mexican Candy Shot",
        /* Glass */        "Shot Glass", 
        /* Rim */          ["Tajin Chile Lime Spice"], 
        /* Liquor */       ["Tequila (Blanco) - 1.5 oz"], 
        /* Liqueuer */     ["Watermelon Pucker - .5 oz,", 
                            "or Watermelon Schnapps"], 
        /* Mixers */       ["Hot Sauce - Dash (Optional)"], 
        /* Garnish */      null,
        /* Image */        "./images/mexicanCandyShot.png", 
        /* Batch */        null,
        /* Instructions */ null
        );
    let mexicanMule = new Drink
        (
        /* Name */         "Mexican Mule",
        /* Glass */        "Copper Mug", 
        /* Rim */          null, 
        /* Liquor */       ["Tequila - 2 oz"], 
        /* Liqueuer */     null, 
        /* Mixers */       ["Lime Juice - .5 oz", "Ginger Beer - 4 oz"], 
        /* Garnish */      ["Lime & Jalapeno Slice"],
        /* Image */        "./images/mexicanMule.jpeg", 
        /* Batch */        null,
        /* Instructions */ null
        );
    let moscowMule = new Drink
        (
        /* Name */         "Moscow Mule",
        /* Glass */        "Copper Mug", 
        /* Rim */          null, 
        /* Liquor */       ["Vodka - 2 oz"], 
        /* Liqueuer */     null, 
        /* Mixers */       ["Lime Juice - .5 oz", "Ginger Beer - 4 oz"], 
        /* Garnish */      ["Lime"],
        /* Image */        "./images/moscowMule.jpeg", 
        /* Batch */        null,
        /* Instructions */ null
        );
   let negroni = new Drink("Negroni", "Rocks Glass",null, ["Gin - 1 oz"], ["Campari - 1 oz"], ["Sweet Vermouth - 1 oz"], ["Orange Slices"],"./images/negroni.png", null, null);
   let paperPlane = new Drink
        (
        /* Name */         "Paper Plane",
        /* Glass */        "Coupe Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Bourbon - .75 oz"], 
        /* Liqueuer */     [
            "Aperol - .75 oz",
            "Amaro Nonino Quintessentia - .75 oz"
    ], 
        /* Mixers */       ["Lemon Juice - .75 oz"], 
        /* Garnish */      ["Lemon Peel"],
        /* Image */        "./images/paperPlane.jpeg", 
        /* Batch */        null,
        /* Instructions */ null
        );
    let robRoy = new Drink
        (
        /* Name */         "Rob Roy",
        /* Glass */        "Nick & Nora or Cocktail Glass", 
        /* Rim */          null, 
        /* Liquor */       ["Scotch - 2 oz"],
        /* Liqueuer */     ["Sweet Vermouth - .75 oz"], 
        /* Mixers */       ["Angostura Bitters"],
        /* Garnish */      ["Brandied Cherries"],
        /* Image */        "./images/robRoy.png", 
        /* Batch */        null,
        /* Instructions */ null
        );
   let rumRunner = new Drink
        (
        /* Name */         "Rum Runner",
        /* Glass */        "Hurricane", 
        /* Rim */          null, 
        /* Liquor */       ["Light Rum - 1 oz",
                            "Dark Rum - 1 oz"], 
        /* Liqueuer */     ["Banana Liqueur - .5 oz",
                            "Blackberry Liqueur - .5 oz"], 
        /* Mixers */       ["Grenadine .5 oz,",
                            "Lime Juice - .5 oz,",
                            "Orange Juice - 1 oz,",
                            "Pineapple Juice - 1 oz"], 
        /* Garnish */      ["Pineapple Wedge & Cherry"],
        /* Image */        "./images/rumRunner.png", 
        /* Batch */        null,
        /* Instructions */ null
        );
   let sexOnTheBeach = new Drink("Sex On The Beach", "Hurricane Glass",null, ["Vodka - 1.5 oz"], ["Peach Schnapps - .5 oz"], ["Orange Juice - 2 oz,", "Cranberry Juice - 2 oz"], ["Cherry & Orange Slice"],"./images/sexOnTheBeach.png", null, null);
   let sidecar = new Drink("Sidecar", "Couple Glass", "Sugar (Optional)", ["Cognac - 1.5 oz"], ["Cointreau - .75 oz"], ["Lemon Juice - .75 oz"], ["Orange Twist"],"./images/sidecar.png", null, null);
   let siesta = new Drink("Siesta", "Coupe Glass",null, ["Tequila ( Blanco ) - 2 oz"], ["Campari - .5 oz"],["Lime Juice - .75 oz,", "Grapefruit Juice - .5 oz,", "Agave or Simple Syrup - .5 oz"], ["Lime, Lemon or Grapefruit Wedge"],"./images/siesta.png", null, null);
   let vesper = new Drink
        (
        /* Name */         "Vesper",
        /* Glass */        "Coupe / Martini Glass", 
        /* Rim */          null, 
        /* Liquor */       [
            "Vodka - .5 oz", 
            "Gin - 2 oz"
        ], 
        /* Liqueuer */     ["Lillet Blonde - .25 oz"], 
        /* Mixers */       null, 
        /* Garnish */      ["Lemon Peel"],
        /* Image */        "./images/vesper.jpeg", 
        /* Batch */        null,
        /* Instructions */ null
        );
   
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null, null);

   // Drink Name Array
   let drinks = [
       // PJK Cocktails **********************
       shisoLovely,
       empressWu,
       callMeKoko,
       dragonsHive,
       sakeSangria,
       thatYuzuThatYouDo,
       snowOnFuji,
       theButterflyEffect,
       upAllNight,
       openSesame,
       pjkOldFashioned,
       zenInferno,
       lotusBlossom,
       crouchingTiger,
       myOhMaiTaiBatch,

       // PJK Originals **********************
       afterHours,
       roseColoredGlasses,
       shanghaiStreetFight,
       midnightHour,
       pjKiller,

       // Menu Drinks ************************
       houseMargarita,
       houseMargaritaFrozen,
       roccoRita,
       roccoRitaFrozen,
       cadillac,
       cadillacFrozen,
       blackDiamond,
       strawberryBasil,
       spicyJalapeno,
       jalapenoFrozen,
       twoTango,
       skinnySenorita,
       roccoMango,
       watermelonKiss,
       watermelonKissFrozen,
       spicyMango,

       // Specialty Drinks *******************
       mojito,
       cocoCabana,
       pricklyPineappleExpress,
       dosHombrise,
       rosaRita,
       mexitini,
       roccosOldFashioned,
       granLemonade,
       theMules,
       espressoMartiniRT,
       micheladaRT,

       // Mocktails
       mockarita,
       pinita,
       mulecumber,
       roseberry,

       // Happy Hour
       houseHH,
       skinnyHH,
       jalapenoHH,
       volcanicHH,
       watermelonHH,

       // Sangria
       whiteSangria,
       redSangria,
       roseSangria,
       sangriaPitcher,

       // Specials
       diddyRita, 
       tacoTuesday,

       // Brunch
       mimosa,
       bloodyMary,
       rose,

       // Batch recipes **********************
       roccoMangoBatch,
       houseLiterBatch,
       houseLiterFlavorBatch,


       // Searchable Drinks ******************
       aperolSpritz,
       appleMartini,
       bellini,
       boulevardier,
       chocolateMartini,
       cosmopolitanOG,
       cosmopolitanCran,
       espressoMartini,
       french75,
       frenchMartini,
       gimlet,
       greenTea,
       hurricane,
       kentuckyMule,
       longIslandIcedTea,
       maiTai,
       manhattan,
       mexicanCandyShot,
       mexicanMule,
       moscowMule,
       negroni,
       paperPlane,
       robRoy,
       rumRunner,
       sexOnTheBeach,
       sidecar,
       siesta,
       vesper
      ];
      


      
      const searchInput = document.querySelector('.input');
      const clearButton = document.getElementById('clear');
      const list = document.getElementById('list');
    
      /* Search Button */
      searchInput.addEventListener("input", (e) => {
          let value = e.target.value;
          console.log(value)

          if(value && value.trim().length > 0){
              value = value.trim().toLowerCase();
          } else {
              clearList();
                $(".item3").hide();
                $("#recipeDiv").hide();
                $(".drink-title").hide();
                $("#liquorRecipe2").hide();
                $("#mixersRecipe2").hide();
                $("#mixersRecipe3").hide();
                $("#mixersRecipe4").hide();
                $("#mixersRecipe5").hide();
                $("#garnishRecipe2").hide();
                $("#garnishRecipe3").hide();
                $("#garnishRecipe4").hide();
                $("#garnishRecipe5").hide();
                $(".all-buttons").hide();
                $(".results-list").hide();
                $("#specialtyBtnDiv").hide();
                $("#drinkPhoto").hide();
                $("#specialtyBtnDiv").hide();
                $("#margBtnDiv").hide();
                $("#otherBtnDiv").show();
                $(".other-buttons").show()//.fadeIn(200);
                $(".form-container").show();
                $(".button-container").show();
                searchInput.value = '';
          }
      })

      

      /* Clear Button */
      clearButton.addEventListener("click", () => {
        clearList();
        $(".item3").hide();
        $("#recipeDiv").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $("#garnishRecipe5").hide();
        $(".all-buttons").hide();
        $(".results-list").hide();
        $("#specialtyBtnDiv").hide();
        $("#drinkPhoto").hide();
        $("#specialtyBtnDiv").hide();
        $("#margBtnDiv").hide();
        $("#otherBtnDiv").show();
        $(".other-buttons").show()//.fadeIn(200);
        $(".form-container").show();
        $(".button-container").show();
        searchInput.value = '';
      })
      

      /* Result */
      function setList(results){
        
          for(const drink of results){
            $(".all-buttons").hide();
            $("#otherBtnDiv").hide();
            const resultItem = document.createElement('button');
            resultItem.classList.add('result-item');
            resultItem.classList.add('all-buttons');
            resultItem.id = drink.name.toLowerCase();
            resultItem.value = drink.name;
            const text = document.createTextNode(drink.name); 
            resultItem.appendChild(text);
            list.appendChild(resultItem);
            $(".results-list").show();
            $(".result-item").show()//.fadeIn(200);
            console.log(drink.name);

        };

        console.log(results)
      };

      /* Search Narrow */
      searchInput.addEventListener("input", (e) => {
          clearList();
          let value = e.target.value;

          if(value && value.trim().length > 0){
              value = value.trim().charAt(0).toUpperCase() + value.slice(1);


              setList(drinks.filter(drink => {
                  return drink.name.includes(value);
              }));
          }
      })

      /* Clear List */
      function clearList(){
          while(list.firstChild){
              list.removeChild(list.firstChild);
          }
      }

      /* No Result */
      function noResults(){
        const error = document.createElement('li')
        error.classList.add('error-message')
        const text = document.createTextNode('No results found.')
        error.appendChild(text)
        list.appendChild(error)
      }


      $(document).ready(function(){
        $("#drinkPhoto").hide();
        $("#search").hide();
        $(".other-buttons").hide();
        $(".form-container").hide();
        

        $('body').on('click','.all-buttons', '.result-item', function(){
            $("#drinkPhoto").hide();
            $("#recipeDiv").remove('.recipe-container');
            $(".all-buttons").hide();
            $(".form-container").hide();
            $(".results-list").hide();
            $(".button-container").hide();
            $("#specialtyBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $(".item3").show()//.fadeIn(200);
            $("#recipeDiv").show()//.fadeIn(200);
            $(".initialRecipe").show();
            $("#liqueurRecipe2").hide();
            $(".recipe-container").remove('#liquor');
            $("#drinkPhoto").show();
            $("#recipeInfoDiv").show();
            $("#drinkPhoto").css("max-height", "45vh");
            $("#recipeDiv").css("width", "40%");
            $("#recipeInfoDiv").css("width", "28%");
            $("#recipeDiv").css("padding-top", "0");
            openFullscreen();
    
    
    
            drinks.map(x => {
    
                if(x["name"] === this.value){
                    console.log(this.value);
                    $(".drink-title").show();
                    $("#drinkTitle").text(this.value);
                    $("#drinkPhoto").attr("src", x["photo"]);
                    $("#recipeDiv").html('<div class="recipe-container"></div>');

                    if(x["glass"] === null){
                        $("#recipeDiv").hide();
                    }

    
                    if(x["batch"] === "Batch"){
                        $("#recipeDiv").show();
                        if(x["glass"] === "Wine Glass"){
                            $("#liquor").text("Wine :").css("text-decoration", "underline");
                        }
                    } 
                 
                    if(x["glass"] !== null){
                     $(".recipe-container").append('<p class="batch-class initialRecipe" id="glass"><span style="text-decoration: underline;">Glass</span> :</p>');
                     $(".recipe-container").append('<p class="batch-class initialRecipe" id="glassRecipe"></p>');
                     $("#glassRecipe").text(x["glass"]);
                     $("#glass, #glassRecipe").css( "padding-bottom", "2vh" ); 
                    }

                    if(x["name"] === "Jalapeno"){
                        $("#recipeInfoDiv").css("width", "22%");
                        $("#drinkPhoto").css("max-height", "40%");
                        $("#recipeDiv").css("width", "30%");
                    } 

                    
                    if(x["name"] === "Diddy Rita"){
                        $("#recipeInfoDiv").css("width", "22%");
                        $("#drinkPhoto").css("max-height", "10vh");
                        $("#recipeDiv").css("width", "30%");
                        $("#recipeDiv").css("padding-top", "2vh");                        
                    } 

                    if(x["name"] === "Rocco Mango (Batch)"){
                        $("#recipeInfoDiv").css("width", "22%");
                        $("#drinkPhoto").css("max-height", "10vh");
                        $("#recipeDiv").css("width", "30%");
                        $("#recipeDiv").css("padding-top", "10vh");
                    } 
                    
    
                 
                    if(x["rim"] !== null){                   
                     $(".recipe-container").append('<p class="batch-class initialRecipe" id="rim"><span style="text-decoration: underline;">Rim</span> :</p>');
                     $(".recipe-container").append('<p class="batch-class initialRecipe" id="rimRecipe"></p>');
                     $("#rimRecipe").text(x["rim"]);
                     $("#rim, #rimRecipe").css( "padding-bottom", "2vh" ); 
                    }
                 
                 
                    if(x["liquor"] !== null){                   
                     $(".recipe-container").append('<p id="liquor"><span style="text-decoration: underline;">Liquor</span> :</p>');
                     $(".recipe-container").append('<p id="liquorRecipe"></p>');
                     $("#liquorRecipe").text(x["liquor"][0]);
                     $("#liquor, #liquorRecipe").css( "padding-bottom", "2vh" ); 
                     
                        if(x["liquor"].length === 2){
                         $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                         $("#liquorRecipe2").show();
                         $("#liquorRecipe2").text(x["liquor"][1]);
                         $("#liquor, #liquorRecipe").css( "padding-bottom", "0" );
                         $("#liquorRecipe2").css( "padding-bottom", "2vh" );
                        } else if(x["liquor"].length === 3){
                            $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                            $("#liquorRecipe2").show();
                            $("#liquorRecipe2").text(x["liquor"][1]);
                            $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                            $("#liquorRecipe3").show();
                            $("#liquorRecipe3").text(x["liquor"][2]);
                            $("#liquor, #liquorRecipe, #liquorRecipe2").css( "padding-bottom", "0" );
                            $("#liquorRecipe3").css( "padding-bottom", "2vh" );
                           } else if(x["liquor"].length === 4){
                            $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                            $("#liquorRecipe2").show();
                            $("#liquorRecipe2").text(x["liquor"][1]);
                            $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                            $("#liquorRecipe3").show();
                            $("#liquorRecipe3").text(x["liquor"][2]);
                            $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                            $("#liquorRecipe4").show();
                            $("#liquorRecipe4").text(x["liquor"][3]);
                            $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3").css( "padding-bottom", "0" );
                            $("#liquorRecipe4").css( "padding-bottom", "2vh" );
                           } else if(x["liquor"].length === 5){
                            $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                            $("#liquorRecipe2").show();
                            $("#liquorRecipe2").text(x["liquor"][1]);
                            $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                            $("#liquorRecipe3").show();
                            $("#liquorRecipe3").text(x["liquor"][2]);
                            $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                            $("#liquorRecipe4").show();
                            $("#liquorRecipe4").text(x["liquor"][3]);
                            $(".recipe-container").append('<p id="liquorRecipe5"></p>');
                            $("#liquorRecipe5").show();
                            $("#liquorRecipe5").text(x["liquor"][4]);
                            $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3, #liquorRecipe4").css( "padding-bottom", "0" );
                            $("#liquorRecipe5").css( "padding-bottom", "2vh" );
                           }
                    }
                 
                 
                   if(x["liqueur"] !== null){                   
                     $(".recipe-container").append('<p id="liqueur"><span style="text-decoration: underline;">Liqueur</span> :</p>');
                     $(".recipe-container").append('<p id="liqueurRecipe"></p>');
                     $("#liqueurRecipe").text(x["liqueur"][0]);
                     $("#liqueur, #liqueurRecipe").css( "padding-bottom", "2vh" );
                     
                        if(x["liqueur"].length === 2){
                         $(".recipe-container").append('<p id="liqueurRecipe2"></p>');
                         $("#liqueurRecipe2").show();
                         $("#liqueurRecipe2").text(x["liqueur"][1]);
                         $("#liqueur, #liqueurRecipe").css( "padding-bottom", "0" );
                         $("#liqueurRecipe2").css( "padding-bottom", "2vh" );
                        } else if(x["liqueur"].length === 3){
                            $(".recipe-container").append('<p id="liqueurRecipe2"></p>');
                            $("#liqueurRecipe2").show();
                            $("#liqueurRecipe2").text(x["liqueur"][1]);
                            $(".recipe-container").append('<p id="liqueurRecipe3"></p>');
                            $("#liqueurRecipe3").show();
                            $("#liqueurRecipe3").text(x["liqueur"][2]);
                            $("#liqueur, #liqueurRecipe, #liqueurRecipe2").css( "padding-bottom", "0" );
                            $("#liqueurRecipe3").css( "padding-bottom", "2vh" );
                        }
                    }
    
    
                    if(x["mixers"] !== null){                   
                        $(".recipe-container").append('<p id="mixers"><span style="text-decoration: underline;">Mixers</span> :</p>');
                        $(".recipe-container").append('<p id="mixersRecipe"></p>');
                        $("#mixersRecipe").text(x["mixers"][0]);
                        $("#mixers, #mixersRecipe").css( "padding-bottom", "2vh" );
                        
                           if(x["mixers"].length === 2){
                            $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                            $("#mixersRecipe2").show();
                            $("#mixersRecipe2").text(x["mixers"][1]);
                            $("#mixers, #mixersRecipe").css( "padding-bottom", "0" );
                            $("#mixersRecipe2").css( "padding-bottom", "2vh" );
                           } else if(x["mixers"].length === 3){
                            $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                            $("#mixersRecipe2").show();
                            $("#mixersRecipe2").text(x["mixers"][1]);
                            $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                            $("#mixersRecipe3").show();
                            $("#mixersRecipe3").text(x["mixers"][2]);
                            $("#mixers, #mixersRecipe, #mixersRecipe2").css( "padding-bottom", "0" );
                            $("#mixersRecipe3").css( "padding-bottom", "2vh" );
                           } else if(x["mixers"].length === 4){
                            $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                            $("#mixersRecipe2").show();
                            $("#mixersRecipe2").text(x["mixers"][1]);
                            $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                            $("#mixersRecipe3").show();
                            $("#mixersRecipe3").text(x["mixers"][2]);
                            $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                            $("#mixersRecipe4").show();
                            $("#mixersRecipe4").text(x["mixers"][3]);
                            $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3").css( "padding-bottom", "0" );
                            $("#mixersRecipe4").css( "padding-bottom", "2vh" );
                           } else if(x["mixers"].length === 5){
                            $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                            $("#mixersRecipe2").show();
                            $("#mixersRecipe2").text(x["mixers"][1]);
                            $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                            $("#mixersRecipe3").show();
                            $("#mixersRecipe3").text(x["mixers"][2]);
                            $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                            $("#mixersRecipe4").show();
                            $("#mixersRecipe4").text(x["mixers"][3]);
                            $(".recipe-container").append('<p id="mixersRecipe5"></p>');
                            $("#mixersRecipe5").show();
                            $("#mixersRecipe5").text(x["mixers"][4]);
                            $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3, #mixersRecipe4").css( "padding-bottom", "0" );
                            $("#mixersRecipe5").css( "padding-bottom", "2vh" );
                           } else if(x["mixers"].length === 6){
                            $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                            $("#mixersRecipe2").show();
                            $("#mixersRecipe2").text(x["mixers"][1]);
                            $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                            $("#mixersRecipe3").show();
                            $("#mixersRecipe3").text(x["mixers"][2]);
                            $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                            $("#mixersRecipe4").show();
                            $("#mixersRecipe4").text(x["mixers"][3]);
                            $(".recipe-container").append('<p id="mixersRecipe5"></p>');
                            $("#mixersRecipe5").show();
                            $("#mixersRecipe5").text(x["mixers"][4]);
                            $(".recipe-container").append('<p id="mixersRecipe6"></p>');
                            $("#mixersRecipe6").show();
                            $("#mixersRecipe6").text(x["mixers"][5]);
                            $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3, #mixersRecipe4, #mixersRecipe5").css( "padding-bottom", "0" );
                            $("#mixersRecipe6").css( "padding-bottom", "2vh" );
                           }
                       }
    
    
                       if(x["garnish"] !== null){                   
                        $(".recipe-container").append('<p id="garnish"><span style="text-decoration: underline;">Garnish</span> :</p>');
                        $(".recipe-container").append('<p id="garnishRecipe"></p>');
                        $("#garnishRecipe").text(x["garnish"][0]);
                        $("#garnish, #garnishRecipe").css( "padding-bottom", "2vh" );
                        
                           if(x["garnish"].length === 2){
                            $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                            $("#garnishRecipe2").show();
                            $("#garnishRecipe2").text(x["garnish"][1]);
                            $("#garnish, #garnishRecipe").css( "padding-bottom", "0" );
                            $("#garnishRecipe2").css( "padding-bottom", "2vh" );
                           } else if(x["garnish"].length === 3){
                            $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                            $("#garnishRecipe2").show();
                            $("#garnishRecipe2").text(x["garnish"][1]);
                            $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                            $("#garnishRecipe3").show();
                            $("#garnishRecipe3").text(x["garnish"][2]);
                            $("#garnish, #garnishRecipe, #garnishRecipe2").css( "padding-bottom", "0" );
                            $("#garnishRecipe3").css( "padding-bottom", "2vh" );
                           } else if(x["garnish"].length === 4){
                            $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                            $("#garnishRecipe2").show();
                            $("#garnishRecipe2").text(x["garnish"][1]);
                            $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                            $("#garnishRecipe3").show();
                            $("#garnishRecipe3").text(x["garnish"][2]);
                            $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                            $("#garnishRecipe4").show();
                            $("#garnishRecipe4").text(x["garnish"][3]);
                            $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3").css( "padding-bottom", "0" );
                            $("#garnishRecipe4").css( "padding-bottom", "2vh" );
                           } else if(x["garnish"].length === 5){
                            $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                            $("#garnishRecipe2").show();
                            $("#garnishRecipe2").text(x["garnish"][1]);
                            $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                            $("#garnishRecipe3").show();
                            $("#garnishRecipe3").text(x["garnish"][2]);
                            $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                            $("#garnishRecipe4").show();
                            $("#garnishRecipe4").text(x["garnish"][3]);
                            $(".recipe-container").append('<p id="garnishRecipe5"></p>');
                            $("#garnishRecipe5").show();
                            $("#garnishRecipe5").text(x["garnish"][4]);
                            $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3, #garnishRecipe4").css( "padding-bottom", "0" );
                            $("#garnishRecipe5").css( "padding-bottom", "2vh" );
                           }
                       }
                       console.log(x)
                       if(x["instructions"] === null){
                        $("#recipeInfoDiv").empty();
                        $("#recipeInfoDiv").hide();
                    } else {
                        $("#recipeInfoDiv").show();
                        $("#recipeInfoDiv").empty();
                        x["instructions"].map(e => {
                            let newLine = document.createElement("p");
                            newLine.innerText = e;
                            $("#recipeInfoDiv").append(newLine);
                            
                        })
                        
                    }
    
                        if(x["glass"] === "Wine Glass"){
                            $("#liquor").text("").append('<p id="liquor"><span style="text-decoration: underline;">Wine</span> :</p>');
                        }
    
                        if(x["glass"] === "Champagne Flute"){
                            $("#liquor").text("").append('<p id="liquor"><span style="text-decoration: underline;">Champagne</span> :</p>');
                        }
    
                        if(x["name"] === "Negroni"){
                            $("#mixers").text("").append('<p id="mixers"><span style="text-decoration: underline;">Vermouth</span> :</p>');
                        }
    
                        if(x["name"] === "French 75"){
                            $("#rim").text("").append('<p id="rim"><span style="text-decoration: underline;">Wine</span> :</p>');
                        }

                        if(x["name"] === "Lotus Blossom"){
                            $("#liqueur").text("").append('<p id="rim"><span style="text-decoration: underline;">Wine</span> :</p>');
                        }
                      
                        
                        if(x["photo"] === null){
                            $("#drinkPhoto").hide();
                        }
    
                    
                }
                //console.log(x)
            });
        })
    
    
        /* All Buttons */
        
    
        var extraRecipeSlots =
        $("#liquorRecipe2").hide();
        $("#liqueurRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $("#garnishRecipe5").hide();
        $(".results-list").hide();
        
    
        /* Navigation Buttons */
        $("#navMargarita").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $(".results-list").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $("#margBtnDiv").show();
            $(".margarita-buttons").show()//.fadeIn(200);
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navFrozen").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $(".results-list").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".frozen-buttons").show()//.fadeIn(200);
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navSpecialty").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $(".results-list").hide();
            $("#drinkPhoto").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $("#specialtyBtnDiv").show();
            $(".specialty-buttons").show()//.fadeIn(200);
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navMocktails").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();        
            $(".form-container").hide();
            $(".results-list").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".mocktail-buttons").show()//.fadeIn(200);
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navHappyHour").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();        
            $(".form-container").hide();
            $(".results-list").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".happyhour-buttons").show()//.fadeIn(200);
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navOther").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".results-list").hide();
            $("#specialtyBtnDiv").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $("#otherBtnDiv").show();
            $(".other-buttons").show()//.fadeIn(200);
            $("#search").show();
            $("#clear").show();
            $(".form-container").show();
            $(".button-container").show();
            searchInput.value = '';
            openFullscreen();
        });
    
        $("#navSangria").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".sangria-buttons").show()//.fadeIn(200);
            $(".results-list").hide();
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navSpecials").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".specials-buttons").show()//.fadeIn(200);
            $(".results-list").hide();
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navBrunch").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#othertnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".brunch-buttons").show()//.fadeIn(200);
            $(".results-list").hide();
            $(".button-container").show();
            openFullscreen();
        });
    
        $("#navBatch").click(function(){
            $(".item3").hide();
            $("#recipeDiv").hide();
            $(".drink-title").hide();
            $("#liquorRecipe2").hide();
            $("#mixersRecipe2").hide();
            $("#mixersRecipe3").hide();
            $("#mixersRecipe4").hide();
            $("#mixersRecipe5").hide();
            $("#garnishRecipe2").hide();
            $("#garnishRecipe3").hide();
            $("#garnishRecipe4").hide();
            $(".all-buttons").hide();
            $(".form-container").hide();
            $("#drinkPhoto").hide();
            $("#specialtyBtnDiv").hide();
            $("#margBtnDiv").hide();
            $("#otherBtnDiv").hide();
            $("#recipeInfoDiv").hide();
            $(".batch-buttons").show()//.fadeIn(200);
            $(".results-list").hide();
            $(".button-container").show();
            openFullscreen();
        });
    }); // jQuery end tag 