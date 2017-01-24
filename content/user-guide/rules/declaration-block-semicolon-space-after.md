# declaration-block-semicolon-space-after

Require a single space or disallow whitespace after the semicolons of declaration blocks.

在声明块的分号之后要求有一个空格或禁止有空格。

```css
a { color: pink; top: 0; }
/**            ↑
 * The space after this semicolon */
```

This rule ignores semicolons that are preceded by Less mixins.

该规则忽略 Less mixins 之后的分号。

This rule ignores the last semicolon of declaration blocks. Use the `block-closing-brace-*-before` rules to control the whitespace between the last semicolon and the closing brace instead.

该规则忽略声明块中的最后一个分号。使用 `block-closing-brace-*-before` 规则控制最后一个分号和闭括号之间的空格。

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space after the semicolon.

在分号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;top: 0; }
```

```css
a {
  color: pink;
  top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink;}
```

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

### `"never"`

There *must never* be whitespace after the semicolon.

在分号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; top: 0; }
```

```css
a {
  color: pink;
  top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink;}
```

```css
a { color: pink; }
```

```css
a { color: pink;top: 0; }
```

### `"always-single-line"`

There *must always* be a single space after the semicolon in single-line declaration blocks.

在单行声明块中的分号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink;top: 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; top: 0; }
```

```css
a {
  color: pink;
  top: 0;
}
```

### `"never-single-line"`

There *must never* be whitespace after the semicolon in single-line declaration blocks.

在单行声明块中的分号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; top: 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink;top: 0; }
```

```css
a {
  color: pink;
  top: 0;
}
```
