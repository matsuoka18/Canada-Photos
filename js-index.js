function start(){
size = screen.width;
console.log("size:"+size);
if(size < 760){

location.href = "index2.html";
}else{
document.getElementById("setimg").src = "pic/img921.jpg"
}
}

function next1(){
    document.getElementById("all1").style.display = "none";
    document.getElementById("all1").style.opacity = "0";
    document.getElementById("all2").style.display = "block";
    document.getElementById("all2").style.opacity = "1";

}
function test1(){
    document.getElementById("img").src = "pic/img010.jpg";
}

document.getElementById("text").addEventListener('keyup',search);
document.getElementById("text2").addEventListener('keyup',search2);
function search(){
    text = document.getElementById("text").value;
    textlast = String(text).length
    console.log("log:"+textlast);
    if(textlast == 3){
        console.log("search");
    text = "pic/img"+text+".jpg";
    textt = text;
    document.getElementById("img").src = text;
    document.getElementById("down").style.display = "block";
    DownLoad();
    }
}

function search2(){
    text = document.getElementById("text2").value;
    textlast = String(text).length
    if(textlast > 1){
        text2 = 100-text;
        text2 = text2/2;
        text = text+"vw";
        text2 = text2+"vw";
        document.getElementById("img").style.width = text;
        document.getElementById("img").style.marginRight = text2;
        document.getElementById("img").style.marginLeft = text2;
    }

}
function back(){
    document.getElementById("all1").style.display = "block";
    document.getElementById("all1").style.opacity = "1";
    document.getElementById("all2").style.display = "none";
    document.getElementById("all2").style.opacity = "0";
    document.getElementById("down").style.display = "none";
}
function DownLoad(){
    document.getElementById("down2").href = textt;
    document.getElementById("down2").download = textt;
}
num = 0;
function search(){
    num++;
    if(num == 1){
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
  //  document.getElementById("tables").style.display = "block";
   // document.getElementById("tables").style.opacity = "1";
    }else{
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
       document.getElementById("tables").style.opacity = "0";
       num = 0;
    }
}
function people(){
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
     num =1;
    document.getElementById("tables").style.display = "block";
    document.getElementById("tables").style.opacity = "1";
    document.getElementById("search3").style.display = "block";
    document.getElementById("search3").style.opacity = "1";
    document.getElementById("span2").style.borderBottom = "1px solid white";
    document.getElementById("span2").style.paddingRight = "9.6vw";
    document.getElementById("search4").style.display = "none";
    document.getElementById("search4").style.opacity = "0";
    document.getElementById("search5").style.display = "none";
    document.getElementById("search5").style.opacity = "0";
        document.getElementById("span22").style.borderLeft = "0.4vw solid white";
    document.getElementById("span22").style.borderBottom = "0vw solid white";
    document.getElementById("span22").style.paddingRight = "0px";
    document.getElementById("span222").style.borderLeft = "0.4vw solid white";
    document.getElementById("span222").style.borderBottom = "0vw solid white"
    document.getElementById("span222").style.paddingRight = "0px"; 
}
function place(){
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
    num =1;
    document.getElementById("tables").style.display = "block";
    document.getElementById("tables").style.opacity = "1";
    document.getElementById("search3").style.display = "none";
    document.getElementById("search3").style.opacity = "0";
    document.getElementById("search4").style.display = "block";
    document.getElementById("search4").style.opacity = "1";
    document.getElementById("span22").style.borderBottom = "1px solid white";
    document.getElementById("span22").style.paddingRight = "9.6vw";
    document.getElementById("search5").style.display = "none";
    document.getElementById("search5").style.opacity = "0";
    document.getElementById("span2").style.borderLeft = "0.4vw solid white";
    document.getElementById("span2").style.borderBottom = "none";
    document.getElementById("span2").style.paddingRight = "0";
    document.getElementById("span222").style.borderLeft = "0.4vw solid white";
    document.getElementById("span222").style.borderBottom = "none";
    document.getElementById("span222").style.paddingRight = "0";
}
function other(){
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
    num =1;
    document.getElementById("tables").style.display = "block";
    document.getElementById("tables").style.opacity = "1";
    document.getElementById("search3").style.display = "none";
    document.getElementById("search3").style.opacity = "0"
    document.getElementById("search4").style.display = "none";
    document.getElementById("search4").style.opacity = "0";
    document.getElementById("search5").style.display = "block";
    document.getElementById("search5").style.opacity = "1";
    document.getElementById("span222").style.borderBottom = "1px solid white";
    document.getElementById("span222").style.paddingRight = "9.6vw";
    document.getElementById("span2").style.borderLeft = "0.4vw solid white";
    document.getElementById("span2").style.borderBottom = "none";
    document.getElementById("span2").style.paddingRight = "0";
    document.getElementById("span22").style.borderLeft = "0.4vw solid white";
    document.getElementById("span22").style.borderBottom = "none";
    document.getElementById("span22").style.paddingRight = "0";
}