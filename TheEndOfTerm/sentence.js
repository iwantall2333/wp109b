/*這裡放廣域變數*/ 
var test //測試用
var startLoad =1 //是第一次載入
var sentenceNumber=0
var randSentence
var randTime
var flag=0 
var select=0  //切換女生
/*8個聊天室內容 */
var chatRoom=[" ","","","","","","",""]   
//存在的:" "，有內容的:"會不只是空白"，不存在的:""
//只有把第一個刪掉時才又會chatRoom[0]=""
/*8個女孩選框的動作，函式存入陣列*/
var gB=[]
gB[0]=function selectF(){showDialog.innerHTML=chatRoom[0];select=0;showH.innerText=name0[select]}
gB[1]=function selectF(){showDialog.innerHTML=chatRoom[1];select=1;showH.innerText=name0[select]}
gB[2]=function selectF(){showDialog.innerHTML=chatRoom[2];select=2;showH.innerText=name0[select]}
gB[3]=function selectF(){showDialog.innerHTML=chatRoom[3];select=3;showH.innerText=name0[select]}
gB[4]=function selectF(){showDialog.innerHTML=chatRoom[4];select=4;showH.innerText=name0[select]}
gB[5]=function selectF(){showDialog.innerHTML=chatRoom[5];select=5;showH.innerText=name0[select]}
gB[6]=function selectF(){showDialog.innerHTML=chatRoom[6];select=6;showH.innerText=name0[select]}
gB[7]=function selectF(){showDialog.innerHTML=chatRoom[7];select=7;showH.innerText=name0[select]}
/*移除*/
var remove=[]
remove[0]=function removeF(){chatRoom[0]="";chooseGirls.removeChild(remove0);chooseGirls.removeChild(girl0);switchF();}
remove[1]=function removeF(){chatRoom[1]="";chooseGirls.removeChild(remove1);chooseGirls.removeChild(girl1);switchF();}
remove[2]=function removeF(){chatRoom[2]="";chooseGirls.removeChild(remove2);chooseGirls.removeChild(girl2);switchF();}
remove[3]=function removeF(){chatRoom[3]="";chooseGirls.removeChild(remove3);chooseGirls.removeChild(girl3);switchF();}
remove[4]=function removeF(){chatRoom[4]="";chooseGirls.removeChild(remove4);chooseGirls.removeChild(girl4);switchF();}
remove[5]=function removeF(){chatRoom[5]="";chooseGirls.removeChild(remove5);chooseGirls.removeChild(girl5);switchF();}
remove[6]=function removeF(){chatRoom[6]="";chooseGirls.removeChild(remove6);chooseGirls.removeChild(girl6);switchF();}
remove[7]=function removeF(){chatRoom[7]="";chooseGirls.removeChild(remove7);chooseGirls.removeChild(girl7);switchF();}

/*女句物件 */
var girlTalkStart=["嗨","帥哥~","安安幾歲住哪多高?","你好","安~","你今天讚美了嗎"]
var girlTalk2=["你好帥呀","今天過得如何","祝逢考必過","教授我需要那個分數","...","我想想","等我一下"]
var girlTalk3=["我跟你說，我今天一整天都在看書","我想想","學期末了還敢玩啊?","去台南吃粽子","我想睡覺","哈哈哈"]
var girlTalkAll=[
["恩~","是喔~","你人真好","想學投資嗎?我教你","逢考必過!","加油喔"],
["可以幫我祈禱讓我賺到一千萬嗎","banana you a guava","我甚麼時候才能回台灣","金門沒有麥當勞","萊爾富甚麼時候進貨?","虛空無盡!"],
["感受痛苦吧!","神羅天征!!!","我爸李嘉誠","你好香阿~","沒有砲彈還繼續做菜刀阿金門?","情人節就是一個沒有意義的節日"]
]
/*名稱 */
var name0=["孤單寂寞","丹丹","申申","狗狗","寶貝甜新","艾莉絲","貝貝","<3"]