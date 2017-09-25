/*
 * Jasper Adams - JavaScript Problems 11-20 - 9/19/17.
 */

//firstLast6
function firstLast6(x){
    var first = x[0];
    var last = x[x.length - 1];
    return first == 6 || last == 6;
}

//has_23
function has23(x) {
    return x[0] == 2 || x[0] == 3 || x[1] == 2 || x[1] == 3;
}

//fix_23
function fix23(x){
    for(var i = 0; i < 2; i++) {
        if (x[i] == 2 && x[i + 1] == 3) {
            x[i + 1] = 0;
        }
    }
    return x;
}

//countYZ
function countYZ(str) {
    var result = 0;
    var x = str.toLowerCase();
    for (var i = 0; i < x.length; i++) {
        if (x[i] == "y" && x[i + 1] == " ") {
            result++;
        }
        if (x[i] == "z" && x[i + 1] == " ") {
            result++;
        }
    }
    if (x[x.length - 1] == "y" || x[x.length - 1] == "z"){
        result++;
    }
    return result;
}

//endOther
function endOther(str1, str2){
    var x = str1.toLowerCase();
    var y = str2.toLowerCase();
    if(x.length < y.length){
        var y1 = y.substring(y.length - x.length, y.length);
        return y1 == x;
    }else if(x.length > y.length){
        var x1 = x.substring(x.length - y.length, x.length);
        return x1 == y;
    }else{
        return x == y;
    }
}

//starOut
function starOut(str) {
    var res = str;
    var x = 0;
    for (var i = 0; i < res.length; i++) {
        if (res[i] == "*") {
            for (var j = 1; j < 3; j++)
                if (res[i + j] == "*") {
                    x++;
                } else {
                    break;
                }
            res = res.substring(0, i - 1) + res.substring(i + x + 2, res.length);
            i = 0;
            x = 0;
        }
    }
    return res;
}

//getSandwich
function getSandwich(str){
    var i = str.indexOf("bread");
    var f = str.lastIndexOf("bread");
    var res = str.substring(i + 5, f);
    if(i == f){
        res = "";
    }
    return res;
}

//canBalance
function canBalance(x){
    var result = false;
    var sum = 0;
    var sum1 = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    var sum2 = sum;
    for(var j = 0; j < x.length; j++){
        sum1 += x[j];
        sum2 -= x[j];
        if(sum1 == sum2){
            result = true;
            break;
        }
    }
    return result;
}

//countClumps
function countClumps(x){
    var num = 0;
    var check = null;
    for(var i = 0; i < x.length; i++){
        if(x[i] != check){
            if(x[i] == x[i + 1]) {
                num++;
                check = x[i];
            }else{
                check = null;
            }
        }
    }
    return num;
}

//evenlySpaced
function evenlySpaced(a, b, c){
    var x = [a, b, c];
    x.sort(function(x, y){return x-y});
    var dif1 = x[1] - x[0];
    var dif2 = x[2] - x[1];
    return(dif1 == dif2);
}


//tester
function tester() {
    document.getElementById("output").innerHTML += firstLast6([1, 2, 6]);
    document.getElementById("output").innerHTML += has23([2, 5]);
    document.getElementById("output").innerHTML += fix23([1, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("Hiabc", "AbC");
    document.getElementById("output").innerHTML += starOut("he***llo");
    document.getElementById("output").innerHTML += getSandwich("breadAbread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1,1,2,1,1]);
    document.getElementById("output").innerHTML += evenlySpaced(2, 4, 6);
}
