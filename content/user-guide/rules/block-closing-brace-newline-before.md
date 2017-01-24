# block-closing-brace-newline-before

Require a newline or disallow whitespace before the closing brace of blocks.

在闭括号之前要求有一个换行符或禁止有空格。

```css
    a { color: pink;
    }
/** ↑
 * The newline before this brace */
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline before the closing brace.

在闭括号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink;
}
```

```css
a {
color: pink;
}
```

### `"always-multi-line"`

There *must always* be a newline before the closing brace in multi-line blocks.

在多行声明块的闭括号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
color: pink;}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink;
}
```

### `"never-multi-line"`

There *must never* be whitespace before the closing brace in multi-line blocks.

在多行声明块的闭括号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a {
color: pink;}
```
