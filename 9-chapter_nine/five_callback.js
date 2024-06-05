// callback holo akta function a ono function ke call kora 
// main function call korara time call kora function ta defind kora 

function callback (a,b,cb){
   c = a+b
   d = a-b

   return cb(c,d) // ata holo call back function akta function a ono function call kora hoyce 
}

var fun = callback(3,5,function(c,d){
    return c+d
})


