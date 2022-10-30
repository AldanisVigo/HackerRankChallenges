/*
    This program showcases the Hash Table data structure, and a hashing algorithm for string and numbers
*/


/*
    Array will serve as our hash table
    Since we can calculate the index of any input by using a hash function
*/

let arr  = []

const hash = (key,arrSize) => {
    let hashcode = `${key}`.split('').map(char=>char.charCodeAt(0)).reduce((a,b)=>a+b)
    console.log(hashcode)
    return hashcode % arrSize
}

['America','United States','USA','La Yuma','ASU','Yuma La'].forEach((c,index,arr)=>console.log(hash(c,arr.length)))