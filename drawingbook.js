/*
	author: Aldanis Vigo
	created: Sat Oct 29 2022 @ 10:06:01 PM
	contact: aldanisvigo@gmail.com
*/
//https://www.hackerrank.com/challenges/drawing-book
function pageCount(n, p) {
    n = n % 2 > 0 ? n : n + 1
    for(let i = 0; i < n / 2; i++){
        let lpl = 2 * i 
        let lpr = 2 * i + 1
        let rpl = n - (2 * i + 1)
        let rpr = n  - (2 * i)
        if(lpl == p || lpr == p || rpl == p || rpr == p){
            return i
        } 
    }
    return 0
}


console.log(pageCount(5,4))