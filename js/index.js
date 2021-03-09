// Create and display a variable:
// var car = "Fiat";

// Adding the input value to the html
$(document).ready(function(){
    
    // last cost field
    $("button").click(function(){
    $("#cost").html('<b>Last bill cost:</b>'+ '<br><br>' + '$ ' + $("#lastBill").val());
    });
   
    // last consume field
    $("button").click(function(){
        $("#consume").html('<b>Last energy consume was:</b>'+ '<br><br>' + $("#lastConsume").val() + ' kWh');
        });
    
    // calculating
    $("button").click(function(){
        price_kwh  = Math.round(($("#lastBill").val() / $("#lastConsume").val())*100);
        $("#kwhPrice").html('<b>The average price of your energy is: </b> <br><br> ' + '¢ ' + price_kwh + ' per kWh');
    })

    // cleaning the input fields
    $("button").click(function(){
    $("input").val("");
    })    
    });
 
   // var bill = $("#lastBill").val();
    // var total_kwh = $("#lastConsume").val();

    // var price_kwh = bill / total_kwh
    // document.getElementById("demo2").innerHTML = price_kwh;
    // $("button").click(function(){
    //     document.getElementById("KwhPrice").innerHTML = price_kwh;
    // })





