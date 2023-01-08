module.exports = class User
{
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }


    age = 25

    get location(){
        return "amsterdam"

    }

    
    fullnames(){
        console.log(this.firstname+this.lastname)
    }
}
