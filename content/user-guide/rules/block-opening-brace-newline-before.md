# block-opening-brace-newline-before

Require a newline or disallow whitespace before the opening brace of blocks.

在括开号之前要求有一个换行符或禁止有空白。

```css
  a
    { color: pink; }
/** ↑
 * The newline before this brace */
```

## Options

```js
string: "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline before the opening brace.

在开括号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{ color: pink; }
```

```css
a{ color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
{ color: pink; }
```

```css
a
{
color: pink; }
```

```css
a /* foo */
  {
    color: pink;
  }
```

### `"always-single-line"`

There *must always* be a newline before the opening brace in single-line blocks.

在单行块的开括号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{ color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
{ color: pink; }
```

```css
a{
color: pink; }
```

### `"never-single-line"`

There *must never* be whitespace before the opening brace in single-line blocks.

在单行块的开括号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a{ color: pink; }
```

```css
a {
color: pink; }
```

### `"always-multi-line"`

There *must always* be a newline before the opening brace in multi-line blocks.

在多行块的开括号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{
color: pink; }
```

```css
a {
color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a{ color: pink; }
```

```css
a { color: pink; }
```

```css
a
{ color: pink; }
```

```css
a
{
color: pink; }
```

### `"never-multi-line"`

There *must never* be whitespace before the opening brace in multi-line blocks.

在多行块的开括号之前禁止有空白。

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
a{
color: pink;}
```
