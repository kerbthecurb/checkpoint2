const menu = ["rau xào", "thịt luộc", "gà rán"];
localStorage.setItem("menu", menu);
let input = prompt("Input C / R / U /D:")
if ( input == "C"){
    const newItem = prompt("Please enter a new menu item:");
    localStorage.setItem("newItem", newItem);
}

else if ( input == "R" ){
    localStorage.getItem("newItem")
    alert(menu.join(", " ) +  ", " + localStorage.getItem("newItem"));
}

else if ( input == "U"){
    const inputOne = prompt("Please update an item from the menu:")
    menu.splice(menu.indexOf(inputOne));
    const inputReplace = prompt("Please update an item from the menu:")
    localStorage.setItem("replacedItem", inputReplace);
    alert(menu.join(", " ) +  ", " + localStorage.getItem("replacedItem"));
    
    
}


else if ( input == "D"){
    const inputTwo = prompt("Please enter an item to delete");
    menu.splice(menu.indexOf(inputTwo));
    localStorage.setItem("menu", menu);


        

}
