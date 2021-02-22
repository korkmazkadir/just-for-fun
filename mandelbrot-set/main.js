

const c = document.getElementById("my-canvas");
const ctx = c.getContext("2d");

const radius = 400;

function drawCircle(){
    ctx.beginPath();
    ctx.arc(402, 402, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawPoint(xPos, yPos, colorCode){
    ctx.beginPath();
    ctx.strokeStyle = colorCode;
    ctx.rect(xPos + 402, yPos+402, 1, 1);
    ctx.stroke();
}

drawCircle();
drawPoint(402,402);


function enumarateComplexPoints(startPoint, zoomLevel, radius){

    // The interasting area for mandelbrod set is within 2 radius of the center
    const boundairy = 2 / zoomLevel;
    const step = boundairy / radius;

    const complexPoints = [];

    const rSquare = boundairy * boundairy;



    var x = -1 * radius;
    for (var i= -1 * boundairy; i < boundairy; i += step){
        var y = -1 * radius;
        for(var j= -1 * boundairy; j < boundairy; j += step){
            if (rSquare >= ((i * i) + (j * j))){
                complexPoints.push({
                    c: math.complex(j + startPoint.x, i + startPoint.y),
                    x: y,
                    y: x
                });
            }
            y++;
        }
        x++;
    }

    return complexPoints;
}


complexPoints = enumarateComplexPoints({x:0, y:0}, 1, radius);
console.log("Number of complex points is %d", complexPoints.length);
console.log(complexPoints[0])


function createWorkers(){
    const workers = [];
    logicalProcessors = window.navigator.hardwareConcurrency;
    for(var i = 0; i < logicalProcessors; i++){
        const worker = new Worker('worker.js');
        worker.addEventListener('message', (event) => {
            const data = event.data;
            data.forEach(element => {
                //if (element.iterationCount == 100){
                    drawPoint(element.x, element.y, setFillColor(element.iterationCount));
                //}
            });
        });
        workers.push(worker);
    }
    return workers;
}

const workers = createWorkers();


function splitWork(workers, points){

    const workerCount = workers.length;
    var workerIndex = 0;

    while(points.length > 0){

        const worker = workers[workerIndex % workerCount]
        const assigned = points.splice(0, 2000);
        console.log("Assigned length: %d", assigned.length);
        worker.postMessage(assigned);
        workerIndex++;

    }

}

splitWork(workers, complexPoints);

//578
const maxColorCode = 16777215;
function setFillColor(number){
    const colorNumber = (( Math.round( number * 10 ) ) + 578) % maxColorCode;
    const colorCode = "#" + colorNumber.toString(16);
    ctx.strokeStyle = colorCode;
}


//workers.forEach((w)=>{ w.postMessage(["Hello World..."]) });
