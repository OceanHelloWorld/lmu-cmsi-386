
# **Homework 3**

[![N|Solid](https://i2.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2013/03/wisdom_of_the_ancients-1.png?resize=485%2C270&ssl=1)](http://cs.lmu.edu/~ray/classes/pl/assignment/3/)


## **Problem 1**
***On your machine, find the address of A[0][0] and A[3][7]. Explain why these values are what you found them to be.***


________
## **Problem 2**
Not sure???
***Explain the meaning of the following C++ declarations:***

double *a[n];   The nth value within the array a

double (*b)[n];   The address location of array b plus n positions

double (*c[n])();   The pointer to nth function inside array c

double (*d())[n];     

________
## **Problem 3**
***Describe rigorously, in English, the type of f.***

f is a pointer to a function. That function takes in two arguments which are a pointer to a function and a double. And that pointer to a function takes in two arguments which are a double and an array of double. The *f is being called by multiple arguments that the first argument is a double. Then the *f will return a double.

________
## **Problem 4**
*** What happens when we “redefine” a field in a C++ subclass? ***

The representation of a Derived object contains one b field. The b field from Base class is replaced when the same variable name is inherited from the Derived class. So while all the other variables with different names keep the same value from the base class.

________
## **Problem 5**
***What does the following C++ program output?***

2
5
2

________
## **Problem 6**
***Suppose you were asked to write a function to scramble (shuffle) a given array, in a mutable fashion. Give the function signature for a shuffle function for (a) a raw array, and (b) a std::array.***

(a) a raw array
void shuffle(auto[] (&input_array)[sizeof(input_array)/sizeof(input_array[0]);
void foo(int (&arr)[5])
(b) a std::array
void shuffle(std::array<auto, sizeof(input_array)/sizeof(input_array)> &input_array);




[![N|Solid](https://i.imgur.com/GvWZAJB.jpg)](http://cs.lmu.edu/~ray/classes/pl/assignment/3/)
