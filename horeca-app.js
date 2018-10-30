

		var bitterprijs16 = 4.26
		var bitterprijs = 2.13
		var schalenAmount = 0

		var wijnPrijs = 2.11;
		var wijnAmount = 0

		var bierPrijs = 3.75;
		var bierAmount = 0;

		var frisPrijs = 1.13;
		var frisAmount =0;

		var currentOrder = "none"






drank();
function drank() {

var currentOrder = prompt("wilt u bier fris wijn (type stop om afteronden)")

	if(currentOrder =="stop"){
			snacks();
	}


else if(currentOrder == "fris" || currentOrder == "bier" || currentOrder == "wijn" || currentOrder =="stop"){


//vraagt kijkt wwelk drankje je hebt genomen en vraagt hoeveel je daar van wilt hebben
	var drankamount = parseInt(prompt("hoeveel " + currentOrder + " wilt u hebben"))
	if(isNaN (parseInt(drankamount))){
		alert("dit is geen nummer")
		drank();
	}
		if(currentOrder == "bier"){
		 (bierAmount) += (drankamount);
		console.log(bierAmount)
		 drank();
		}	

			else if(currentOrder == "fris"){
			 (frisAmount) += (drankamount);
			console.log(frisAmount)
			   drank();
			}

	else if(currentOrder == "wijn"){
	 (wijnAmount) += (drankamount);
	console.log(wijnAmount)
	   drank();
	}

else{alert("ERROR")
drank();
}


}else{
alert("u kunt alleen kiezen uit fris bier of wijn")
drank();

}




}



function snacks(){

		var snackVraag = prompt("wilt u nog snacks (ja/nee)")
		if (snackVraag =="nee"){write();
		}
		

			var snackAmount = prompt("u kan bitterballen krijgen in schalen van 8 of 16");
			if( snackAmount =="8"){
			var schalenAmount = parseInt(prompt("hoeveel schalen wilt u?"));
			var kostbitterballen = (schalenAmount) * (bitterprijs)
			if(kostbitterballen > 0){document.write ( schalenAmount  + " schalen " + " &euro; " + kostbitterballen.toFixed(2) + "<br>")}
		    console.log(schalenAmount)
		    write();

			}	

		else if( snackAmount =="16"){
		var schalenAmount = parseInt(prompt("hoeveel schalen wilt u?"));
		console.log(schalenAmount)
		var kostbitterballen2 = (schalenAmount) * (bitterprijs16)
		if(kostbitterballen2 > 0){document.write (schalenAmount  + " schalen "  + " &euro; " + kostbitterballen2.toFixed(2) + "<br>")}
		console.log(schalenAmount)
		write(); 

		}

	
else{
alert("U kan alleen kiezen uit schalen van 8 of 16");
snacks();
}
}


function write(){
		var totaalBier = (bierAmount) * (bierPrijs)
		var totaalWijn = (wijnAmount) * (wijnPrijs)
		var totaalFris = (frisAmount) * (frisPrijs)

			console.log(totaalBier)

		if(bierAmount > 0){document.write (bierAmount + " X bier " +"=  &euro;" +totaalBier.toFixed(2) + "<br>")}
		if(wijnAmount > 0){document.write (wijnAmount + " X wijn " +"=  &euro;" +totaalWijn.toFixed(2) + "<br>")}
		if(frisAmount > 0){document.write (frisAmount + " X fris " +"=  &euro;" +totaalFris.toFixed(2) + "<br>")}
	
}
