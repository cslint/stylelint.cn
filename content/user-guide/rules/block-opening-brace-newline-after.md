# block-opening-brace-newline-after

Require a newline after the opening brace of blocks.

在开括号之后要求有一个换行符。

```css
  a {
    ↑ color: pink; }
/** ↑
 * The newline after this brace */
```

This rule allows an end-of-line comment followed by a newline. For example,

该规则允许行尾注释后面有一个换行符。例如，

```css
a { /* end-of-line comment */
  color: pink;
}
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline after the opening brace.

在开括号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{ color: pink; }
```

```css
a{ color: pink;
}
```

```css
a{ /* end-of-line comment
  with a newline */
  color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
color: pink; }
```

```css
a
{
color: pink; }
```

```css
a { /* end-of-line comment */
  color: pink;
}
```

### `"always-multi-line"`

There *must always* be a newline after the opening brace in multi-line blocks.

在多行块的开括号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a {
color: pink; }
```

### `"never-multi-line"`

There *must never* be whitespace after the opening brace in multi-line blocks.

在多行块的开括号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a {color: pink;
}
```
