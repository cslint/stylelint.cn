# declaration-block-semicolon-newline-after

Require a newline or disallow whitespace after the semicolons of declaration blocks.

在声明块的分号之后要求有一个换行符或禁止有空白。

```css
a {
  color: pink;
  top: 0;    ↑
}            ↑
/**          ↑
 * The newline after this semicolon */
```

This rule ignores semicolons that are preceded by Less mixins.

该规则忽略 Less mixins 之后的分号。

This rule ignores the last semicolon of declaration blocks. Use the `block-closing-brace-*-before` rules to control the whitespace between the last semicolon and the closing brace instead.

该规则忽略声明块中的最后一个分号。使用 `block-closing-brace-*-before` 规则控制最后一个分号和闭括号之间的空格。

This rule allows an end-of-line comment followed by a newline. For example,

该规则允许行尾注释后面带有一个换行符。比如：

```css
a {
  color: pink; /* end-of-line comment */
  top: 0;
}
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline after the semicolon.

在分号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; top: 0; }
```

```css
a {
  color: pink; /* end-of-line comment
    containing a newline */
  top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
  top: 0;
}
```

```css
a {
  color: pink; /* end-of-line comment */
  top: 0;
}
```

### `"always-multi-line"`

There *must always* be a newline after the semicolon in multi-line declaration blocks.

在多行声明块的分号之后必须有一个换行符。

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
  color: pink;
  top: 0;
}
```

### `"never-multi-line"`

There *must never* be whitespace after the semicolon in multi-line declaration blocks.

在多行声明块的分号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  color: pink;
  top: 0;
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
