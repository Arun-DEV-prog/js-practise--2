function Box(heigth,width){
     this.heigth=heigth;
     this.width=width;
}

function Widget(heigth,width,color){
     Box.call(this,heigth,width);
     this.color=color;
}

let widget= new Widget('red',100,200);
console.log(widget);