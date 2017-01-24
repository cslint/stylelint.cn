# block-closing-brace-empty-line-before

Require or disallow an empty line before the closing brace of blocks.

要求或禁止在闭括号之前有空行。

```css
a {
  color: pink;
  /* ← */
} /* ↑ */
/**  ↑
 * This line */
```

## Options

```js
string: "always-multi-line"|"never"
```

### `always-multi-line`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;

}
```

```css
a { color: pink; }
```

### `never`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  color: pink;

}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
}
```

```css
a { color: pink; }
```
