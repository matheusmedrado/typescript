# Group Anagrams

**Difficulty:** Medium  
**Topics:** Array, Hash Table, String, Sorting  

## Problem

Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

## Examples

**Example 1:**

```text
Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]

Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
```

**Example 2:**

```text
Input: strs = ["x"]

Output: [["x"]]
```

**Example 3:**

```text
Input: strs = [""]

Output: [[""]]
```

## Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Hints

### Hint 1

Uma solução simples é ordenar cada string e usar o resultado como chave em um hash map para agrupar as palavras. Essa abordagem tem complexidade `O(n * m log m)`, considerando `n` strings de tamanho máximo `m`.

### Hint 2

Pela definição de anagrama, importa apenas a frequência de cada caractere em uma string. Como essa informação pode ser usada para criar uma chave para cada grupo?

### Hint 3

Como o conjunto de caracteres é limitado às letras de `a` até `z`, podemos usar um array de tamanho `26` para contar a frequência de cada caractere. Esse array pode ser usado como a chave do hash map.
