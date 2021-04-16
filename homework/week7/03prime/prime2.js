function prime(n){
    for(var i=2;i<=n/2;i++){
        if(n%i==0) return 0;
    }
    if(n!=1) return n; 
}
function primeBetween(a,b){
    for(var i=a;i<b+1;i++) if(prime(i)) console.log(prime(i))
}
primeBetween(1,100)