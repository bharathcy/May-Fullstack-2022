const add =(n) => (n+50);
console.log(add(10));

const memorize =(fn) => {
    let cache ={};
    return(...args) => {
        let n =args[0];

        if(n in cache){
            console.log("fetching from cache");
            return cache[n];
        }
        else{
            console.log('calculating result');
            let result =fn(n);
            cache[n]= result;
            return result;
        }
    }
}

const memorizeAdd=memorize(add);
console.log(memorizeAdd(3));
console.log(memorizeAdd(3));//cache
console.log(memorizeAdd(4));
console.log(memorizeAdd(4));

