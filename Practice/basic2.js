let a = true

if (!a){
    console.log('-')

}else{
    console.log('-')

}
const i = 1
while (a){
    console.log('SS')
    a = false
}

do{
    console.log('ss2')

}while(i>20)


// 2 and 5 = 10
let n = 0
console.log('*****************')
for (let k=1;k<=1000 && n<3;k++){
    if (k%2==0 && k%5==0){
        n++
        console.log(k)
    }
}
