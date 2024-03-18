
   const getStoredCart = () =>{
      const storedCartString = localStorage.getItem('cart');
      if(storedCartString){
        return JSON.parse(storedCartString)
      }
      return [];
   }
    

   const addToLs = id=>{
    const  cart = getStoredCart();
    cart.push(id);
    // save to a local storage
   }