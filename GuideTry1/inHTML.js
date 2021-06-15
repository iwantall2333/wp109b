var inHTML={}

inHTML.content0=`
<div id="middle">
<div>
    <p class="title" style="color:rgb(218, 218, 201);"><b>網站介紹</b></p>
    <div class="content1">
        <p>點擊網頁左右以切換頁面</p>
        <p>網站內容簡介:</p>
        <p style="border: linen 0.5px solid;">實作對話框(很推薦!)</p>
        <p style="border: linen 0.5px solid;">筆記(最推薦!)與其他練習</p>
        <p>期末程式報告</p>
    </div>
</div>
</div> 
`
inHTML.content1=`
<div class="left">
<p class="title">實作:對話框</p>
<div id="show" onclick="ssshow();" class="content0">
    <p>
        點擊顯示<b>思考過程</b><br/>(全部純手工)
    </p>
    <a href="https://iwantall2333.github.io/wp109b/TheEndOfTerm/dialog.html"  target="_blank" style="text-align: center;">應用網址</a>                
</div>                
</div>
<pre id="block" style="font-size: 15px;">
<button id="hideButton" onclick="hhhide();" style="cursor: pointer;font-size: 10px;background-color: rgba(255, 203, 246, 0.938);float: right;">X</button>
1.試著往下增加空的對話框
2.輸入值放入對話框
3.輸入設置
    A.連續不空格字母，一定長度後訊框要自動換行(overflow-wrap: break-word;)
    B.輸入框要能提供使用者換行 (只能textarea)
    C.訊框在右邊(float:right;)，文字也靠右(textAlign)
    D.畫面都會在最底下(一直都會看到最新訊息出現)(div.scrollTop = div.scrollHeight;)
4.機器人回復
    A.使用者每說一句對方就說話
    B.做到雙方的每一句都會換行(overflow:auto;width:100%)(訊框外，再包一個框框)
    C.機器人訊息在隨機訊息數後顯示(rand = Math.floor(Math.random()*3))，
    隨機時間後跳出(setTimeout)
    D.設句庫(每個人的句庫都一樣)
5.多人聊天
    A.點擊多個按鈕切換顯示對話框
        i.點擊不同按鈕會切換對象(onload時設置.onclick改innerHTML)
        ii.有聊天紀錄，不會消失(聊天內容會隨時存到到陣列(以.innerHTML儲存))
    B.新增人 
        i.點擊後一個一個增加div(.innerHTML+="")，div有特定id
    C.移除人 (.removeChild(id名稱))
        i.移除當下聊天的人，要自動選擇別人(當有女孩存在時)，沒人時不能送出訊息
        ii.從沒有人到新增一個時，要預設選擇唯一的那個人
6.隨機邀約 : confirm(“”)回傳true觸發新增按鈕
7.顯示目前對話者的名字
8.排版，音樂，icon</pre>        
<iframe src="https://iwantall2333.github.io/wp109b/TheEndOfTerm/dialog.html"  frameborder="1" scrolling="no">
<a href="https://iwantall2333.github.io/wp109b/TheEndOfTerm/dialog.html" target="_self">在框架內開啟</a>
</iframe> 
`
inHTML.content2=`
<div id="middle">
<div>
    <p class="title"  style="color:linen"><b>筆記</b>與其他練習</p>
    <p class="content0" style="text-align: center;">
        <a href="https://drive.google.com/drive/folders/1qwM0kVmiyvXmqqgoBlhRD4GG4wcAaswG?usp=sharing"  target="_blank" style="color: yellow;font-size: 50px;">觀看筆記</a>
        <br/>
        <br/>
        <a href="https://github.com/iwantall2333/wp109b/commit/ba5b60b17e014f93464acd1e390123259c1c076c"  target="_blank"><b style="color:linen" >額外</b>練習:JS回文判斷</a> 
        <br/>
        <br/>
        <a href="https://iwantall2333.github.io/wp109b/week4/SelfIntroduction.html"  target="_blank">個人網站(2021/4/1更新)</a>                   
    </p>
</div>
</div> 
`
inHTML.content3=`
<div id="square"style="overflow: auto;">
<div>
    <p class="title">期末程式報告</p>
    <pre class="content0">
前言:

    鑒於同學們防疫在家會很寂寞，於是我做了個答非所問的聊天機器人

    未來可以抓取使用者輸入的關鍵字，讓機器人做更符合人性化的回應


    從零到有全部自己寫的，有些不會的語法會參考自己的筆記或網站，

    參考的網站會在文末附上超連結與說明文字

本文:

    入口網站以簡潔為目的去做，所以我

        1.先把網頁分成1:8:1的比例，左右點擊可以切換內容，符合人性直覺

        2.色調偏灰色，這樣就不會刺眼

        3.設計切換內容:把HTML原始碼存在物件內，並用旗標來確定要顯是哪個原始碼

    網頁共分成四個部分

        1.首頁，簡述本網站內容

        2.網頁設計應用 : 聊天室

    聊天室應用是我網站重點，功能有:

        A.刪除與新增朋友

        B.儲存你與對方的聊天紀錄

            (這個是我花最多心力的地方，

            把很多邏輯不斷更正(例如顯示錯誤或失效))

        C.切換聊天對象(這跟B點會一起思考)

        D.撥放音樂(我挑很久的歌，當時研究CC授權一段時間)

3.自己的筆記(要點開網址)+幾題簡單的練習

    我的筆記不是以周去寫，而是把語法都整理分類，方便日後查閱

4.本頁，也就是程式設計報告

參考資料:
自己的筆記:<a href="https://drive.google.com/drive/folders/1qwM0kVmiyvXmqqgoBlhRD4GG4wcAaswG?usp=sharing">https://drive.google.com/drive/folders/1qwM0kVmiyvXmqqgoBlhRD4GG4wcAaswG?usp=sharing</a>
icon:<a href="https://www.webdesigns.com.tw/webdesign_favicon.asp">https://www.webdesigns.com.tw/webdesign_favicon.asp</a>
iframe網頁內顯示網頁:<a href="https://www.wibibi.com/info.php?tid=374">https://www.wibibi.com/info.php?tid=374</a>
ccmixter(音檔來源):<a href="http://ccmixter.org/">http://ccmixter.org/</a>  



</pre>

`