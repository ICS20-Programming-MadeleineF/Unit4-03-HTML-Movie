//
// Created by: Madeleine Forgeron
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates if you are old enough to watch certain movies.
 */
function oldEnough() {
   	// initialize constants
  const MIN = 1
  const MAX = 100
  // initialize variables
	let number = ""	
	// get user input
	let age = parseInt(document.getElementById('age').value)


  	// if age equal or more then 18 they are old enough to see an 18+ movie alone
	if (age >= 18) {
		number = "You can watch 18+ movies alone"

    //if age equal or more then 13 they are old enough to see an 13+ movie alone
	}	else if (age >= 13){
    number = "You can watch 13+ movies alone"
  }
  // if they are younger then 13 they can see G or PG with an adult
  else{
    number = "You can watch G or PG movies with an adult"
  }
  // display the results
  document.getElementById('number').innerHTML = number
}