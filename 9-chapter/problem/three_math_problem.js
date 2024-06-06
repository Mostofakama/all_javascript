var dhara = [5,8,11,14]
function dharaSomanopotik (n,value,func){
var result = 0
    for(i = 0 ; i<dhara.length; i++){
        var first = dhara[0]
        var second = dhara[1]
        var third = dhara[2]
        var four = dhara[3]
    var dh1 = second -  first
    var dh2 = third - second
    var dh3 = four - third
    
    
    
    if(dh1 == dh2){
        if(dh2 == dh3){
            
                var result = func(first,dh1,value,n)
            
          
        }

    }else{
       console.log('this not Samantoral dhara');
    }
    
       
    }
    return result
}

var res = dharaSomanopotik(20,0,function fun(a,d,value,n){

    if(n == 0){
        var vals = (value - a + 1*d) / d
        var val = vals + "  value ar mon"
        return val
    }
    if(value == 0){
        var vals = a + (n - 1) * d
        var val = vals + "  n ar mon"

        return val
    }
   

    
})
console.log(res);
