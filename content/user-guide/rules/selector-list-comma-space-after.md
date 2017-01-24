# selector-list-comma-space-after

Require a single space or disallow whitespace after the commas of selector lists.

要求在选择器列表的逗号之后有一个空格，或禁止有空白。

```css
   a, b { color: pink; }
/** ↑
 * The space after this comma */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space after the commas.

在逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a,b { color: pink; }
```

```css
a ,b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a, b { color: pink; }
```

```css
a , b { color: pink; }
```

### `"never"`

There *must never* be whitespace after the commas.

在逗号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a, b { color: pink; }
```

```css
a , b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a,b { color: pink; }
```

```css
a ,b { color: pink; }
```

### `"always-single-line"`

There *must always* be a single space after the commas in single-line selector lists.

在单行选择器列表的逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a,b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
,b { color: pink; }
```

### `"never-single-line"`

There *must never* be a single space after the commas in single-line selector lists.

在单行选择器列表的逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a, b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
, b { color: pink; }
```
