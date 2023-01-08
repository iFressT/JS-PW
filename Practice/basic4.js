let a = "Friday "
console.log(a.length)
let b = a.slice(0,3)
console.log(b)
console.log(a[0])

// split
let sd = a.split("i")
console.log(sd)
console.log(sd[1].length)

let c =a+"is Gooday onegai day"
console.log(c)
console.log(c.indexOf("day"))
counts=0
let co = c.indexOf("day")
while (co !== -1){
    counts++
    co = c.indexOf("day",co+1)
    console.log("index"+co)
}
console.log(c)
console.log(counts)