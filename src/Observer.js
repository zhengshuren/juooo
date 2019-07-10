//手动封装 事件订阅模块

const EventList={};
/*
on
EventList.test=[];
EventList.test.push(function(res){console.log(res)})
// console.log(EventList);
emit
// EventList.test[0]//fn
EventList.test[0]("OK")//fn
*/

// 封装事件注册

// $on("事件名",callback)
// $on("事件名",(res)=>{
//        console.log(res);
// })

//调用  $on("test",callback)
const on=function(eventName,callback){
        if(!EventList[eventName]){
                EventList[eventName]=[];
        }
        EventList[eventName].push(callback)
}
// on("test",(res)=>{
//         console.log(res);
// })
// on("test",(res)=>{
//         console.log(res);
// })
// on("test",(res)=>{
//         console.log(res);
// })
console.log("OK")
// 封装事件触发
// $emit("test","xxxxxxx")
const emit=function(eventName,params){
        // 当你去触发的时候
        if(!EventList[eventName])return;
        // EventList.test[0]
        // 调用单个事件
        // EventList[eventName][0](params);
        // 调用多个事件
        EventList[eventName].map((cb)=>{
                cb(params)
        })
}
// emit("test","xxxx")

// 事件解绑
const off=function(eventName){
        if(!EventList[eventName])return;
        EventList[eventName]=[];
}
export default {
        $on:on,
        $emit:emit,
        $off:off
}
