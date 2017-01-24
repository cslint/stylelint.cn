# selector-max-empty-lines

Limit the number of adjacent empty lines within selectors.

限制选择器中相邻空行数量。

```css
a,
              /* ← */
b {        /* ↑ */
  color: red; /* ↑ */
}             /* ↑ */
/**              ↑
 *        This empty line */
```

## Options

`int`: Maximum number of empty lines.

`int`：所允许的最大空行数。

For example, with `0`:

例如，`0`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a

b {
  color: red;
}
```

```css
a,

b {
  color: red;
}
```

```css
a

>
b {
  color: red;
}
```

```css
a
>

b {
  color: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a b {
  color: red;
}
```

```css
a
b {
  color: red;
}
```

```css
a,
b {
  color: red;
}
```

```css
a > b {
  color: red;
}
```

```css
a
>
b {
  color: red;
}
```
