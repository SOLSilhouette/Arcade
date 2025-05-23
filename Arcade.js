//Prince SK ['Silhouette'] DID!
//import { setPublishableKey, charges } from "stripe";
//const stripeKey = "pk_test_51NBnjJGnEJQAgpMVDwCXSa4CjmAMnSBfcUOioln3B8Rc27fKzvMetJi8Q8UPMQIbDRiWhfupiCczSZ9G08UYVbOw00EFxgbpiC";

var yourItems = [];
var total_cost = 0;

document.body.addEventListener("load", setTimeout(function loadBar() {
    document.querySelector("#load").style.transition = "width 2s linear";
    document.querySelector("#load").style.width = "0px";
    document.querySelector("#load").style.width = "180px";

    document.body.addEventListener("load", setTimeout(function loadOver() {
        document.querySelector("#intro_imageDiv").style.display = "none";
        document.querySelector("#loadBar").style.display = "none";
        document.querySelector("#head_imageDiv").style.display = "block";
        document.querySelector("#main").style.display = "block";
        document.body.style.backgroundImage = 'url("Arcade\ Mascot.jpg")';

    //CATEGORIES
//LOADED FRIES
document.querySelector("#cat1").addEventListener("click", function() {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#cat_loadedFries").style.display = "block";
    document.querySelector("#back_checkDiv").style.display = "block";
});
//LOADED FRIES


//SALADS
document.querySelector("#cat2").addEventListener("click", function() {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#cat_salads").style.display = "block";
    document.querySelector("#back_checkDiv").style.display = "block";
});
//SALADS


//FRIES
document.querySelector("#cat3").addEventListener("click", function() {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#cat_fries").style.display = "block";
    document.querySelector("#back_checkDiv").style.display = "block";
});
//FRIES
    //CATEGORIES


    //LOADED FRIES
//LOADED1
var loaded1_state = false;

document.querySelector("#loaded1").addEventListener("click", function() {
    if(loaded1_state) {
        document.querySelector("#loaded1").style.transition = "height 0.25s";
        document.querySelector("#loaded1").style.height = "170px";
        document.querySelector("#loaded1_num").style.display = "none";
        document.querySelector("#loaded1_done").style.borderRadius = "10px";
        document.querySelector("#loaded1_otherPrices").style.display = "none";

        loaded1_state = false;
    }

    else {
        document.querySelector("#loaded1").style.transition = "height 0.25s";
        document.querySelector("#loaded1").style.height = "80px";
        document.querySelector("#loaded1_num").style.display = "inline-block";
        document.querySelector("#loaded1_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded1_otherPrices").style.display = "inline-block";

        loaded1_state = true;
    }
});

document.querySelector("#loaded1_num").addEventListener("input", function() {
   if (document.querySelector("#loaded1_num").value < 1) {
        document.querySelector("#loaded1_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded1_done").style.display = "none";
        document.querySelector("#loaded1_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#loaded1_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#loaded1_done").style.display = "inline-block";
        document.querySelector("#loaded1_otherPrices").style.display = "none";
    }
});

var loaded1_priceList = ["GH₵60.00", "GH₵85.00", "GH₵130.00"];
var loaded1_sizeList = ["Ham | Small", "Ham | Medium", "Ham | Large"];
var loaded1_priceSelect = 0;
document.querySelector("#loaded1_otherPrices").addEventListener("click", function() {
    loaded1_priceSelect += 1;
    document.querySelector("#loaded1_price").innerHTML = loaded1_priceList[loaded1_priceSelect];
    document.querySelector("#loaded1_name").innerHTML = loaded1_sizeList[loaded1_priceSelect];

    if (loaded1_priceSelect == loaded1_priceList.length) {
        loaded1_priceSelect = 0;
        document.querySelector("#loaded1_price").innerHTML = loaded1_priceList[loaded1_priceSelect];
        document.querySelector("#loaded1_name").innerHTML = loaded1_sizeList[loaded1_priceSelect];
    }
});

document.querySelector("#loaded1_done").addEventListener("click", function() {
    var loaded1_price = document.querySelector("#loaded1_price").innerHTML.slice(3,-1);
    var loaded1_priceNum = Number(loaded1_price).toFixed(2) * document.querySelector("#loaded1_num").value;
    var loaded1_list = "| " + document.querySelector("#loaded1_name").innerHTML + " |(x" + document.querySelector("#loaded1_num").value + ")" + " for " + "GH₵" + loaded1_priceNum.toFixed(2);
    yourItems.push(loaded1_list);
    total_cost += loaded1_priceNum;
    document.querySelector("#loaded1_panel").style.display = "none";

    console.log(loaded1_list);
    console.log(yourItems.join("\n"));
    console.log(loaded1_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//LOADED1


//LOADED2
var loaded2_state = false;

document.querySelector("#loaded2").addEventListener("click", function() {
    if(loaded2_state) {
        document.querySelector("#loaded2").style.transition = "height 0.25s";
        document.querySelector("#loaded2").style.height = "170px";
        document.querySelector("#loaded2_num").style.display = "none";
        document.querySelector("#loaded2_done").style.borderRadius = "10px";
        document.querySelector("#loaded2_otherPrices").style.display = "none";

        loaded2_state = false;
    }

    else {
        document.querySelector("#loaded2").style.transition = "height 0.25s";
        document.querySelector("#loaded2").style.height = "80px";
        document.querySelector("#loaded2_num").style.display = "inline-block";
        document.querySelector("#loaded2_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded2_otherPrices").style.display = "inline-block";

        loaded2_state = true;
    }
});

document.querySelector("#loaded2_num").addEventListener("input", function() {
   if (document.querySelector("#loaded2_num").value < 1) {
        document.querySelector("#loaded2_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded2_done").style.display = "none";
        document.querySelector("#loaded2_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#loaded2_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#loaded2_done").style.display = "inline-block";
        document.querySelector("#loaded2_otherPrices").style.display = "none";
    }
});

var loaded2_priceList = ["GH₵70.00", "GH₵90.00", "GH₵140.00"];
var loaded2_sizeList = ["Beef | Small", "Beef | Medium", "Beef | Large"];
var loaded2_priceSelect = 0;
document.querySelector("#loaded2_otherPrices").addEventListener("click", function() {
    loaded2_priceSelect += 1;
    document.querySelector("#loaded2_price").innerHTML = loaded2_priceList[loaded2_priceSelect];
    document.querySelector("#loaded2_name").innerHTML = loaded2_sizeList[loaded2_priceSelect];

    if (loaded2_priceSelect == loaded2_priceList.length) {
        loaded2_priceSelect = 0;
        document.querySelector("#loaded2_price").innerHTML = loaded2_priceList[loaded2_priceSelect];
        document.querySelector("#loaded2_name").innerHTML = loaded2_sizeList[loaded2_priceSelect];
    }
});

document.querySelector("#loaded2_done").addEventListener("click", function() {
    var loaded2_price = document.querySelector("#loaded2_price").innerHTML.slice(3,-1);
    var loaded2_priceNum = Number(loaded2_price).toFixed(2) * document.querySelector("#loaded2_num").value;
    var loaded2_list = "| " + document.querySelector("#loaded2_name").innerHTML + " |(x" + document.querySelector("#loaded2_num").value + ")" + " for " + "GH₵" + loaded2_priceNum.toFixed(2);
    yourItems.push(loaded2_list);
    total_cost += loaded2_priceNum;
    document.querySelector("#loaded2_panel").style.display = "none";

    console.log(loaded2_list);
    console.log(yourItems.join("\n"));
    console.log(loaded2_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//LOADED2


//LOADED3
var loaded3_state = false;

document.querySelector("#loaded3").addEventListener("click", function() {
    if(loaded3_state) {
        document.querySelector("#loaded3").style.transition = "height 0.25s";
        document.querySelector("#loaded3").style.height = "170px";
        document.querySelector("#loaded3_num").style.display = "none";
        document.querySelector("#loaded3_done").style.borderRadius = "10px";
        document.querySelector("#loaded3_otherPrices").style.display = "none";

        loaded3_state = false;
    }

    else {
        document.querySelector("#loaded3").style.transition = "height 0.25s";
        document.querySelector("#loaded3").style.height = "80px";
        document.querySelector("#loaded3_num").style.display = "inline-block";
        document.querySelector("#loaded3_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded3_otherPrices").style.display = "inline-block";
        
        loaded3_state = true;
    }
});

document.querySelector("#loaded3_num").addEventListener("input", function() {
   if (document.querySelector("#loaded3_num").value < 1) {
        document.querySelector("#loaded3_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded3_done").style.display = "none";
        document.querySelector("#loaded3_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#loaded3_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#loaded3_done").style.display = "inline-block";
        document.querySelector("#loaded3_otherPrices").style.display = "none";
    }
});

var loaded3_priceList = ["GH₵60.00", "GH₵85.00", "GH₵130.00"];
var loaded3_sizeList = ["Chicken | Small", "Chicken | Medium", "Chicken | Large"];
var loaded3_priceSelect = 0;
document.querySelector("#loaded3_otherPrices").addEventListener("click", function() {
    loaded3_priceSelect += 1;
    document.querySelector("#loaded3_price").innerHTML = loaded3_priceList[loaded3_priceSelect];
    document.querySelector("#loaded3_name").innerHTML = loaded3_sizeList[loaded3_priceSelect];

    if (loaded3_priceSelect == loaded3_priceList.length) {
        loaded3_priceSelect = 0;
        document.querySelector("#loaded3_price").innerHTML = loaded3_priceList[loaded3_priceSelect];
        document.querySelector("#loaded3_name").innerHTML = loaded3_sizeList[loaded3_priceSelect];
    }
});

document.querySelector("#loaded3_done").addEventListener("click", function() {
    var loaded3_price = document.querySelector("#loaded3_price").innerHTML.slice(3,-1);
    var loaded3_priceNum = Number(loaded3_price).toFixed(2) * document.querySelector("#loaded3_num").value;
    var loaded3_list = "| " + document.querySelector("#loaded3_name").innerHTML + " |(x" + document.querySelector("#loaded3_num").value + ")" + " for " + "GH₵" + loaded3_priceNum.toFixed(2);
    yourItems.push(loaded3_list);
    total_cost += loaded3_priceNum;
    document.querySelector("#loaded3_panel").style.display = "none";

    console.log(loaded3_list);
    console.log(yourItems.join("\n"));
    console.log(loaded3_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//LOADED3


//LOADED4
var loaded4_state = false;

document.querySelector("#loaded4").addEventListener("click", function() {
    if(loaded4_state) {
        document.querySelector("#loaded4").style.transition = "height 0.25s";
        document.querySelector("#loaded4").style.height = "170px";
        document.querySelector("#loaded4_num").style.display = "none";
        document.querySelector("#loaded4_done").style.borderRadius = "10px";
        document.querySelector("#loaded4_otherPrices").style.display = "none";

        loaded4_state = false;
    }

    else {
        document.querySelector("#loaded4").style.transition = "height 0.25s";
        document.querySelector("#loaded4").style.height = "80px";
        document.querySelector("#loaded4_num").style.display = "inline-block";
        document.querySelector("#loaded4_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded4_otherPrices").style.display = "inline-block";
        
        loaded4_state = true;
    }
});

document.querySelector("#loaded4_num").addEventListener("input", function() {
   if (document.querySelector("#loaded4_num").value < 1) {
        document.querySelector("#loaded4_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded4_done").style.display = "none";
        document.querySelector("#loaded4_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#loaded4_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#loaded4_done").style.display = "inline-block";
        document.querySelector("#loaded4_otherPrices").style.display = "none";
    }
});

var loaded4_priceList = ["GH₵80.00", "GH₵115.00", "GH₵155.00"];
var loaded4_sizeList = ["Full House | Small", "Full House | Medium", "Full House | Large"];
var loaded4_priceSelect = 0;
document.querySelector("#loaded4_otherPrices").addEventListener("click", function() {
    loaded4_priceSelect += 1;
    document.querySelector("#loaded4_price").innerHTML = loaded4_priceList[loaded4_priceSelect];
    document.querySelector("#loaded4_name").innerHTML = loaded4_sizeList[loaded4_priceSelect];

    if (loaded4_priceSelect == loaded4_priceList.length) {
        loaded4_priceSelect = 0;
        document.querySelector("#loaded4_price").innerHTML = loaded4_priceList[loaded4_priceSelect];
        document.querySelector("#loaded4_name").innerHTML = loaded4_sizeList[loaded4_priceSelect];
    }
});

document.querySelector("#loaded4_done").addEventListener("click", function() {
    var loaded4_price = document.querySelector("#loaded4_price").innerHTML.slice(3,-1);
    var loaded4_priceNum = Number(loaded4_price).toFixed(2) * document.querySelector("#loaded4_num").value;
    var loaded4_list = "| " + document.querySelector("#loaded4_name").innerHTML + " |(x" + document.querySelector("#loaded4_num").value + ")" + " for " + "GH₵" + loaded4_priceNum.toFixed(2);
    yourItems.push(loaded4_list);
    total_cost += loaded4_priceNum;
    document.querySelector("#loaded4_panel").style.display = "none";

    console.log(loaded4_list);
    console.log(yourItems.join("\n"));
    console.log(loaded4_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//LOADED4


//LOADED5
var loaded5_state = false;

document.querySelector("#loaded5").addEventListener("click", function() {
    if(loaded5_state) {
        document.querySelector("#loaded5").style.transition = "height 0.25s";
        document.querySelector("#loaded5").style.height = "170px";
        document.querySelector("#loaded5_num").style.display = "none";
        document.querySelector("#loaded5_done").style.borderRadius = "10px";
        document.querySelector("#loaded5_otherPrices").style.display = "none";

        loaded5_state = false;
    }

    else {
        document.querySelector("#loaded5").style.transition = "height 0.25s";
        document.querySelector("#loaded5").style.height = "80px";
        document.querySelector("#loaded5_num").style.display = "inline-block";
        document.querySelector("#loaded5_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded5_otherPrices").style.display = "inline-block";
        
        loaded5_state = true;
    }
});

document.querySelector("#loaded5_num").addEventListener("input", function() {
   if (document.querySelector("#loaded5_num").value < 1) {
        document.querySelector("#loaded5_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#loaded5_done").style.display = "none";
        document.querySelector("#loaded5_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#loaded5_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#loaded5_done").style.display = "inline-block";
        document.querySelector("#loaded5_otherPrices").style.display = "none";
    }
});

var loaded5_priceList = ["GH₵60.00", "GH₵85.00", "GH₵130.00"];
var loaded5_sizeList = ["Sausage | Small", "Sausage | Medium", "Sausage | Large"];
var loaded5_priceSelect = 0;
document.querySelector("#loaded5_otherPrices").addEventListener("click", function() {
    loaded5_priceSelect += 1;
    document.querySelector("#loaded5_price").innerHTML = loaded5_priceList[loaded5_priceSelect];
    document.querySelector("#loaded5_name").innerHTML = loaded5_sizeList[loaded5_priceSelect];

    if (loaded5_priceSelect == loaded5_priceList.length) {
        loaded5_priceSelect = 0;
        document.querySelector("#loaded5_price").innerHTML = loaded5_priceList[loaded5_priceSelect];
        document.querySelector("#loaded5_name").innerHTML = loaded5_sizeList[loaded5_priceSelect];
    }
});

document.querySelector("#loaded5_done").addEventListener("click", function() {
    var loaded5_price = document.querySelector("#loaded5_price").innerHTML.slice(3,-1);
    var loaded5_priceNum = Number(loaded5_price).toFixed(2) * document.querySelector("#loaded5_num").value;
    var loaded5_list = "| " + document.querySelector("#loaded5_name").innerHTML + " |(x" + document.querySelector("#loaded5_num").value + ")" + " for " + "GH₵" + loaded5_priceNum.toFixed(2);
    yourItems.push(loaded5_list);
    total_cost += loaded5_priceNum;
    document.querySelector("#loaded5_panel").style.display = "none";

    console.log(loaded5_list);
    console.log(yourItems.join("\n"));
    console.log(loaded5_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//LOADED5
    //LOADED FRIES


    //SALADS
//SALAD1
var salad1_state = false;

document.querySelector("#salad1").addEventListener("click", function() {
    if(salad1_state) {
        document.querySelector("#salad1").style.transition = "height 0.25s";
        document.querySelector("#salad1").style.height = "170px";
        document.querySelector("#salad1_num").style.display = "none";
        document.querySelector("#salad1_done").style.borderRadius = "10px";
        document.querySelector("#salad1_otherPrices").style.display = "none";

        salad1_state = false;
    }

    else {
        document.querySelector("#salad1").style.transition = "height 0.25s";
        document.querySelector("#salad1").style.height = "80px";
        document.querySelector("#salad1_num").style.display = "inline-block";
        document.querySelector("#salad1_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad1_otherPrices").style.display = "inline-block";

        salad1_state = true;
    }
});

document.querySelector("#salad1_num").addEventListener("input", function() {
   if (document.querySelector("#salad1_num").value < 1) {
        document.querySelector("#salad1_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad1_done").style.display = "none";
        document.querySelector("#salad1_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#salad1_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#salad1_done").style.display = "inline-block";
        document.querySelector("#salad1_otherPrices").style.display = "none";
    }
});

var salad1_priceList = ["GH₵50.00", "GH₵60.00", "GH₵70.00"];
var salad1_sizeList = ["Chef's Salad | Small", "Chef's Salad | Medium", "Chef's Salad | Large"];
var salad1_priceSelect = 0;
document.querySelector("#salad1_otherPrices").addEventListener("click", function() {
    salad1_priceSelect += 1;
    document.querySelector("#salad1_price").innerHTML = salad1_priceList[salad1_priceSelect];
    document.querySelector("#salad1_name").innerHTML = salad1_sizeList[salad1_priceSelect];

    if (salad1_priceSelect == salad1_priceList.length) {
        salad1_priceSelect = 0;
        document.querySelector("#salad1_price").innerHTML = salad1_priceList[salad1_priceSelect];
        document.querySelector("#salad1_name").innerHTML = salad1_sizeList[salad1_priceSelect];
    }
});

document.querySelector("#salad1_done").addEventListener("click", function() {
    var salad1_price = document.querySelector("#salad1_price").innerHTML.slice(3,-1);
    var salad1_priceNum = Number(salad1_price).toFixed(2) * document.querySelector("#salad1_num").value;
    var salad1_list ="| " +  document.querySelector("#salad1_name").innerHTML + " |(x" + document.querySelector("#salad1_num").value + ")" + " for " + "GH₵" + salad1_priceNum.toFixed(2);
    yourItems.push(salad1_list);
    total_cost += salad1_priceNum;
    document.querySelector("#salad1_panel").style.display = "none";

    console.log(salad1_list);
    console.log(yourItems.join("\n"));
    console.log(salad1_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//SALAD1


//SALAD2 
var salad2_state = false;

document.querySelector("#salad2").addEventListener("click", function() {
    if(salad2_state) {
        document.querySelector("#salad2").style.transition = "height 0.25s";
        document.querySelector("#salad2").style.height = "170px";
        document.querySelector("#salad2_num").style.display = "none";
        document.querySelector("#salad2_done").style.borderRadius = "10px";
        document.querySelector("#salad2_otherPrices").style.display = "none";

        salad2_state = false;
    }

    else {
        document.querySelector("#salad2").style.transition = "height 0.25s";
        document.querySelector("#salad2").style.height = "80px";
        document.querySelector("#salad2_num").style.display = "inline-block";
        document.querySelector("#salad2_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad2_otherPrices").style.display = "inline-block";

        salad2_state = true;
    }
});

document.querySelector("#salad2_num").addEventListener("input", function() {
   if (document.querySelector("#salad2_num").value < 1) {
        document.querySelector("#salad2_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad2_done").style.display = "none";
        document.querySelector("#salad2_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#salad2_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#salad2_done").style.display = "inline-block";
        document.querySelector("#salad2_otherPrices").style.display = "none";
    }
});

var salad2_priceList = ["GH₵45.00", "GH₵55.00", "GH₵65.00"];
var salad2_sizeList = ["Chicken Salad | Small", "Chicken Salad | Medium", "Chicken Salad | Large"];
var salad2_priceSelect = 0;
document.querySelector("#salad2_otherPrices").addEventListener("click", function() {
    salad2_priceSelect += 1;
    document.querySelector("#salad2_price").innerHTML = salad2_priceList[salad2_priceSelect];
    document.querySelector("#salad2_name").innerHTML = salad2_sizeList[salad2_priceSelect];

    if (salad2_priceSelect == salad2_priceList.length) {
        salad2_priceSelect = 0;
        document.querySelector("#salad2_price").innerHTML = salad2_priceList[salad2_priceSelect];
        document.querySelector("#salad2_name").innerHTML = salad2_sizeList[salad2_priceSelect];
    }
});

document.querySelector("#salad2_done").addEventListener("click", function() {
    var salad2_price = document.querySelector("#salad2_price").innerHTML.slice(3,-1);
    var salad2_priceNum = Number(salad2_price).toFixed(2) * document.querySelector("#salad2_num").value;
    var salad2_list ="| " +  document.querySelector("#salad2_name").innerHTML + " |(x" + document.querySelector("#salad2_num").value + ")" + " for " + "GH₵" + salad2_priceNum.toFixed(2);
    yourItems.push(salad2_list);
    total_cost += salad2_priceNum;
    document.querySelector("#salad2_panel").style.display = "none";

    console.log(salad2_list);
    console.log(yourItems.join("\n"));
    console.log(salad2_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//SALAD2


//SALAD3 
var salad3_state = false;

document.querySelector("#salad3").addEventListener("click", function() {
    if(salad3_state) {
        document.querySelector("#salad3").style.transition = "height 0.25s";
        document.querySelector("#salad3").style.height = "170px";
        document.querySelector("#salad3_num").style.display = "none";
        document.querySelector("#salad3_done").style.borderRadius = "10px";
        document.querySelector("#salad3_otherPrices").style.display = "none";

        salad3_state = false;
    }

    else {
        document.querySelector("#salad3").style.transition = "height 0.25s";
        document.querySelector("#salad3").style.height = "80px";
        document.querySelector("#salad3_num").style.display = "inline-block";
        document.querySelector("#salad3_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad3_otherPrices").style.display = "inline-block";
        
        salad3_state = true;
    }
});

var salad3_priceList = ["GH₵50.00", "GH₵60.00", "GH₵70.00"];
var salad3_sizeList = ["Ghana-Man Salad | Small", "Ghana-Man Salad | Medium", "Ghana-Man Salad | Large"];
var salad3_priceSelect = 0;
document.querySelector("#salad3_otherPrices").addEventListener("click", function() {
    salad3_priceSelect += 1;
    document.querySelector("#salad3_price").innerHTML = salad3_priceList[salad3_priceSelect];
    document.querySelector("#salad3_name").innerHTML = salad3_sizeList[salad3_priceSelect];

    if (salad3_priceSelect == salad3_priceList.length) {
        salad3_priceSelect = 0;
        document.querySelector("#salad3_price").innerHTML = salad3_priceList[salad3_priceSelect];
        document.querySelector("#salad3_name").innerHTML = salad3_sizeList[salad3_priceSelect];
    }
});

document.querySelector("#salad3_num").addEventListener("input", function() {
   if (document.querySelector("#salad3_num").value < 1) {
        document.querySelector("#salad3_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad3_done").style.display = "none";
        document.querySelector("#salad3_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#salad3_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#salad3_done").style.display = "inline-block";
        document.querySelector("#salad3_otherPrices").style.display = "none";
    }
});

document.querySelector("#salad3_done").addEventListener("click", function() {
    var salad3_price = document.querySelector("#salad3_price").innerHTML.slice(3,-1);
    var salad3_priceNum = Number(salad3_price).toFixed(2) * document.querySelector("#salad3_num").value;
    var salad3_list ="| " +  document.querySelector("#salad3_name").innerHTML + " |(x" + document.querySelector("#salad3_num").value + ")" + " for " + "GH₵" + salad3_priceNum.toFixed(2);
    yourItems.push(salad3_list);
    total_cost += salad3_priceNum;
    document.querySelector("#salad3_panel").style.display = "none";

    console.log(salad3_list);
    console.log(yourItems.join("\n"));
    console.log(salad3_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//SALAD3 


//SALAD4 
var salad4_state = false;

document.querySelector("#salad4").addEventListener("click", function() {
    if(salad4_state) {
        document.querySelector("#salad4").style.transition = "height 0.25s";
        document.querySelector("#salad4").style.height = "170px";
        document.querySelector("#salad4_num").style.display = "none";
        document.querySelector("#salad4_done").style.borderRadius = "10px";
        document.querySelector("#salad4_otherPrices").style.display = "none";

        salad4_state = false;
    }

    else {
        document.querySelector("#salad4").style.transition = "height 0.25s";
        document.querySelector("#salad4").style.height = "80px";
        document.querySelector("#salad4_num").style.display = "inline-block";
        document.querySelector("#salad4_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad4_otherPrices").style.display = "inline-block";
        
        salad4_state = true;
    }
});

var salad4_priceList = ["GH₵50.00", "GH₵60.00", "GH₵70.00"];
var salad4_sizeList = ["Pittsburgh Salad | Small", "Pittsburgh Salad | Medium", "Pittsburgh Salad | Large"];
var salad4_priceSelect = 0;
document.querySelector("#salad4_otherPrices").addEventListener("click", function() {
    salad4_priceSelect += 1;
    document.querySelector("#salad4_price").innerHTML = salad4_priceList[salad4_priceSelect];
    document.querySelector("#salad4_name").innerHTML = salad4_sizeList[salad4_priceSelect];

    if (salad4_priceSelect == salad4_priceList.length) {
        salad4_priceSelect = 0;
        document.querySelector("#salad4_price").innerHTML = salad4_priceList[salad4_priceSelect];
        document.querySelector("#salad4_name").innerHTML = salad4_sizeList[salad4_priceSelect];
    }
});

document.querySelector("#salad4_num").addEventListener("input", function() {
   if (document.querySelector("#salad4_num").value < 1) {
        document.querySelector("#salad4_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad4_done").style.display = "none";
        document.querySelector("#salad4_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#salad4_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#salad4_done").style.display = "inline-block";
        document.querySelector("#salad4_otherPrices").style.display = "none";
    }
});

document.querySelector("#salad4_done").addEventListener("click", function() {
    var salad4_price = document.querySelector("#salad4_price").innerHTML.slice(3,-1);
    var salad4_priceNum = Number(salad4_price).toFixed(2) * document.querySelector("#salad4_num").value;
    var salad4_list ="| " +  document.querySelector("#salad4_name").innerHTML + " |(x" + document.querySelector("#salad4_num").value + ")" + " for " + "GH₵" + salad4_priceNum.toFixed(2);
    yourItems.push(salad4_list);
    total_cost += salad4_priceNum;
    document.querySelector("#salad4_panel").style.display = "none";

    console.log(salad4_list);
    console.log(yourItems.join("\n"));
    console.log(salad4_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//SALAD4 


//SALAD5 
var salad5_state = false;

document.querySelector("#salad5").addEventListener("click", function() {
    if(salad5_state) {
        document.querySelector("#salad5").style.transition = "height 0.25s";
        document.querySelector("#salad5").style.height = "170px";
        document.querySelector("#salad5_num").style.display = "none";
        document.querySelector("#salad5_done").style.borderRadius = "10px";
        document.querySelector("#salad5_otherPrices").style.display = "none";

        salad5_state = false;
    }

    else {
        document.querySelector("#salad5").style.transition = "height 0.25s";
        document.querySelector("#salad5").style.height = "80px";
        document.querySelector("#salad5_num").style.display = "inline-block";
        document.querySelector("#salad5_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad5_otherPrices").style.display = "inline-block";
        
        salad5_state = true;
    }
});

document.querySelector("#salad5_num").addEventListener("input", function() {
   if (document.querySelector("#salad5_num").value < 1) {
        document.querySelector("#salad5_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#salad5_done").style.display = "none";
        document.querySelector("#salad5_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#salad5_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#salad5_done").style.display = "inline-block";
        document.querySelector("#salad5_otherPrices").style.display = "none";
    }
});

var salad5_priceList = ["GH₵30.00", "GH₵35.00", "GH₵40.00"];
var salad5_sizeList = ["Veggie Salad | Small", "Veggie Salad | Medium", "Veggie Salad | Large"];
var salad5_priceSelect = 0;
document.querySelector("#salad5_otherPrices").addEventListener("click", function() {
    salad5_priceSelect += 1;
    document.querySelector("#salad5_price").innerHTML = salad5_priceList[salad5_priceSelect];
    document.querySelector("#salad5_name").innerHTML = salad5_sizeList[salad5_priceSelect];

    if (salad5_priceSelect == salad5_priceList.length) {
        salad5_priceSelect = 0;
        document.querySelector("#salad5_price").innerHTML = salad5_priceList[salad5_priceSelect];
        document.querySelector("#salad5_name").innerHTML = salad5_sizeList[salad5_priceSelect];
    }
});

document.querySelector("#salad5_done").addEventListener("click", function() {
    var salad5_price = document.querySelector("#salad5_price").innerHTML.slice(3,-1);
    var salad5_priceNum = Number(salad5_price).toFixed(2) * document.querySelector("#salad5_num").value;
    var salad5_list ="| " +  document.querySelector("#salad5_name").innerHTML + " |(x" + document.querySelector("#salad5_num").value + ")" + " for " + "GH₵" + salad5_priceNum.toFixed(2);
    yourItems.push(salad5_list);
    total_cost += salad5_priceNum;
    document.querySelector("#salad5_panel").style.display = "none";

    console.log(salad5_list);
    console.log(yourItems.join("\n"));
    console.log(salad5_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//SALAD5 
    //SALADS


    //FRIES
//FRIES1
var fries1_state = false;

document.querySelector("#fries1").addEventListener("click", function() {
    if(fries1_state) {
        document.querySelector("#fries1").style.transition = "height 0.25s";
        document.querySelector("#fries1").style.height = "170px";
        document.querySelector("#fries1_num").style.display = "none";
        document.querySelector("#fries1_done").style.borderRadius = "10px";
        document.querySelector("#fries1_otherPrices").style.display = "none";

        fries1_state = false;
    }

    else {
        document.querySelector("#fries1").style.transition = "height 0.25s";
        document.querySelector("#fries1").style.height = "80px";
        document.querySelector("#fries1_num").style.display = "inline-block";
        document.querySelector("#fries1_done").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#fries1_otherPrices").style.display = "inline-block";
        
        fries1_state = true;
    }
});

document.querySelector("#fries1_num").addEventListener("input", function() {
   if (document.querySelector("#fries1_num").value < 1) {
        document.querySelector("#fries1_num").style.borderRadius = "0 10px 10px 0";
        document.querySelector("#fries1_done").style.display = "none";
        document.querySelector("#fries1_otherPrices").style.display = "inline-block";
    }

    else {
        document.querySelector("#fries1_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#fries1_done").style.display = "inline-block";
        document.querySelector("#fries1_otherPrices").style.display = "none";
    }
});

var fries1_priceList = ["GH₵30.00", "GH₵40.00", "GH₵50.00"];
var fries1_sizeList = ["Fries Only | Small", "Fries Only | Medium", "Fries Only | Large"];
var fries1_priceSelect = 0;
document.querySelector("#fries1_otherPrices").addEventListener("click", function() {
    fries1_priceSelect += 1;
    document.querySelector("#fries1_price").innerHTML = fries1_priceList[fries1_priceSelect];
    document.querySelector("#fries1_name").innerHTML = fries1_sizeList[fries1_priceSelect];

    if (fries1_priceSelect == fries1_priceList.length) {
        fries1_priceSelect = 0;
        document.querySelector("#fries1_price").innerHTML = fries1_priceList[fries1_priceSelect];
        document.querySelector("#fries1_name").innerHTML = fries1_sizeList[fries1_priceSelect];
    }
});

document.querySelector("#fries1_done").addEventListener("click", function() {
    var fries1_price = document.querySelector("#fries1_price").innerHTML.slice(3,-1);
    var fries1_priceNum = Number(fries1_price).toFixed(2) * document.querySelector("#fries1_num").value;
    var fries1_list ="| " +  document.querySelector("#fries1_name").innerHTML + " |(x" + document.querySelector("#fries1_num").value + ")" + " for " + "GH₵" + fries1_priceNum.toFixed(2);
    yourItems.push(fries1_list);
    total_cost += fries1_priceNum;
    document.querySelector("#fries1_panel").style.display = "none";

    console.log(fries1_list);
    console.log(yourItems.join("\n"));
    console.log(fries1_priceNum.toFixed(2));
    console.log("Total Cost = GH₵" + total_cost.toFixed(2));
});
//FRIES1
    //FRIES



//CHECKOUT
document.querySelector("#check").addEventListener("click", function() {
    if(yourItems.length > 0) {
        document.querySelector("#cat_loadedFries").style.display = "none";
        document.querySelector("#cat_salads").style.display = "none";
        document.querySelector("#cat_fries").style.display = "none";
        document.querySelector("#back_checkDiv").style.display = "none";
        document.querySelector("#form").style.display = "block";
        document.querySelector("#items").innerHTML += yourItems.join("<br><br>");
        document.querySelector("#input_items").value = yourItems.join("\n\n");
        document.querySelector("#total_cost").value = "GH₵" + total_cost.toFixed(2);
        document.querySelector("#total_cost").disabled = true;
    }

    else {
        alert("You haven't selected anything.");
    }
});
//CHECKOUT


//BACK
document.querySelector("#back").addEventListener("click", function() {
    document.querySelector("#back_checkDiv").style.display = "none";
    document.querySelector("#cat_loadedFries").style.display = "none";
    document.querySelector("#cat_salads").style.display = "none";
    document.querySelector("#cat_fries").style.display = "none";
    document.querySelector("#main").style.display = "block";
});
//BACK



//SUBMIT
document.querySelector("form").addEventListener("submit", function() {
    document.querySelector("#total_cost").disabled = false;
    document.querySelector("#myform").style.display = "none";

    if (document.querySelector("#cash").checked == true) {
        alert("You'll pay upon delivery");
    }

    else if (document.querySelector("#online").checked == true) {
        alert("You'll be paying online.");
    }

    document.querySelector("#myform").addEventListener("submit",
        setTimeout(function() {
        document.location.reload();
    }, 500));
})
//SUBMIT
    }, 2500));
}, 500));