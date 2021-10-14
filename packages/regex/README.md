# `regex`

> playground with regular expressions

```
c// match a set of strings
/**
 * /pattern(what to match)/flags (the combinations of g, i, m, y, u, s)
 *
 * ^ beginning of the string
 * ? maybe a 'p'
 * | or
 * $ end of the string
 * /i (case insensitive )
 * /^Reg(exp?|ular)&/
 *
 * s flag match line breaks
 *
 */

(() => {
  /(fi|bu)zz/g;

  // '.' matches everything except line breaks
})();
```
