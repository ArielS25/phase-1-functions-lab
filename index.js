// Code your solution in this file!
function distanceFromHqInBlocks(street){
if (street >= 42){
    return street - 42;
}
return 42 - street;
}
function distanceFromHqInFeet(street) {
   return distanceFromHqInBlocks(street) * 264 ;

}
function distanceTravelledInFeet(start ,stop ){
    if (stop >= start){
        return (stop - start)* 264;
    }
    return (start - stop)* 264;
}
function calculatesFarePrice(start, stop){
   let feet = distanceTravelledInFeet(start, stop);
    if (feet < 400){
        return 0;
    }
    else if (feet < 2000){
        return (feet - 400) * .02; 
    }
    else if (feet < 2500){
        return 25;
    }
    else return 'cannot travel that far';
}
calculatesFarePrice(43, 44);