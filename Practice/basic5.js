let person = {
    firstName : "Jihyo",
    lastname: " Punya w",
    fullname : function(){
        return this.firstName + this.lastname

    }
}

console.log(person.firstName)
console.log(person.fullname())

for (let key in person) {
    console.log(person[key()])
}
