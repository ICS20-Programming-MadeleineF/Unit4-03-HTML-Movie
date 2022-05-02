//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates if temp is hot or cold.
 */
function tempHotOrCold() {
   	// initialize variables
	let temperature = ""	
	// get user input
	let guess = parseFloat(document.getElementById('guess').value)


  	// if guess equal or less then 9 it is cold
	if (guess <= 9){
		temperature = "It's cold Brrr"
	} 
	//if more then 9 it is hot	
	else {
		temperature = "IT'S HOT"
	}

  // display the results
  document.getElementById('temperature').innerHTML = temperature
}