 //i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                           function getProductById(id) {
                            // Find and return product by ID
                            return products.find(productObj=>productObj.id===id)
                            
                          }
                          
                          function getAllProducts() {
                            // Return all products
                            return products;
                          }
                          
                         function getProductsByCategory(category) {
                            // Filter products by category
                            return products.filter(productObj=>productObj.category===category)
                          }
                          
                           function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            return products.filter(productObj=>productObj.name.toLowerCase().includes(query.toLowerCase()))

                          }
                          
                          function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                            let product= products.find(productObj=>productObj.id===productId)
                            return product ? product.stock>=quantity:false
                          }
                          
                           function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                           
                       let product=products.find(productObj=>productObj.id===productId)
                       if(product && product.stock>=quantity){
                        product.stock-=quantity
                        return true
                    }
                    return false



                          }

export{ getProductById, getAllProducts, getProductsByCategory, searchProducts, checkStock, reduceStock}