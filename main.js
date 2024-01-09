

let container = document.getElementById("cntr")

 for(let i=1; i<=100; i++ )
 {

    if(i % 3 === 0 && i % 5 === 0 ) {
        console.log("fizzbuzz")
        container.append("fizzbuzz")
    }

    else if(i % 3 === 0) {
        console.log("fizz")
        container.append("fizz")
    }

    else if(i % 5 === 0) {
        console.log("buzz")
        container.append("buzz")
    }

    else{
        console.log(i)
        let element = (i)
        container.append(element)
    }
    
    
    

 }


 
