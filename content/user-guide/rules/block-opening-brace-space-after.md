# block-opening-brace-space-after

Require a single space or disallow whitespace after the opening brace of blocks.

在开括号之后要求有一个空格或禁止有空白。

```css
  a { color: pink; }
/** ↑
 * The space after this brace */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a single space after the opening brace.

在开括号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {color: pink; }
```

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
a { color: pink;
}
```

### `"never"`

There *must never* be whitespace after the opening brace.

在开括号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a {
color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {color: pink; }
```

```css
a
{color: pink; }
```

### `"always-single-line"`

There *must always* be a single space after the opening brace in single-line blocks.

在单行块的开括号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {color: pink; }
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

### `"never-single-line"`

There *must never* be whitespace after the opening brace in single-line blocks.

在单行块的开括号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {color: pink; }
```

```css
a { color: pink;
}
```

### `"always-multi-line"`

There *must always* be a single space after the opening brace in multi-line blocks.

在多行块的开括号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {color: pink; }
```

```css
a { color: pink;
}
```

### `"never-multi-line"`

There *must never* be whitespace after the opening brace in multi-line blocks.

在多行块的开括号之后禁止有空白。

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
