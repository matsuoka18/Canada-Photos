function start(){
    document.getElementById("setimg").src = "pic/Img999.JPG";
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