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
12. A. student['name'].  
    B. student['Grad Year'].    
    C. student[greeting].   
    D. student['Favourite Teacher'].name.  
    E. student.courseLoad[0].   
13. A. '32'   -> 2 converted to string.   
    B. 1      -> 3 converted to integer.   
    C. 3      -> null is convereted to 0.   
    D. '3null'-> null is converted to string.   
    E. 4      -> true is casted to 1.    
    F. 0      ->false is 0 and null is also 0.   
    G. '3undefined'-> undefined is converted to string.   
    H. NaN        -> - tries to make undefined an integer but not possible thererfore error.   

14. A. true  -> string is converted to integer.   
    B. false -> we compare the strings and 1 is less than 2.    
    C. true  -> '2' is converted to 2 and they are same value.    
    D. false -> 2 and '2' are different variable types.   
    E. false ->true is 1 and not equal to 2.    
    F. true. -> True and Boolean(2)nare same value and same type.     
15. == checks if the value of the two variables is the same or not. (It does not matter what variable type they are) === returns true only when both    variables are same value and same type.   
16. Code in another .js file.  
17. 
