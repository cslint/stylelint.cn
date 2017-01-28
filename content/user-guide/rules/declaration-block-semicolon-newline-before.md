# declaration-block-semicolon-newline-before

Require a newline or disallow whitespace before the semicolons of declaration blocks.

在声明块的分号之前要求有一个换行符或禁止有空白。

```css
  a {
    color: pink
    ; top: 0;
  } ↑
/** ↑
 * The newline before this semicolon */
```

This rule ignores semicolons that are preceded by Less mixins.

该规则忽略 Less mixins 之后的分号。

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline before the semicolons.

在分号之前必须有个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a {
  color: pink; top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink
; }
```

```css
a {
  color: pink
  ; top: 0;
}
```

### `"always-multi-line"`

There *must always* be a newline before the semicolons in multi-line declaration blocks.

在多行声明块的分号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  color: pink; top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

```css
a {
  color: pink
  ; top: 0;
}
```

### `"never-multi-line"`

There *must never* be whitespace before the semicolons in multi-line declaration blocks.

在多行声明块的分号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  color: pink
  ; top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

```css
a {
  color: pink;
  top: 0;
}
```
