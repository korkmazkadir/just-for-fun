console.log("Hello World");

const FULL = true;
const EMPTY = false;

class Cell{

    constructor(xPos, yPos, universe){
        this.xPos = xPos;
        this.yPos = yPos;
        // the cellular automata which this cell belongs to
        this.universe = universe

        this.state = EMPTY
        this.nextState = EMPTY
    }

    updateState(){
        this.state = this.nextState
    }

    state(){
        return this.state
    }

    setState(newState){
        this.state = newState
    }

    neighbour(xPos, yPos){
        // Negihbours are calculated relative to the current cell's position
        return this.universe.cell(xPos + this.xPos, yPos + this.yPos)
    }

    // return all neighbours of the current cell
    neighbours(){
        var neighbours = []
        neighbours.push(this.neighbour(0,1))
        //neighbours.push(this.neighbour(1,1))
        neighbours.push(this.neighbour(1,0))
        //neighbours.push(this.neighbour(1,-1))
        neighbours.push(this.neighbour(0,-1))
        //neighbours.push(this.neighbour(-1,-1))
        neighbours.push(this.neighbour(-1,0))
        //neighbours.push(this.neighbour(-1,1))
        return neighbours
    }

    printInfo(){
        console.log("position: (" + this.xPos +","+ this.yPos + ") State: " + (this.state ? "FULL" : "EMPTY") + " Next State: " + (this.nextState ? "FULL" : "EMPTY"))
    }

    countNeighbours(){
        var fullNeighbourCount = 0;
        var emptyNeighbourCount = 0;
        this.neighbours().forEach(c => {
            c.state == FULL ? fullNeighbourCount++ : emptyNeighbourCount++;
        });

        return {
            emptyCount : emptyNeighbourCount,
            fullCount: fullNeighbourCount
        }
    }

    calculateNextState(){
        var counts = this.countNeighbours();
        if (counts.fullCount == 1) {
            this.nextState = FULL
            return
        }


        this.nextState = EMPTY
        //this.nextState = this.state
    }
    
}



class CellularAutomata {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = []

        for(var y = 0; y < height; y++){
            var row = [];
            for (var x = 0; x < width; x++){
                row.push(new Cell(x,y, this))
            }
            this.cells.push(row)
        }
    }

    cell(xPos, yPos){
        var x = xPos % this.width;
        var y = yPos % this.height;

        if (x < 0){
            x = x + this.width
        }

        if (y < 0){
            y = y + this.height
        }


        return this.cells[y][x]
    }

    calculateNextState(){
        for(var y = 0; y < this.height; y++){
            for (var x = 0; x < this.width; x++){
                this.cells[y][x].calculateNextState()
            }
        }
    }


    updateState(){
        for(var y = 0; y < this.height; y++){
            for (var x = 0; x < this.width; x++){
                this.cells[y][x].updateState()
            }
        }
    }

    getBitmap(){
        var bitmap = []
        for(var y = 0; y < this.height; y++){
            var row = []
            for (var x = 0; x < this.width; x++){
                var cell = this.cells[y][x]
                row.push(cell.state)
            }
            bitmap.push(row)
        }
        return bitmap
    }

}

