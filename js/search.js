function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var countries = ['100W light bulb (Incandescent)','22 Inch LED TV','25" colour TV','3" belt sander','32 Inch LED TV','42 Inch LED TV','46 Inch LED TV','49 Inch LED TV','55 Inch LED TV','60W light bulb (Incandescent)','5 Inch LED TV','82 Inch LED TV','9" disc sander','Air Cooler','Air Fryer','Air Purifier','Amazon Echo','Amazon Echo Dot','Amazon Echo Show','Double Door Refrigerator','Apple TV','Aquarium Pump','AV Receiver','athroom Towel Heater Towel Rail','eiling Fan','Chromebook Chrome Book','Chromecast','Clock radio','Dryer','Clothes Dryer Tumble Dryer','Coffee Maker','Computer Monitor','Cooker Hood','Corded Drill Electric Drill','Corded Electric Handheld Leaf Blower','Cordless Drill Charger','Curling Iron','DAB Mains Radio Radio','Deep Freezer Chest Freezer','Dehumidifier','Desktop Computer','Dishwasher','Domestic Water Pump Shower Water Pump','DVD Player','Electric Blanket','Electric Boiler','Electric Doorbell Transformer','Electric Heater Fan','Electric Kettle Kettle','Electric Mower','Electric Pressure Cooker Pressure Cooker','Electric Shaver','Electric stove','Electric Tankless Water Heater','Electric Thermal Radiator Thermal Radiator','Espresso Coffee Machine Espresso Machine','EV Car Charger','EV Home Charger','Evaporative Air Conditioner Evaporative Cooler','Extractor Fan Bathroom Fan','Fluorescent Lamp Fluorescent Tube Light','Juice Mixer','Juice Blender','Blender','Food Processor','Food Blender Mixer','Food Dehydrator Tray Dehydrator','Freezer','Fridge','Fridge / Freezer','Deep Fryer','Fryer Deep Fat Fryer','Game Console','Gaming PC Gaming Computer','Garage Door Opener Electric Garage Door','Google Home Mini Google Nest Mini','Guitar Amplifier',' Hair Drier',' Hair Dryer','Hair Blow Dryer Blow Dryer','Hand Wash Oversink Water Heater','Heated Bathroom Mirror','Heated Hair Rollers Heated Rollers','Air Con','A/C','Home Air Conditioner AC','Home Internet Router Router','Home Phone DECT Telephone','Home Sound System','Water Boiler','Hot Water Dispenser Instant Hot Water Tap','Hot Water Immersion Heater','Humidifier','iMac',' Electric Cooker',' Induction Cooking Stove','Induction Hob (per hob) Induction Stove','Inkjet Printer Printer','Inverter Air conditioner','Iron Electric Iron','Kitchen Extractor Fan','Laptop Computer Laptop','Laser Printer','Lawnmower','LED Christmas Lights Tree Lights','LED Light Bulb Energy Saver Bulb','Mi Box Mi Box Android','Microwave Microwave Oven','Night Light','Nintendo Switch AC Adapter','Outdoor spa','Outdoor Hot Tub Canadian Spa','Oven Electric Oven','Paper Shredder','Stand Fan','Floor Fan','Pedestal Fan Tall Standing Fan','Percolator Coffee Maker','Philips Hue Smart Bulb Hue lights','Mobile Phone Charger','Cell Phone Charger','Phone Charger Smart Phone Charger','Playstation 4 PS4','Power Shower Electric Shower','Pressure Cooker','Projector','Refrigerator','Rice Cooker',' Sandwich Toaster','Sandwich Maker Sandwich Press','Scanner','Humax Box','Set Top Box Cable Box','Sewing Machine','Singer Sewing Machine','Sky Q 2TB Box Sky Box','Slow Cooker','Space Heater','Steam Iron','Steriliser Sterilizer','Hair Straighteners','Straightening Iron Hair Straighteners','Strimmer','Well Pump','Sump Pump','Submersible Water Pump Pool Pump','Table Fan Desk Fan','Tablet Charger','Tablet Computer','Toaster','Tower Fan','Treadmill','Tube Light (1500mm)','TV (19" colour)','Vacuum Cleaner','Wall Fan','Washing Machine Clothes Washer','Water Dispenser','Water Feature','Water Filter and Cooler Water Cooler','Range Extender','WiFi Extender','WiFi Booster WiFi Repeater','WiFi Router Router','Wine cooler (18 bottles)','Xbox One'];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);