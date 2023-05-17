
const sum = (arr) => {
    let summ = 0
    arr.forEach((element) => { 
        if(element) {
            summ++
        }
    })
    return summ
}
arr = [true,false,true,undefined]
console.log(sum(arr))