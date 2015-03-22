array_flatter
====================

Description
---------------------

Simple module that prints the top N numbers of a file. 

Usage
---------------------
<code>node index.js 10 1000</code>
It actually asks to create file with **1000** numbers and print the top **10**.

Thoughts on the provided solution
---------------------
Anything involving a sort will usually take **O(nlogn)** time, which, when dealing with lots of items, will keep you waiting around for several seconds or even minutes. An O(nlogn) algorithm, for large N, simply cannot be run in realtime when users are waiting.

Finding the top N items can be done in **O(nlogk)** time, which is much, much faster than **O(nlogn)**, using a heap.