const User = require('./basic6.js')

class Pets extends User {
    constructor(firstname,lastname){
        super(firstname,lastname)
    }

    Pets(){
        console.log('daniel')
    }
}

let Pe = new Pets("daniel","craig")

Pe.fullnames()