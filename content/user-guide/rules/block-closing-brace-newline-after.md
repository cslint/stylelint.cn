# block-closing-brace-newline-after

Require a newline or disallow whitespace after the closing brace of blocks.

在闭括号之后要求有一个换行符或禁止有空白。

```css
a { color: pink; }
a { color: red; }↑
/**              ↑
 * The newline after this brace */
```

This rule allows an end-of-line comment separated from the closing brace by spaces, as long as the comment contains no newlines. For example,

该规则允许行尾注释和闭括号直接有空格，前提是注释中不含有换行符。例如，

```css
a {
  color: pink;
} /* end-of-line comment */
```

This rule allows a trailing semicolon after the closing brace of a block. For example,

该规则允许闭括号之后又一个拖尾分号。例如，

```css
:root {
  --toolbar-theme: {
    background-color: hsl(120, 70%, 95%);
  };
/* ↑
 * This semicolon */  
}
```

## Options

```js
string: "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline after the closing brace.

在在多行声明块的闭括号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }b { color: red; }
```

```css
a { color: pink;
} b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
b { color: red; }
```

### `"always-single-line"`

There *must always* be a newline after the closing brace in single-line blocks.

在单行声明块的闭括号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; } b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink;
} b { color: red; }
```

```css
a { color: pink; }
b { color: red; }
```

### `"never-single-line"`

There *must never* be whitespace after the closing brace in single-line blocks.

在单行声明块的闭括号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; } b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }b { color: red; }
```

```css
a { color: pink;
} b { color: red; }
```

### `"always-multi-line"`

There *must always* be a newline after the closing brace in multi-line blocks.

在多行声明块的闭括号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;
}b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }b { color: red; }
```

```css
a { color: pink;
}
b { color: red; }
```

### `"never-multi-line"`

There *must never* be whitespace after the closing brace in multi-line blocks.

在多行声明块的闭括号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;
} b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; } b { color: red; }
```

```css
a { color: pink;
}b { color: red; }
```

## Optional secondary options

### `ignoreAtRules: ["/regex/", "non-regex"]`

Ignore specified at-rules.

忽略指定的 at 规则。

For example, with `"always"` or `"always-multi-line"`.

比如，在 `"always"` 或 `"always-multi-line"` 选项下。

Given:

给出：

```js
["if", "else"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@if ($var) {
  color: pink;
} @else if ($var2) {
  color: red;
} @else {
  color: blue;
}
```

```css
@if ($var) { color: pink; } @else { color: blue; }
```
