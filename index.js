function distanceFromHqInBlocks(pickupLocation) {
    numOfBlocks = Math.abs(pickupLocation - 42);

    return numOfBlocks;
}

function distanceFromHqInFeet(pickupLocation) {
    numOfBlocksFt = Math.abs(pickupLocation - 42) * 264;

    return numOfBlocksFt;
}

function distanceTravelledInFeet(start, finish) {
    distTravelledFt = Math.abs(start - finish) * 264;

    return distTravelledFt;
}

function calculatesFarePrice(start, destination) {
    const distTravelledFt = Math.abs(start - destination) * 264;
    let charge = 0;
    if (distTravelledFt <= 400) {
        return 0;

    } else if(distTravelledFt > 400 && distTravelledFt <= 2000) {
        charge = (distTravelledFt - 400) * 0.02;
        return charge;
    } else if(distTravelledFt > 2000 && distTravelledFt < 2500) {
        charge = 25;
        return charge;
    } else {
        return "cannot travel that far"
    }
}

let numOfBlocks = 0;
let numOfBlocksFt = 0;
let distTravelledFt = 0;