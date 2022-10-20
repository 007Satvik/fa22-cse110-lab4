1. 3 -> var i has the scope of the entire function and the last iteration set the value to 3 
2. 150 -> var has the scope of the entire function. In the last iteration 300 * 1/2 = 150
3. 150 -> same as last step. The number gets logged into the console
4. [50, 100, 150] The function returns a array of discounted prices
5. Error. i has the scope of the for loop. We try to access it outside the scope. This returns us an error
6. Error. discountedPrice has scope of the for loop. We try to acces it outside the scope. Therefore error
7. 150. finalPrice ahs the scope of the function. We call it within the function
8. [50, 100, 150] The function has no errors. All variables are used within thier respective scopes. 
9. Error. i has scope of the for loop. We try to access it outside that loop
10. 3 -> No error because we never tried to change the value of a constant and used it within its scope
11. [50, 100, 150] -> no errors. The reference to the constant array has not changed. Everything is within scope
