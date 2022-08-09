console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i=1; i <=100; i++)
    if(i % 2 != 0)
    {
        console.log(i);    
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i=1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
      if (i % 3 == 0){        
      console.log("FIZZ");
        }

      if (i % 5 == 0){
        console.log("BUZZ");
      }
    }
}

console.log("EXERCISE 3:\n==========\n");

let i = 1;

while(i <= 100){
    let output = "";

    if(i % 3 == 0){
        output += "FIZZ";
    }

    if(i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
}

let x = 1;

do{
    let output = "";

    if(i % 3 == 0){
        output += "FIZZ";
    }

    if(i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
} while (x <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for(let i = 1;i <= n;i++){

    if(i == value){
        console.log(`Found the number: ${value}`);
        break;
    }    
    
    console.log(`Did not find ${value} in 1 to ${n}`);

}


    
    

