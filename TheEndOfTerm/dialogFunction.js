/*左側函式*/
function choosingSet(){
    for(var i=0;i<8;i++){ 
        if(chatRoom[i]!=""){       //所有存在的區塊都要設!
            girlId="girl"+i         /*這裡如果設select=i，select值會卡在<div id=girl>的數量，跑完for迴圈不會變成0 */
            var removei="remove"+i
            document.getElementById(girlId).onclick=gB[i]
            document.getElementById(removei).onclick=remove[i]  //設remoeve按鈕          
        }
    }
}      
/*新增*/
function addF(){
    sendOut.onclick = sendOutF
    var x = 0
    for(var ck=0;ck<8;ck++){    //從空的新增到一個時要自動跳到為一一個的聊天室窗
        if(chatRoom[ck]!="") break
        else select=0;
        showH.innerText=name0[select]
    }
    for(var i=0;i<8;i++){
        if(chatRoom[i]==""){
            /*新增左側與女孩選框 */
            chatRoom[i]=" "
            chooseGirls.innerHTML+='<button id="remove'+i+'">X</button><div id="girl'+i+'" class="girl"></div>'

            girlId="girl"+i
            document.getElementById(girlId).innerText=name0[i]

            choosingSet();
            document.getElementById("add").onclick=addF  //.onclick要重設， 是因為addF裡面的內容被更動嗎?到底為甚麼ㄚ...
            x=1        
            break
        }
    }
    if(x==0) alert("人數已滿八人")
}
/*移除需要的函式*/
function alertF(){alert("不可以跟空氣聊天，請添加女孩或選擇對象")}
function switchF(){
    var x = 0
    for(var i=0;i<8;i++){
        if(chatRoom[i]!=""){
            showDialog.innerHTML=chatRoom[i]
            select=i
            showH.innerText=name0[select]
            x=1
            break
        }
    }
    if(x==0){      //甚麼人也沒有
        showDialog.innerHTML="<p><p>"
        showH.innerText="沒有人想跟你聊天QQ，點擊加號給自己創個朋友吧"
        sendOut.onclick=alertF
    } 
}

/*女方*/
function girlTalk(){
    /*新增對話框*/
    var y =document.createElement('div')/*為了換行，填滿橫軸 */
    showDialog.appendChild(y)
    var x = document.createElement('div')
    y.appendChild(x) 
    x.style.float="left"
    /*隨機對話*/
    var z=Math.floor(Math.random()*6)    
    if(flag==1){
        x.innerText = girlTalk2[z]   
        flag++
    }
    else if(flag==2){
        x.innerText = girlTalk3[z] 
        flag++
    }
    else if(flag==3){
        var a=Math.floor(Math.random()*3)
        x.innerText = girlTalkAll[a][z]
    }
    else{
        x.innerText = girlTalkStart[z]     
        flag=1
    }

    /*顯示底部最新訊息*/
    showDialog.scrollTop=showDialog.scrollHeight
    /*女方一說話，男方句數重算*/
    sentenceNumber=0;
    /*產生亂數*/
    randSentence = Math.floor(Math.random()*2+1) //取1~2
    randTime=Math.floor(Math.random()*2000+1000)
    /*存取內容 */
    chatRoom[select]=showDialog.innerHTML
    /*隨機新增女生*/
    var g=Math.floor(Math.random()*3)//0~2
    if(g==2){
        if(confirm("又有個女生想認識你，是否接受?")){
            addF();
        }
    }
}
/*男方*/
function sendOutF(){
    if(inputFrame.value!="") /*不能不輸入東西。不懂為何要放在函式內才有用..*/
    {/*新增對話框*/
        /*新增一個區塊，寬度填滿，高度同訊框高度*/
        var y =document.createElement('div')
        showDialog.appendChild(y)
        var x = document.createElement('div')
        y.appendChild(x) /*使每一句話都能換行，無論左邊的對話框或右邊的要接著 */

        x.innerText = inputFrame.value /*要在執行函式時抓當下的輸入內容*/
        inputFrame.value=""
        /*男方於右邊顯示*/
        x.style.textAlign="right"
        x.style.float="right"
        /*顯示底部最新訊息*/
        showDialog.scrollTop=showDialog.scrollHeight
        /*數男方在女方說話後有幾句話*/ 
        sentenceNumber+=1;
        
        if(flag==0){                                    //剛進入對話框需要先產生亂數一次
            randSentence = 1
            randTime=Math.floor(Math.random()*3000+200)
        }
        /*存取 */
        chatRoom[select]=showDialog.innerHTML        
        /*男方每說隨機句數女方就接一句 */
        if(sentenceNumber==randSentence) setTimeout(girlTalk,randTime) ;

    }
}


