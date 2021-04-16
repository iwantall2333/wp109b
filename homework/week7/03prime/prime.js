function primeBetween(a,b){
    for(var i=a;i<b+1;i++){
        var flag=0
        if(i==1) flag=1
        for(var j=2;j<=i/2;j++){
            if(i%j==0){
            flag=1
            break;                
            }
        }
        if(flag==0) console.log(i)
    }
}
primeBetween(1,100)