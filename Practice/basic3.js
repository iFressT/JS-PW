var marks= Array(12)
var marks= new Array (12,23,2)
sum=0
for (let i=0;i<marks.length;i++){
    sum +=marks[i]
}
console.log(sum)

let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var a = new Array(12,3,44,15,6,40)
var b = new Array()
for (let i=0;i<a.length;i++){

    if (a[i] % 2 == 0) {
        b.push(a[i])

    }
}
console.log(b)

let nf = a.filter(b=>b%2==0)
console.log(nf)

let mapAr = nf.map(b=>b*3)
console.log(mapAr)
let tv = mapAr.reduce((sum,val)=>sum+val,0)
console.log(tv)


let na = [23,23,24,42,52]

let na1 = na.filter(b=>b%2==0).map(b=>b*3).reduce((sum,value)=>sum+value,0)
console.log(na1)

na.sort(function(a,b){
    return a-b
})

na.sort((a,b)=>a-b)

// Map

