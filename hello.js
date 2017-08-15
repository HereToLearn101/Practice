function sayHello(myName) {
    if (myName == 'Mr. Grinch') {
        alert("You're a mean one " + myName);
    } else {
        alert("Hi " + myName);
    }
}

sayHello(prompt("What is your name?"));