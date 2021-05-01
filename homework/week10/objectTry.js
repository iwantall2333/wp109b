class Vector{
    constructor(a){
        this.a=a;
    }           
    add(b){  
        var save=[];       
        for(var i=0;i<this.a.length;i++){
            save[i]=this.a[i]+b.a[i];
        }
        return new Vector(save) 
    }
    neg(){
        var save=[];
        for(var i=0;i<this.a.length;i++) save[i]=-this.a[i];
        return new Vector(save)
    }
    sub(b){
        var save=[];
        for(var i=0;i<this.a.length;i++) save[i]=this.a[i]+b.neg().a[i];
        return new Vector(save)
    }
    dot(b){
        var save=0;
        for(var i=0;i<this.a.length;i++){
            save+=this.a[i]*b.a[i]
        } 
        return save
    }
}
var x = new Vector([1,2,3])
var y = new Vector([1,1,1])
console.log("+:",x.add(y));
console.log("neg",x.neg(y));
console.log("sub",x.sub(y));
console.log("dot",x.dot(y));