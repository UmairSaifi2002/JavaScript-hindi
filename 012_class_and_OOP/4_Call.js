function SetUser (username) {
    this.username = username;
}

function CreateUser (username,email,password) {
    // yaha pr ham username ek dusre function m set karana chah rhe h pr vo hoga hi nhi
    // kyuki jese hi vo dusra function call hoga to uske execution context k bad uski sari values disappear ho jayengi
    // isse ki hamra y print nhi ho payga 
    // is code ki vajha se -> SetUser(username);
    // to ab hame 'call' use karengy with 'this'

    // focus on the screen
    // yaha pr ham 'this' bhi bhej rhe h dusre function m
    // kyuki ye 'this' ham is function k us dusre function m use kr sake
    // aur jab vo function complete ho kr disappear hoga execution context se to jo value 
    // pehle disappear function ho rhi thi vo ab nhi ho paygi kyuki vo value hamne store krli
    // iss function k 'this' m
    // .cal() is use to call the reference of the function 
    
    // Samajh ayaa...
    SetUser.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new CreateUser ('chai','chai@fb.com','1234');
console.log(chai);