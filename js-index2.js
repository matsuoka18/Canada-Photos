function start() {
    document.getElementById("setimg").src = "pic/Img999.JPG";
    for(var a =0; a<=135; a++){
        data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
        pics22p.insertAdjacentHTML('beforeend', data);
    }
}

function next1() {
    document.getElementById("all1").style.display = "none";
    document.getElementById("all1").style.opacity = "0";
    document.getElementById("all2").style.display = "block";
    document.getElementById("all2").style.opacity = "1";

}
function test1() {
    document.getElementById("img").src = "pic/img010.jpg";
}

document.getElementById("text").addEventListener('keyup', search);
document.getElementById("text2").addEventListener('keyup', search2);
function search() {
    text = document.getElementById("text").value;
    textlast = String(text).length
    console.log("log:" + textlast);
    if (textlast == 3) {
        console.log("search");
        text = "pic/img" + text + ".jpg";
        textt = text;
        document.getElementById("img").src = text;
        document.getElementById("down").style.display = "block";
        DownLoad();
    }
}

function search2() {
    text = document.getElementById("text2").value;
    textlast = String(text).length
    if (textlast > 1) {
        text2 = 100 - text;
        text2 = text2 / 2;
        text = text + "vw";
        text2 = text2 + "vw";
        document.getElementById("img").style.width = text;
        document.getElementById("img").style.marginRight = text2;
        document.getElementById("img").style.marginLeft = text2;
    }

}
function back() {
    document.getElementById("all1").style.display = "block";
    document.getElementById("all1").style.opacity = "1";
    document.getElementById("all2").style.display = "none";
    document.getElementById("all2").style.opacity = "0";
    document.getElementById("down").style.display = "none";
}
function DownLoad() {
    document.getElementById("down2").href = textt;
    document.getElementById("down2").download = textt;
}
num = 0;
function search3() {
    num++;
    if (num == 1) {
        document.getElementById("search2").style.display = "block";
        document.getElementById("search2").style.opacity = "1";
        //  document.getElementById("tables").style.display = "block";
        // document.getElementById("tables").style.opacity = "1";
    } else {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        num = 0;
    }
}
message = '';
function people() {
    message = "people";
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
    num = 1;
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
function place() {
    message = "place";
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
    num = 1;
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
function other() {
    message = "other";
    document.getElementById("search2").style.display = "block";
    document.getElementById("search2").style.opacity = "1";
    num = 1;
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
function del(){
document.getElementById("ims0").remove();
document.getElementById("ims1").remove();
document.getElementById("ims2").remove();
document.getElementById("ims3").remove();
document.getElementById("ims4").remove();
document.getElementById("ims5").remove();
document.getElementById("ims6").remove();
document.getElementById("ims7").remove();
document.getElementById("ims8").remove();
document.getElementById("ims9").remove();
document.getElementById("ims10").remove();
document.getElementById("ims11").remove();
document.getElementById("ims12").remove();
document.getElementById("ims13").remove();
document.getElementById("ims14").remove();
document.getElementById("ims15").remove();
document.getElementById("ims16").remove();
document.getElementById("ims17").remove();
document.getElementById("ims18").remove();
document.getElementById("ims19").remove();
document.getElementById("ims20").remove();
document.getElementById("ims21").remove();
document.getElementById("ims22").remove();
document.getElementById("ims23").remove();
document.getElementById("ims24").remove();
document.getElementById("ims25").remove();
document.getElementById("ims26").remove();
document.getElementById("ims27").remove();
document.getElementById("ims28").remove();
document.getElementById("ims29").remove();
document.getElementById("ims30").remove();
document.getElementById("ims31").remove();
document.getElementById("ims32").remove();
document.getElementById("ims33").remove();
document.getElementById("ims34").remove();
document.getElementById("ims35").remove();
document.getElementById("ims36").remove();
document.getElementById("ims37").remove();
document.getElementById("ims38").remove();
document.getElementById("ims39").remove();
document.getElementById("ims40").remove();
document.getElementById("ims41").remove();
document.getElementById("ims42").remove();
document.getElementById("ims43").remove();
document.getElementById("ims44").remove();
document.getElementById("ims45").remove();
document.getElementById("ims46").remove();
document.getElementById("ims47").remove();
document.getElementById("ims48").remove();
document.getElementById("ims49").remove();
document.getElementById("ims50").remove();
document.getElementById("ims51").remove();
document.getElementById("ims52").remove();
document.getElementById("ims53").remove();
document.getElementById("ims54").remove();
document.getElementById("ims55").remove();
document.getElementById("ims56").remove();
document.getElementById("ims57").remove();
document.getElementById("ims58").remove();
document.getElementById("ims59").remove();
document.getElementById("ims60").remove();
document.getElementById("ims61").remove();
document.getElementById("ims62").remove();
document.getElementById("ims63").remove();
document.getElementById("ims64").remove();
document.getElementById("ims65").remove();
document.getElementById("ims66").remove();
document.getElementById("ims67").remove();
document.getElementById("ims68").remove();
document.getElementById("ims69").remove();
document.getElementById("ims70").remove();
document.getElementById("ims71").remove();
document.getElementById("ims72").remove();
document.getElementById("ims73").remove();
document.getElementById("ims74").remove();
document.getElementById("ims75").remove();
document.getElementById("ims76").remove();
document.getElementById("ims77").remove();
document.getElementById("ims78").remove();
document.getElementById("ims79").remove();
document.getElementById("ims80").remove();
document.getElementById("ims81").remove();
document.getElementById("ims82").remove();
document.getElementById("ims83").remove();
document.getElementById("ims84").remove();
document.getElementById("ims85").remove();
document.getElementById("ims86").remove();
document.getElementById("ims87").remove();
document.getElementById("ims88").remove();
document.getElementById("ims89").remove();
document.getElementById("ims90").remove();
document.getElementById("ims91").remove();
document.getElementById("ims92").remove();
document.getElementById("ims93").remove();
document.getElementById("ims94").remove();
document.getElementById("ims95").remove();
document.getElementById("ims96").remove();
document.getElementById("ims97").remove();
document.getElementById("ims98").remove();
document.getElementById("ims99").remove();
document.getElementById("ims100").remove();
document.getElementById("ims101").remove();
document.getElementById("ims102").remove();
document.getElementById("ims103").remove();
document.getElementById("ims104").remove();
document.getElementById("ims105").remove();
document.getElementById("ims106").remove();
document.getElementById("ims107").remove();
document.getElementById("ims108").remove();
document.getElementById("ims109").remove();
document.getElementById("ims110").remove();
document.getElementById("ims111").remove();
document.getElementById("ims112").remove();
document.getElementById("ims113").remove();
document.getElementById("ims114").remove();
document.getElementById("ims115").remove();
document.getElementById("ims116").remove();
document.getElementById("ims117").remove();
document.getElementById("ims118").remove();
document.getElementById("ims119").remove();
document.getElementById("ims120").remove();
document.getElementById("ims121").remove();
document.getElementById("ims122").remove();
document.getElementById("ims123").remove();
document.getElementById("ims124").remove();
document.getElementById("ims125").remove();
document.getElementById("ims126").remove();
document.getElementById("ims127").remove();
document.getElementById("ims128").remove();
document.getElementById("ims129").remove();
document.getElementById("ims130").remove();
document.getElementById("ims131").remove();
document.getElementById("ims132").remove();
document.getElementById("ims133").remove();
document.getElementById("ims134").remove();
document.getElementById("ims135").remove();
}
    function p1() {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Aaron";
        dataa = [19, 396, 716, 727, 753, 768, 782, 802, 850, 857, 864, 870, 941];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "House";
        dataa = [132,
            216,
            247,
            285,
            299,
            341,
            402,
            418,
            447,
            449,
            450,
            458,
            459,
            460,
            461,
            462,
            600,
            668,
            697,
            718,
            734,
            749,
            754,
            785,
            787,
            858,
            868,
            883,
            890,
            897,
            901,
            917,
            949,
            960,
            963,
            978,
            983];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        data = [];
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p2() {
    del();
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Ao";
        dataa = [2, 4, 7, 9, 13, 5, 19,
            29,
            33,
            53,
            59,
            63,
            68,
            74,
            80,
            93,
            94,
            95,
            105,
            114,
            116,
            123,
            124,
            127,
            133,
            137,
            138,
            154,
            157,
            158,
            159,
            162,
            163,
            170,
            196,
            197,
            200,
            202,
            209,
            228,
            234,
            238,
            252,
            255,
            259,
            266,
            268,
            270,
            274,
            283,
            295,
            310,
            313,
            314,
            327,
            349,
            350,
            352,
            354,
            355,
            356,
            379,
            381,
            416,
            427,
            429,
            431,
            493,
            587,
            598,
            608,
            609,
            611,
            635,
            643,
            650,
            654,
            664,
            677,
            685,
            688,
            691,
            694,
            701,
            737,
            741,
            744,
            770,
            781,
            803,
            808,
            823,
            830,
            871,
            884,
            888,
            893,
            898,
            899,
            902,
            905,
            906,
            911,
            923,
            929,
            942,
            945,
            946,
            948,
            950,
            952,
            956,
            957,
            958, 962, 965, 969, 977, 980];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "GHS";
        dataa = [87, 469, 470, 471, 475, 476, 477, 481, 482, 483, 484, 485, 486, 487];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
 
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Cycling";
        dataa = [119, 362, 674, 924, 949];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    }
}
function p3() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Aoto";
        dataa = [19,
            55,
            74,
            105,
            108,
            114,
            116,
            143,
            150,
            157,
            163,
            170,
            180,
            192,
            252,
            268,
            275,
            286,
            300,
            348,
            365,
            380,
            427,
            428,
            493,
            497,
            498,
            592,
            632,
            661,
            676,
            677,
            721,
            750,
            775,
            782,
            800,
            801,
            951];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Science .M";
        dataa = [540, 541, 542, 543, 544, 545, 546, 547];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Cats and Dogs";
        dataa = [23,
            52,
            73,
            101,
            112,
            134,
            140,
            149,
            171,
            187,
            189,
            194,
            195,
            215,
            233,
            261,
            280,
            301,
            317,
            318,
            391,
            443,
            444,
            448,
            450,
            508,
            509,
            510,
            523,
            524,
            525,
            534,
            535,
            536,
            537,
            538,
            539,
            548,
            549,
            550,
            551,
            552,
            553,
            554,
            555,
            556,
            557,
            558,
            559,
            560,
            561,
            562,
            563,
            591,
            624,
            671,
            675,
            681,
            736,
            811,
            834,
            854,
            872,
            908,
            919,
            953,
            955];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    }
}
function p4() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Brandon";
        dataa = [3,
            36,
            59,
            65,
            74,
            80,
            88,
            89,
            117,
            163,
            170,
            186,
            190,
            196,
            230,
            234,
            235,
            252,
            268,
            293,
            294,
            309,
            311,
            335,
            373,
            410,
            413,
            482,
            603,
            610,
            628,
            654,
            715,
            744,
            808,
            831,
            879,
            928,
            931];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "History .M";
        data = [];
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "OC Transpo";
    }
    for(var a =0; a<=135; a++){
        data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
        pics22p.insertAdjacentHTML('beforeend', data);
    }
}
function p5() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Colin";
        dataa = [19,
            36,
            80,
            173,
            196,
            234,
            266,
            293,
            297,
            303,
            352,
            373,
            482,
            695,
            700,
            701,
            721,
            744,
            831];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "OMG Park";
        data = [];
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    } else if (message == "other") {
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        document.getElementById("pics22").style.display = "none";
        document.getElementById("pics22").style.opacity = "0";
        document.getElementById("pics2").style.display = "block";
        document.getElementById("pics2").style.opacity = "1";

    }
}
function p6() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Kota";
        dataa = [440, 632, 816, 855];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Ice Hockey";
        dataa = [35,
            80,
            84,
            103,
            231,
            248,
            272,
            320,
            322,
            344,
            385,
            403,
            426,
            466,
            467,
            468,
            607,
            647,
            649,
            730,
            752,
            839,
            841];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p7() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Rui";
        dataa = [19,
            144,
            178,
            179,
            256,
            266,
            296,
            352,
            409,
            413,
            425,
            644,
            680,
            721,
            815,
            905,
            965,
            986];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Pink .L";
        dataa = [25,
            36,
            37,
            40,
            43,
            50,
            53,
            71,
            78,
            169,
            214,
            244,
            249,
            254,
            284,
            289,
            298,
            319,
            359,
            404,
            422,
            456,
            626,
            664,
            717,
            735,
            766,
            767,
            776,
            790,
            805,
            840,
            880,
            895,
            896,
            915,
            939,
            968];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p8() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Shogo";
        dataa = [3,
            6,
            19,
            65,
            74,
            89,
            100,
            105,
            159,
            163,
            170,
            237,
            252,
            266,
            268,
            286,
            300,
            348,
            358,
            365,
            401,
            410,
            414,
            604,
            611,
            654,
            745,
            769,
            775,
            780,
            813,
            876,
            974];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Ottawa .D";
        dataa = [14,
            24,
            27,
            31,
            39,
            48,
            49,
            51,
            54,
            70,
            75,
            77,
            82,
            85,
            94,
            105,
            116,
            131,
            141,
            142,
            151,
            152,
            161,
            168,
            182,
            201,
            203,
            204,
            210,
            211,
            213,
            219,
            221,
            222,
            225,
            232,
            278,
            281,
            288,
            290,
            315,
            325,
            333,
            345,
            351,
            364,
            369,
            372,
            373,
            374,
            383,
            386,
            394,
            395,
            396,
            397,
            398,
            399,
            405,
            408,
            427,
            457,
            464,
            499,
            500,
            501,
            502,
            503,
            504,
            505,
            506,
            586,
            597,
            606,
            615,
            616,
            617,
            623,
            625,
            635,
            637,
            642,
            662,
            687,
            704,
            779,
            800,
            812,
            836,
            844,
            881,
            887,
            893,
            913,
            938,
            941,
            971];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p9() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Shun";
        dataa = [6,
            8,
            9,
            13,
            15,
            19,
            33,
            43,
            58,
            63,
            67,
            74,
            80,
            95,
            97,
            99,
            109,
            114,
            116,
            120,
            126,
            133,
            158,
            163,
            170,
            193,
            197,
            225,
            228,
            235,
            252,
            253,
            259,
            262,
            265,
            268,
            274,
            293,
            300,
            303,
            306,
            321,
            323,
            328,
            331,
            348,
            356,
            365,
            369,
            376,
            379,
            392,
            396,
            409,
            413,
            414,
            416,
            427,
            428,
            432,
            440,
            588,
            599,
            610,
            627,
            643,
            652,
            654,
            657,
            663,
            664,
            669,
            677,
            688,
            700,
            711,
            737,
            741,
            744,
            746,
            769,
            770,
            773,
            775,
            778,
            780,
            794,
            823,
            831,
            838,
            842,
            843,
            846,
            849,
            861,
            863,
            876,
            884,
            902,
            903,
            904,
            905,
            914,
            929,
            930,
            941,
            942,
            952,
            957,
            961,
            964,
            965,
            975];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Montreal";
        dataa = [5,
            10,
            11,
            12,
            17,
            20,
            21,
            28,
            30,
            32,
            34,
            38,
            46,
            57,
            60,
            61,
            64,
            66,
            98,
            107,
            115,
            129,
            145,
            146,
            148,
            155,
            156,
            165,
            174,
            176,
            177,
            185,
            199,
            205,
            206,
            218,
            220,
            224,
            226,
            229,
            239,
            245,
            264,
            269,
            271,
            279,
            304,
            307,
            312,
            332,
            336,
            346,
            347,
            353,
            360,
            366,
            368,
            387,
            389,
            393,
            400,
            411,
            413,
            420,
            421,
            432,
            514,
            515,
            516,
            517,
            518,
            519,
            590,
            595,
            613,
            618,
            619,
            620,
            633,
            639,
            640,
            648,
            653,
            666,
            673,
            678,
            679,
            684,
            698,
            702,
            705,
            714,
            731,
            732,
            733,
            748,
            753,
            757,
            765,
            771,
            772,
            791,
            792,
            809,
            810,
            817,
            820,
            821,
            824,
            826,
            827,
            837,
            847,
            848,
            852,
            856,
            859,
            862,
            877,
            878,
            886,
            910,
            912,
            918,
            921,
            926,
            933,
            934,
            943,
            954,
            959,
            967,
            970,
            981,
            985];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p10() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Shuwa";
        dataa = [42,
            88,
            144,
            197,
            228,
            381,
            409,
            412,
            413,
            604,
            644,
            663,
            801,
            815,
            816,
            823,
            846,
            879,
            905,
            928,
            942,
            944,
            948,
            965,
            972];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Air Port";
        dataa = [436, 437, 438, 439, 440, 441, 442, 443, 579, 580, 581, 583, 584, 585];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p11() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Taisei";
        dataa = [6,
            9,
            22,
            67,
            95,
            110,
            123,
            137,
            144,
            197,
            217,
            228,
            253,
            262,
            265,
            327,
            381,
            409,
            413,
            440,
            622,
            630,
            644,
            663,
            709,
            711,
            724,
            758,
            786,
            815,
            823,
            835,
            846,
            863,
            866,
            867,
            869,
            882,
            893,
            903,
            905,
            923,
            929,
            932,
            940,
            942,
            948,
            965,
            982,
            984];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "Other";
        dataa = [16,
            18,
            26,
            41,
            69,
            73,
            79,
            90,
            110,
            118,
            119,
            125,
            149,
            153,
            175,
            184,
            223,
            240,
            241,
            258,
            267,
            287,
            324,
            330,
            340,
            352,
            362,
            388,
            444,
            451,
            452,
            453,
            454,
            463,
            465,
            473,
            474,
            478,
            479,
            480,
            511,
            512,
            522,
            564,
            565,
            566,
            567,
            568,
            569,
            570,
            571,
            572,
            573,
            574,
            575,
            577,
            578,
            594,
            614,
            621,
            660,
            674,
            683,
            703,
            738,
            747,
            756,
            784,
            793,
            818,
            819,
            829,
            832,
            833,
            845,
            853,
            860,
            873,
            874,
            875,
            891,
            892,
            907,
            916,
            922,
            924,
            925,
            935,
            937,
            947,
            976];
            last = dataa.length;
            te = "Total:"+last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:"+last);
            for (var a = 0; a < last; a++) {
                num = dataa[a]-1;
                console.log("datal:"+num);
                numl = String(num).length;
                console.log("numl:"+numl);
                if (numl== 1) {
                    num = "00" + String(num);
                    console.log("newnum:"+num);
                } else if (numl== 2) {
                    num = "0" + String(num);
                    console.log("newnum:"+num);
                }
                num = "pic/img" + num + ".jpg";
                data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if(last <135){
                for(var a = last; a<=135; a++){
                    data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function p12() {
    document.getElementById("search2").style.display = "none";
    document.getElementById("search2").style.opacity = "0";
    document.getElementById("tables").style.display = "none";
    document.getElementById("tables").style.opacity = "0";
    del();
    document.getElementById("pics2").style.display = "none";
    document.getElementById("pics2").style.opacity = "0";
    document.getElementById("pics22").style.display = "block";
    document.getElementById("pics22").style.opacity = "1";
    if (message == "people") {
        document.getElementById("name").innerHTML = "Yuki";
        dataa = [441, 482, 632, 816];
        last = dataa.length;
        te = "Total:"+last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:"+last);
        for (var a = 0; a < last; a++) {
            num = dataa[a]-1;
            console.log("datal:"+num);
            numl = String(num).length;
            console.log("numl:"+numl);
            if (numl== 1) {
                num = "00" + String(num);
                console.log("newnum:"+num);
            } else if (numl== 2) {
                num = "0" + String(num);
                console.log("newnum:"+num);
            }
            num = "pic/img" + num + ".jpg";
            data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if(last <135){
            for(var a = last; a<=135; a++){
                data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "House";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
    }
}
function send(){
    location.href = 'mailto:'+'kazukazu.18@icloud.com'+'?subject='+'本文に写真を添付して送ってね';
}