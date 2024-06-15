
//  export var i = "mostofa kamal"

 
export class prom{
    constructor(a,b,func,result,error,panding,time){
        this.func = func
        this.result = result
        this.error = error
        this.a = a
        this.b =b
        this.panding = panding
        this.time = time
    }

    proms(){
      this.pross =  new Promise((resolve,reject)=>{
        console.log(this.panding);
        setTimeout(()=>{
            if(this.func(this.a,this.b)){
                resolve(this.result)
               }else{
                reject(this.error)
               }
        },this.time)
           
        })
        this.onResolve =  function(result){
            console.log(result);
          }
        this.onReject =  function(error){
            console.log(error);
          }
    this.pross.then(this.onResolve).catch(this.onReject)    
    }
}


// json data fetch 
export class jsonClass{
    constructor(url){
        this.url = url
        
    }

    fatch (){
     
    }
}
