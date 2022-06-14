const cache =[]

function factorial(n)
{
	if(cache[n] != null)
	{
		
		return cache[n]

	}
	let factorial = 1
     if(n == 0 && n== 1)
	 {
		 return factorial
	 }else{
		 for(let i=n;i>=1;i--)
	     {
			 console.log("loading") // for the first time we could see the loading ,but for 2nd couldn't see if we pass the same argument
	     	 factorial=factorial*i
	     }
		 
		 cache[n] = factorial
		 return factorial
	 }		 
	
}

console.log(factorial(150)) // for the first time it will execute the code  then it will display the result 
console.log(factorial(150)) /* for the second time ,it will check the cache , if it is present then 
it will return the op other wise it will start executing the code */
console.log(factorial(50))
console.log(factorial(50))
console.log(factorial(50))

console.log(factorial(40))
console.log(factorial(40))


