var likeCake = confirm("Do you like cake?");

if (likeCake) {
    var favoriteFlavor = prompt("What is your favorite flavor?");
    alert("Your favorite flavored cake is... " + favoriteFlavor);
} else {
    alert("The cake is a lie anyhow.");
}