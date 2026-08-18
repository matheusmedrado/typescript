# Top K Frequent Elements

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Sorting, Heap  

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

## Examples

**Example 1:**

```text
Input: nums = [1, 2, 2, 3, 3, 3], k = 2

Output: [2, 3]
```

**Example 2:**

```text
Input: nums = [7, 7], k = 1

Output: [7]
```

## Constraints

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`
- `1 <= k <=` número de elementos distintos em `nums`

## Hints

- Conte quantas vezes cada número aparece.
- Ordene os números pela frequência em ordem decrescente.
- Retorne apenas os `k` primeiros elementos.
