 //ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                           function addToCart(productId, quantity) {
                            // 1. Get product details
                              console.log(getProductById(productId))
                            // 2. Check stock availability
                            if(!checkStock(productId,quantity)){
                                return "Insufficient Stock"
                            }
                            
                            // 3. Check if product already in cart
                            let product=cartItems.find(cartItemsObj=>cartItemsObj.id===productId)
                            //    - If yes, update quantity
                            if(product){
                                updateQuantity(productId,product.quantity+quantity)
                            }
                            //    - If no, add new item
                            else{
                                let item={
                                    id:productId,
                                    quantity:quantity,
                                }
                                cartItems.push(item)
                                
                            }
                            // 4. Return success/error message
                        return "Item added successfully"
                          }
                          
                          function removeFromCart(productId) {
                            // Remove product from cart
                            cartItems=cartItems.filter(cartItemsObj=>cartItemsObj.id!=productId)
                            return "Item removed"
                          }
                          
                           function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            let product=cartItems.find(cartItemsObj=>cartItemsObj.id===productId)
                            // Check stock before updating
                            if(!product) return "Item not found"
                            if(checkStock(productId,newQuantity)){
                                product.quantity=newQuantity
                                return "Quantity updated"
                            }
                            return "Insufficient stock"
                          }
                          
                          function getCartItems() {
                            // Return all cart items with product details
                            return cartItems;
                          }
                          
                           function getCartTotal() {
                            // Calculate total price of all items in cart
                            let total=cartItems.reduce((sum,item)=>{
                                let product=getProductById(item.id)
                                return sum+product.price*item.quantity

                            },0)
                            // Return total
                            return total
                          }
                          
                          function clearCart() {
                            // Empty the cart
                             cartItems.length=0
                           return "Cart cleared"
                          }

export {addToCart, removeFromCart, updateQuantity, getCartItems, getCartTotal, clearCart}