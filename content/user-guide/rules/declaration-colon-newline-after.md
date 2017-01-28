# declaration-colon-newline-after

Require a newline or disallow whitespace after the colon of declarations.

在冒号之后要求有一个换行符或禁止有空白。

```css
a {
  box-shadow:
    0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}        /* ↑ */
/**         ↑
 * The newline after this colon */
```

## Options

```js
string: "always"|"always-multi-line"
```

### `"always"`

There *must always* be a newline after the colon.

在冒号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color:pink; }
```

```css
a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color:
    pink;
}
```

### `"always-multi-line"`

There *must always* be a newline after the colon *if the declaration's value is multi-line*.

在多行值列表的冒号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  box-shadow: 0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  box-shadow:
    0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```

```css
a {
  color: pink;
}
```
