function countingValleys(steps, path) {
    // Write your code here
    let ref = 0
    let valleys = 0
    let invalley = false
    for(let i = 0; i < steps;i++){
        if(path[i] == 'D') ref-- 
        else ref++
        if(ref < 0 && !invalley){
            invalley = true
        }

        if(ref == 0 && invalley){
            invalley = false
            valleys++
        }
    }
    return valleys
}

console.log(countingValleys(10,['D','U','D','D','D','U','U','D','U','U']))