# selector-list-comma-newline-after

Require a newline or disallow whitespace after the commas of selector lists.

要求选择器列表的逗号之后有一个换行符或禁止在逗号之后有空白。

```css
   a,
   b↑{ color: pink; }
/** ↑
 * The newline after this comma */
```

End-of-line comments are allowed one space after the comma.

对于行尾注释，允许在逗号之后有一个空格。

```css
a, /* comment */
b { color: pink; }
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline after the commas.

在逗号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a, b { color: pink; }
```

```css
a
, b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a,
b { color: pink; }
```

```css
a
,
b { color: pink; }
```

### `"always-multi-line"`

There *must always* be a newline after the commas in multi-line selector lists.

在多行选择器列表中，在逗号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a
, b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a, b { color: pink; }
```

```css
a,
b { color: pink; }
```

```css
a
,
b { color: pink; }
```

### `"never-multi-line"`

There *must never* be whitespace after the commas in multi-line selector lists.

在多行选择器列表中，在逗号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a
, b { color: pink; }
```

```css
a,
b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a,b { color: pink; }
```

```css
a
,b { color: pink; }
```
