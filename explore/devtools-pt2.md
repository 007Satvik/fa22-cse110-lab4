1. The bug was that num1 and num2 were seen as strings. And result was the concatenation of num1 and num2.  
2. parseInt(num1, 10) + parseInt(num2, 10) -> this converts num1 and num2 to their integer values and result becomes the decimal sum of the two numbers
