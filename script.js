//new var
//for loop
//check if \3 \5 but not both
//call it

let reult2= 0

for(let i =200; i<=2700; i++ ){
    if (!(i%3===0 && i%5===0) && (i%3===0 || i%5===0)){
        result2= result2+i
    }
}
console.log(result2)

