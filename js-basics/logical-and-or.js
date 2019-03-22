let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer veg dishes')
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('offer some veg options')
}
else{
    console.log('Offerup anything in the menu')
}
