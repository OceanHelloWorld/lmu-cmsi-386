
# **Homework 3**

[![N|Solid](https://i2.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2013/03/wisdom_of_the_ancients-1.png?resize=485%2C270&ssl=1)](http://cs.lmu.edu/~ray/classes/pl/assignment/3/)


## **Problem 1**
***On your machine, find the address of A[0][0] and A[3][7]. Explain why these values are what you found them to be.***


________
## **Problem 2**
***Explain the meaning of the following C++ declarations:***

double *a[n];       //pointer to an n argument array named a?
double (*b)[n];     //pointer to function b?
double (*c[n])();   //pointer to func?
double (*d())[n];   //pointer to function d?

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






Why does C++ allow functions to be overloaded but JavaScript and Python do not?

Statically or Dynmically typed? JavaScript dynamic________ Python dynamic__ C++ static________.
    static: determine the type of code before running the code; dynamic: need to run the source code to know the type

Strongly or Weakly typed? JavaScript weakly________ Python ________ C++ strongly________.
    strongly typed: cant mismatch different types;  concatenate string with int

Is it possible to write a Python function that takes at LEAST two arguments and at MOST five? (In other words, it should be an error, either at compile time or run time, to make a call with less than two or more than five arguments.) If so write one; if not, say why not.
Yes
def(x =2; y = 3; a, b, c) {
    return 0;
}

Repeat the previous problem for JavaScript.
No

Repeat the previous problem for C++.


How would you implement (or simulate) Python’s “keyword arguments” in a call in C++?


Is it possible for a function in {JavaScript, Python, C++} to modify an argument simply by assigning to the corresponding parameter? If so, show how to do this. If not, state why not.
void f(int& x) {x = 10}...

What if a C++ function declared to return an integer does not have a return statement at all? Does it compile? Does it run? If it does run, what happens when it reaches the end of the function body?

What if a C++ function declared to return an integer only has one return statement, and that statement is inside of an if statement? Does it compile? Does it run? If it does run, what happens when it reaches the end of the function body without returning?

What happens if a JavaScript function reaches the end of its body without encountering a return statement?
What happens if a Python function reaches the end of its body without encountering a return statement?
Is it possible for a function in {JavaScript, Python, C++} to modify a non-local variable? Is there any special syntax required to do so?
Is it possible for a function in {JavaScript, Python, C++} to prohibit assignment to a parameter within the function body? Can this prohibition be made at compile time or must it be made at run time? Show how this is done with an example code snippet.
How do you, in {JavaScript, Python, C++}, capture the notion of a function returning zero values?
Can a fuction in {JavaScript, Python, C++} actually return multiple values, or would you have to return a single tuple, list, or array object to simulate this behavior? Explain.
Write a small snippet of code in {JavaScript, Python, C++} that behaves differently if arguments are evaluated left-to-right as opposed to right-to-left.
