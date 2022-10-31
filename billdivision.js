/*
	author: Aldanis Vigo
	created: Sat Oct 29 2022 @ 7:04:19 PM
	contact: aldanisvigo@gmail.com
*/

//https://www.hackerrank.com/challenges/bon-appetit
function bonAppetit(bill, k, b) {
    //Get the total bill
    let tot = bill.filter((i,n)=>n!=k).reduce((a,b)=>a+b)

    //If the total divided by two is the amount he charged her,
    //Bon appetit, otherwise he should return her what he charged her minus half the total, which is what she should have been charged.
    console.log(tot / 2 == b ? 'Bon Appetit' : b - (tot/2))
}

//k = 6
//b = 12
bonAppetit([2,4,6])
