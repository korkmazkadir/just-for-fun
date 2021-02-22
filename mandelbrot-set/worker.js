

const maxIterationCount = 100;

onmessage = function(e) {
    importScripts('math.min.js');
    //console.log('Message received from main script');
    const complexPoints = e.data;

    const results = [];
    complexPoints.forEach(c => {
        const r = calculate(c);
        results.push(r);
    });
    self.postMessage(results);

}

function calculate(complexPoint){

    complexPoint.iterationCount = maxIterationCount;

    var z = math.complex(0, 0);
    const c = complexPoint.c;
    const previousValues = {};

    for(var i = 0; i < maxIterationCount; i++){
        z = f(z, c);
        
        const str = z.toString();
        if (previousValues[str] == undefined){
            previousValues[str] = 1;
        }else{
            complexPoint.iterationCount = i;
            break;
        }
    }

    return complexPoint;
}

function f(z, c){
    const zSquare = math.multiply(z, z);
    return math.complex( zSquare.re + c.re ,  zSquare.im + c.im ); 
}