# Stick Cutting Square

there are two wooden sticks of lengths A and B respectively. Each of them can be cut into shorter sticks of integers lengths.  
Our goal is to construct the largest possible square.   
In order to do this, we want to cut the sticks in such a way as to achieve four sticks if the same length (note that there can be some leftovers pieces).  
What is the longest side of square that we can achieve ?  

write a function is javascript:  
    function solution(A, B);  

that given two integers A, B, returns the side side length of the largest square that we can obtain. if it is not possible to create any square, the function should return 0  

examples:

1) given A = 10, B = 21, the function should return 7. We can split the second stick into three sticks of length 7 and shorten the first stick by 3  
2) given A = 13, B = 11, the function should return 5. we can cut the two sticks of length 5 from each of the given sticks.  
3) given A = 2, B = 1, the function should return 0. it is not possible to make any square from given sticks  
4) given A = 1, B = 8, the function should return 2. we can cut stick B into four parts  