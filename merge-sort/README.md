# Merge Sort

Merge sort is the first powerful sorting algorithm that you will encounter in the wilds of the real world (baked into Safari and Firefox.)  It uses an extremely efficient application of the 'Divide and Conquer' concept to sort lists of elements.  Let's give merge sort a shot!

Let's take a look at [this video](https://youtu.be/cDNqk4tdvqQ?t=39s).  Can you see how merge-sort works?

Merge Sort works on the basic principal of dividing your list into sub-lists (recursively) until your sub-lists are of length one or zero.  Once your sub-lists are at that size, you merge with a neighboring sub-list.  When you merge them, you merge them in ascending or descending order, depending on your implementation.

![Merge Sort visualization](https://webdocs.cs.ualberta.ca/~holte/T26/Lecture6Fig6.gif)

There are TWO functions that work together to accomplish a Merge Sort:

-  A mergeSort function that takes an array, splits the array in two, and calls a merge function.  The mergeSort function **is recursive**.  Try to remember the prescribed function structuring we recommended.

-  A merge function that takes two arrays as parameters, looks at the the first elements of the two lists, and assembles a resulting list based on the two lists 'zipped' together by pushing the lowest to highest valued elements. The merge function **is not recursive**.

### Make your own merge sort implementation!
Create a mergeSort that will sort a list of student names from this class!

### Resources

- [Merge sort on wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
