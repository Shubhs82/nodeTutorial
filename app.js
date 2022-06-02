var os = require('os');

var user = os.userInfo()
console.log(user);

var currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentOS);