const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var width = 185
var heigth = 105

var view = new SimpleView(ctx)

ca = new CellularAutomata(width,heigth);

//ca.cell(Math.floor(width/2),Math.floor(heigth/2)).setState(FULL);

ca.cell(Math.floor(width/2)-1,Math.floor(heigth/2)).setState(FULL);
ca.cell(Math.floor(width/2)+1,Math.floor(heigth/2)).setState(FULL);

ca.cell(getRandomInt(width),getRandomInt(heigth)).setState(FULL);

//ca.cell(getRandomInt(width),getRandomInt(heigth)).setState(FULL);

bitmap = ca.getBitmap()

view.drawBitmap(bitmap)

round = 0
inertval = setInterval(function(){
    //var img    = canvas.toDataURL("image/png");
    //document.write('<img src="'+img+'"/>');
    ca.calculateNextState();
    ca.updateState();
    bitmap = ca.getBitmap();

    if (stop(bitmap)){
        clearInterval(inertval)
        alert("Number of rounds is " + round)
        return
    }

    view.drawBitmap(bitmap)
    round++

}, 100);


function stop(bitmap){
    for(var y = 0; y < bitmap.length; y++){
        var row = bitmap[y]
        for (var x = 0; x < row.length; x++){
            if (row[x]){
                return false
            }       
        }
    }

    return true
}




