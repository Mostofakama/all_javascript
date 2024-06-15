import { prom,jsonClass} from "./libari.js"


var pro = new prom(2,4,function func(a,b) {
    return a+b
},"i am successfull","i am faild","Pandding",2000)
pro.proms()


var pro1 = new prom(2,4,function func(a,b) {
    return a+b
},"Your data is successfull","Your data is paild","data fetch panding",2500)
pro1.proms()

// var json = new jsonClass("https://jsonplaceholder.typicode.com/users")
// console.log(json.fatch());




