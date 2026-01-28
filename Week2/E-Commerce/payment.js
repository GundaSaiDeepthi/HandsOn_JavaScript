 //iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                           function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                          let cart=getCartItems()
                          let total=getCartTotal()
                          let discount=0
                            // 2. Apply discount if coupon provided
                            if(couponCode){
                          let discountApplied=applyDiscount(total,couponCode,cart)
                           total = discountApplied.finalTotal;
                         discount = discountApplied.discount;
                            }
                            else{
                                discount=0
                            }
                            // 3. Validate payment method (card/upi/cod)
                            let validatePayment=validatePaymentMethod(paymentMethod)
                            if(!validatePayment){
                                return{
                                     orderId: null,
                                     items: cart,
                                     subtotal,
                                     discount,
                                     total,
                                     paymentMethod,
                                     status: 'failed',
                                    message: 'Invalid payment method'
                                }
                            }
                            // 4. Process payment (simulate)
                            let payment=true
                            if(!payment){
                                return{
                                     orderId: null,
                                     items: cart,
                                     subtotal,
                                     discount,
                                     total,
                                     paymentMethod,
                                     status: "failed",
                                     message: "Payment failed"
                                }
                            }
                            // 5. Reduce stock for all items
                            cart.forEach(item=>reduceStock(item.id,item.quantity))
                            // 6. Clear cart
                            console.log(clearCart())
                            // 7. Generate order summary
                            
                            
                           return   {
                            //   orderId: ...,
                            orderId:generateOrderId(),
                            //   items: [...],
                            items:cart,
                            //   subtotal: ...,
                            total,
                                                      
                            //   discount: ...,
                            discount,
                            //   total: ...,
                            total,
                            //   paymentMethod: ...,
                            paymentMethod,
                            //   status: 'success/failed',
                            status:"success",
                            //   message: '...'
                            message:"Payment Successful , Order placed"
                            }
                          }
                          
                           function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            let methods=["card","upi","cod"]
                            return methods.includes(method.toLowerCase())
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }
            export {
                processPayment, validatePaymentMethod }