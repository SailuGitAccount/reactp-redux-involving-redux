function fetchPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('resolved'),1000);
    });
}
//module.exports=fetchPromise;
export default fetchPromise;
   