# function-max-empty-lines

Limit the number of adjacent empty lines within functions.

限制函数中相邻的空行数量。

```css
a {
  transform:
    translate(
                /* ← */
      1,        /* ↑ */ 
                /* ← */
      1         /* ↑ */
                /* ← */
    );          /* ↑ */
}               /* ↑ */
/**                ↑
 *            These lines */
```

## Options

`int`: Maximum number of characters allowed.

`int`：所允许的最大值。

For example, with `0`:

比如，`0`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  transform:
    translate(

      1,
      1
    );
}
```

```css
a {
  transform:
    translate(
      1,

      1
    );
}
```

```css
a {
  transform:
    translate(
      1,
      1

    );
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  transform: 
    translate(
      1, 
      1
    );
}
```
