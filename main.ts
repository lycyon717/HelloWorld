var X:string ='* ';
var Y:string =' ';
function strrep(num:any,num2:any,str:string,str2:string){
    var result:string=' ';
    for(var i=0;i<num;i++){
        result+=str;
    }
    for(var j=0;j<num2;j++){
        result+=str2;
    }
    return result;
}

for(var i = 0; i < 5; i++){
    console.log(strrep(10-i,i,Y,X));
}

