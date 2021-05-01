class Vector{
    constructor(a){
        this.a=a;
    }           
    add(b){  
        var save=[];       
        for(var i=0;i<this.a.length;i++){
            save[i]=this.a[i]+b.a[i]; 
    //3.傳入的是整個物件，所以讀得到y的a欄位(b.a[i])       
    //+b[i]不行，b的陣列被存入b.a欄位內，要呼叫傳入b的陣列要到欄位叫
        }
        return new Vector(save) 
    //4.回傳新陣列，此陣列存到(new Vetor(save)).a內(新的this.a)
    }
    neg(){
        var save=[];
        for(var i=0;i<this.a.length;i++) save[i]=-a[i];
        return new Vector(save)
    }
    sub(b){
        var save=[];
        for(var i=0;i<this.a.length;i++) save[i]=this.a[i]+b.neg().a[i];
        //5. b.neg()這個的陣列是存到(b.neg()).a這個欄位內
        return new Vector(save)
    }
}
var x = new Vector([1,2,3])
var y = new Vector([4,5,6])     //1.y的陣列存入y.a欄位
console.log("+:",x.add(y));     //2.y這整個物件傳進去x，以b傳進去
//0.課題:只用一個物件動作?