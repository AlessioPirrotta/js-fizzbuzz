

let container = document.getElementById("cntr")


 for(let i=1; i<=100; i++ )
 {

    if(i % 3 === 0 && i % 5 === 0 ) {
        console.log("fizzbuzz")
        let nuovoElemento = document.createElement("div")
        nuovoElemento.textContent = "fizzbuzz"
        nuovoElemento.className=("bg-warning px-4 py-3 my-5 mx-3")
        container.append(nuovoElemento)
    }

    else if(i % 3 === 0) {
        console.log("fizz")
        let nuovoElemento = document.createElement("div")
        nuovoElemento.textContent = "fizz"
        nuovoElemento.className=("bg-primary px-4 py-3 my-5 mx-3")
        container.append(nuovoElemento)
    }

    else if(i % 5 === 0) {
        console.log("buzz")
        let nuovoElemento = document.createElement("div")
        nuovoElemento.textContent = "buzz"
        nuovoElemento.className=("text-success bg-dark px-4 py-3 my-5 mx-3")
        container.append(nuovoElemento)
    }

    else{
        console.log(i)
        let nuovoElemento = document.createElement("div")
        nuovoElemento.textContent = (i)
        nuovoElemento.className=("text-danger bg-secondary px-4 py-3 my-5 mx-3")
        container.append(nuovoElemento)

    }
    
    
    

 }


 
