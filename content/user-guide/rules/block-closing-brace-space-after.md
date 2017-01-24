# block-closing-brace-space-after

Require a single space or disallow whitespace after the closing brace of blocks.

在闭括号之后要求有一个空格或禁止有空格。

```css
a { color: pink; }
/**              ↑
 * The space after this brace */
```

This rule allows a trailing semicolon after the closing brace of a block. For example,

该规则允许闭括号之后一个拖尾分号。比如：

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
string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a single space after the closing brace.

在闭括号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }b { color: red; }
```

```css
a { color: pink; }
b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; } b { color: red; }
```

### `"never"`

There *must never* be whitespace after the closing brace.

在闭括号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; } b { color: red; }
```

```css
a { color: pink; }
b { color: red; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }b { color: red; }
```

```css
a { color: pink;
}b { color: red; }
```

### `"always-single-line"`

There *must always* be a single space after the closing brace in single-line blocks.

在单行块的闭括号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }b { color: red; }
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

### `"never-single-line"`

There *must never* be whitespace after the closing brace in single-line blocks.

在单行块的闭括号之后禁止有空格。

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

There *must always* be a single space after the closing brace in multi-line blocks.

在多行块的闭括号之后必须有一个空格。

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
} b { color: red; }
```

### `"never-multi-line"`

There *must never* be whitespace after the closing brace in multi-line blocks.

在多行块的闭括号之后禁止有空格。

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
