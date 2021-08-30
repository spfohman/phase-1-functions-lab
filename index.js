// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let distance = street - 42;
    return Math.abs(distance);
}
function distanceFromHqInFeet(street){
    let distance = distanceFromHqInBlocks(street);
    return feet = distance * 264;
}
function distanceTravelledInFeet(start, destination){
    let distance = (destination - start)*264;
    return Math.abs(distance);
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance<400){
        return price = 0;
    }else if (distance >=400 && distance<= 2000){
        return price = (distance - 400) * .02;
    }else if (distance >2000 && distance <=2500){
        return price = 25;
    }else if (distance >2500){
        return 'cannot travel that far';
    }
}