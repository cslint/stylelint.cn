# block-opening-brace-space-before

Require a single space or disallow whitespace before the opening brace of blocks.

在开括号之前要求有一个空格或禁止有空格。

```css
  a { color: pink; }
/** ↑
 * The space before this brace */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a single space before the opening brace.

在开括号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{ color: pink; }
```

```css
a
{ color: pink; }
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

### `"never"`

There *must never* be whitespace before the opening brace.

在开括号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a
{ color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a{ color: pink; }
```

```css
a{
color: pink; }
```

### `"always-single-line"`

There *must always* be a single space before the opening brace in single-line blocks.

在单行块的开括号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{ color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a{
color: pink; }
```

### `"never-single-line"`

There *must never* be whitespace before the opening brace in single-line blocks.

在单行块的开括号之前禁止有空格。

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

There *must always* be a single space before the opening brace in multi-line blocks.

在多行块的开括号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a{
color: pink; }
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

### `"never-multi-line"`

There *must never* be whitespace before the opening brace in multi-line blocks.

在多行块的开括号之前禁止有空格。

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

## Optional secondary options

### `ignoreAtRules: ["/regex/", "non-regex"]`

Given:

给出

```js
["/fo/"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@for ...
{}
```

```css
@for ...{}
```