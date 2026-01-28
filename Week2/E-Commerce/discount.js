//iii. discount.js - Coupon and discount logic
 
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                           function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            let coupon=coupons[couponCode]
                            if(!coupon)
                                return { valid:false,message:"Invalid coupon code"}
                            // 2. Check minimum amount requirement
                            if(cartTotal<coupon.minAmount){
                                return {valid:false,message:"Cart total shouls be atleast"+coupon.minAmount}
                            }
                            // 3. Check category requirement (if any)
                            if(coupon.category){
                                let categoryRequired=cartItems.find(cartItemsObj=>cartItemsObj.category===coupon.category)
                                if(!categoryRequired)
                                    return {valid:false,message:"Coupon only applies to only"+coupon.category+"category"}
                            }
                            // Return { valid: true/false, message: '...' }
                            return {valid:true,message:"Coupon is valid"}
                          }
                          
                           function calculateDiscount(couponCode, cartTotal) {
                            // Calculate discount amount based on coupon type
                            let coupon=coupons[couponCode]
                            let discountAmount=0
                            if(!coupon) return 0
                            if(coupon.type==="percentage")
                                discountAmount=(cartTotal*coupon.value)/100
                            if(coupon.type==="flat")
                                discountAmount=coupon.value
                            // Return discount amount
                            return discountAmount
                          }
                          
                           function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            let validate=validateCoupon(couponCode,cartTotal,cartItems)
                             let discount=0
                             let finalTotal=cartTotal
                            if(!validate.valid){
                                return {
                                    originalTotal:cartTotal,
                                    discount:0,
                                    finalTotal:cartTotal,
                                    message:validate.message
                                }
                            }
                            // 2. If valid, calculate discount
                            if(validate.valid){
                                discount=calculateDiscount(couponCode,cartTotal)
                                finalTotal=cartTotal-discount
                            }
                            // 3. Return final amount and discount details
                             
                            return{
                            //   originalTotal: ..., 
                            originalTotal:cartTotal,
                            //   discount: ..., 
                            discount:discount,
                            //   finalTotal: ...,
                            finalTotal:finalTotal,
                            //   message: '...'
                            message:"Coupon applied successfully"
                             }
                          }
export {validateCoupon, calculateDiscount, applyDiscount}