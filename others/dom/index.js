var para = function (id,value){
this.id = id,
this.value = value,
this.demo = function(){
    document.getElementById(this.id).innerHTML = this.value
    // console.log( this.id + ' ' + this.value)
}
}



// var nwe = new para('demo','myname')
// nwe.demo()
// var nwe1 = new para('demo','myname1')
// nwe1.demo()
// var nwe2 = new para('demo2','myname2')
// nwe2.demo()