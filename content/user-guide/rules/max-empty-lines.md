# max-empty-lines

Limit the number of adjacent empty lines.

限制相邻空行的数量。

```css
a {}
     /* ← */
     /* ← */
a {} /* ↑ */
/**     ↑
 * These lines */
```

## Options

`int`: Maximum number of characters allowed.

`int`：所允许的最大数值。

For example, with `2`:

例如，`2`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}



b {}
```

Comment strings are also checked -- so the following is a warning:

注释字符串也会被检查，所以，以下模式是个警告：

```css
/**
 * Call me Ishmael.
 *
 *
 *
 * Some years ago -- never mind how log precisely -- ...
 */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
b {}
```

```css
a {}

b {}
```

```css
a {}


b {}
```
