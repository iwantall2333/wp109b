var count=0;
/*抓 */
var MiddleDiv=document.getElementById("Middle")
var leftOn=document.getElementById("left")
var rightOn=document.getElementById("right")
/*active */
document.getElementById("Right").onclick=clickRight
document.getElementById("Left").onclick=clickLeft
leftOn.onmouseover=lefthover //左欄
leftOn.onmouseleave=ret
leftOn.onmousedown=leftNext
rightOn.onmouseover=righthover //右欄
rightOn.onmouseleave=ret
rightOn.onmousedown=rightNext
/*Function */
function ssshow(){document.getElementById("block").style.display='block'}
function hhhide(){document.getElementById("block").style.display='none'}

//count
function clickRightCount(){
    if(count==3) count=0;
    else count++;
}
function clickLeftCount(){
    if(count==0) count=3;
    else count--;
}
function change(){
    if(count==0) MiddleDiv.innerHTML=inHTML.content0
    if(count==1) MiddleDiv.innerHTML=inHTML.content1
    if(count==2) MiddleDiv.innerHTML=inHTML.content2
    if(count==3) MiddleDiv.innerHTML=inHTML.content3
}
/*左右 */
function clickRight(){
    clickRightCount();
    change();
}
function clickLeft(){
    clickLeftCount();
    change();
}
function lefthover(){
    if(count==0) leftOn.innerText="程式設計原理"       
    if(count==1) leftOn.innerText="網站介紹"       
    if(count==2) leftOn.innerText="應用:假裝有朋友"       
    if(count==3) leftOn.innerText="筆記與其他練習"       
}
function righthover(){
    if(count==0) rightOn.innerText="應用:假裝有朋友"  
    if(count==1) rightOn.innerText="筆記與其他練習"       
    if(count==2) rightOn.innerText="程式設計原理" 
    if(count==3) rightOn.innerText="網站介紹"    
}
function rightNext(){
    if(count==3) rightOn.innerText="應用:假裝有朋友" 
    if(count==0) rightOn.innerText="筆記與其他練習"       
    if(count==1) rightOn.innerText="程式設計原理" 
    if(count==2) rightOn.innerText="網站介紹"    
}
function leftNext(){
    if(count==1) leftOn.innerText="程式設計原理"       
    if(count==2) leftOn.innerText="網站介紹"       
    if(count==3) leftOn.innerText="應用:假裝有朋友" 
    if(count==0) leftOn.innerText="筆記與其他練習"       
}
function ret(){
    leftOn.innerText="〈" 
    rightOn.innerText="〉" 
}