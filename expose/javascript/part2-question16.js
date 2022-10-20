let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blaclCars: 40,
    rareCars: 2,
};

for( var i in statistics){
    if( i[0] == 'r'){
        console.log(statistics[i]);
    }
    else if(statistics[i] % 2 == 1){
        console.log(statistics[i]);
    }
}
