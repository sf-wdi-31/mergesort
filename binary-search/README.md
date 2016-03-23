![Morty Searching](http://i.giphy.com/l41lFw057lAJQMwg0.gif)

#Binary Search

1. The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. 
2. If the target value is equal to the middle element's value, then the position is returned and the search is finished. 
3. If the target value is less than the middle element's value, then the search continues on the lower half of the array (excluding middle element;) or if the target value is greater than the middle element's value, then the search continues on the upper half of the array. 
4. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned). 
[Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

##Challenge
Write a binary search algorithm that will take an array and a single number as parameters and return a **boolean true** if that number exists in that array and a **boolean false** if that number does not exists.

###Example 1

```javascript
array = [0,1,2,3,4,5,6,7,8,9,10]
number = 2
binarySearch(array, number) => true
```

###Example 2
```javascript
array = [0,2,4,6,8,10,12,14,16,18,20]
number = 7
binarySearch(array, number) => false
````

##Stretch Challenge
Implement your binary search algorithm using a recursive pattern!  This method is faster and more eloquent, but will stretch your imagination and sanity.

Solutions can be found in the solution branch!


