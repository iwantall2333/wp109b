## 習題01 請寫一個程式可以印出指定數量的 * 號
程式碼
```
function star(n){
    for(var i=0;i<n;i++) console.log("*")
}
star(5)
```
執行結果
```
D:\課程\網頁設計\wp109b\homework\week7\01star>deno run star.js
*
*
*
*
*
```
## 習題02 請寫一個函數可以印出 a..b 之間的所有整數
程式碼
```
function between(a,b){
    for(var i=a;i<b+1;i++) console.log(i)
}
between(3,6)
```
執行結果
```
D:\課程\網頁設計\wp109b\homework\week7\02number>deno run number.js
3
4
5
6
```
## 習題03 請寫一個函數 primeBetween(a,b) 可以印出 a..b 之間的質數
程式碼1
```
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
```
程式碼2
```
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
```
執行結果
```
D:\課程\網頁設計\wp109b\homework\week7\03prime>deno run prime.js
2
3 
5 
7 
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
D:\課程\網頁設計\wp109b\homework\week7\03prime>deno run prime2.js
2
3 
5 
7 
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
```
