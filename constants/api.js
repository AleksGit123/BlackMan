let users = []

export let getProducts = async () =>{
    try{
        let response = await fetch("https://fakestoreapi.com/products")
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Fetch error");
    }
    }
    catch{
        throw new Error("Fetch error");
    }
    
}


