var dhara  = [7,12,17]
function dharaOfTotal(n,fun){
    for(k = 0;k < dhara.length; k++){
        var a = dhara[0]
        var d = dhara[1] - dhara[0]
      var ret =  fun(a,d,n)
      return ret
    }
}


var result = dharaOfTotal(500,function(a,d,n){
    var n2 = n/2
    var a2 = 2*a
   var n1=  n-1
   var dt = n1 * d
return n2 * (a2 + dt)
    // return n/2{2a + (n-1) * d}
})

console.log(result);