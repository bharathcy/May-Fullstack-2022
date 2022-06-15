// memoization
let sum=0;
let call=(n)=>{
    console.log("inside call function")
    
    for(i=0;i<=n;i++){
        console.log(`inside for ${n} ${sum} function`)
        sum += i;
    }
    return sum;
}



const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("from cache")
            return cache[n];
        }else{
            console.log("calculation for the first time")
            
            let result=fun(n);
            console.log(result)

            cache[n]=result;
            console.log(cache[n])

            console.log("inside call function")
            return result;
        }
    }
}

const efficient=memoize(call);
console.time();
console.log(efficient(5))
console.timeEnd();

console.time();
console.log(efficient(5))
console.timeEnd();





