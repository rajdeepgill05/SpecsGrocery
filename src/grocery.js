class Cart {
    constructor(products) {
        if(products) {
            this.products = products.slice(0,5)
          } else {
            this.products.push;
          }
    }
  
    scan(product) {
     
    }
  
    remove(product) {
     
      }
    }
  
    items() {
      return this.products
    }
  }

  let shoppingCart = {
    products: [],
    let product: (itemId, price) {
        this.itemId: itemId ,
        this.price: price,
    },  
    addProduct: () =>{
        if(this.products.length < 5) {
            this.products.push(product) 
          } else {
            return "Your cart is full."
          }
    },
    remove: () =>{
        if (this.products.length < 1) {
            return "Your cart is empty."
        } else {
            this.products.pop();
        }
      },
      discount: () =>{

      },
      total: () =>{
        return this.products;
      },
      items: () =>{

      }

  }