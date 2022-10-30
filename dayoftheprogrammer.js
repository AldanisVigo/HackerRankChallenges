'use strict'
/*
	author: Aldanis Vigo
	created: Sat Oct 29 2022 @ 7:04:32 PM
	contact: aldanisvigo@gmail.com
*/

//https://www.hackerrank.com/challenges/day-of-the-programmer/
/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    //Make the date
    let date = new Date(`${year}-01-01`)
    //Add 256 days to it
    date.setDate(date.getDate() + 256)
    //Get the final date
    let finalDate = date.toISOString().split('T')[0]
    
    let day //calculate the day
    if(year < 1918) { //Before 1918
        //If leap year make it 12 else make it 13
        day = year % 4 === 0 ? 12 : 13
    }else if(year == 1918){ //On 1918 make the day 26
        day = 26
    }else{ //After 1918
        //Calculate Georgian calendar leap year if it is make it 12 otherwise make it 13
        day = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 12 : 13
    }
    
   //Generate the final formatted response
    let response = `${day}.${finalDate.split('-')[1]}.${year}`
    //Return it
    return response 
}


console.log(dayOfProgrammer(1700))