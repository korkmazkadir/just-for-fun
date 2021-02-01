
class SimpleView{

    constructor(ctx){
        this.ctx = ctx
    }

    clear(){
        this.ctx.clear()
    }

    drawBitmap(bitmap){
        for(var y = 0; y < bitmap.length; y++){
            var row = bitmap[y]
            for (var x = 0; x < row.length; x++){

                if (row[x]){
                    ctx.fillStyle = 'red';
                }else{
                    ctx.fillStyle = '#d7d7d7';
                }

                ctx.fillRect(x*10, y*10, 9, 9);        
            }
        }
    }

}


