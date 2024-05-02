var num= [31,32,34,35,36,37,38,40]
var missing = "";

for (var i=0; i<num.length; i++){
    var diff= num[i + 1] - num[i];

    if (diff > 1){
        for(var j=1; j<diff; j++){
            console.log(num[i] + j)
        }
    }
}

