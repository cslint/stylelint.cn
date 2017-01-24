# selector-list-comma-space-before

Require a single space or disallow whitespace before the commas of selector lists.

要求在选择器列表的逗号之前有一个空格，或禁止有空白。

```css
   a ,b { color: pink; }
/**  ↑
 * The space before this comma */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space before the commas.

在逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a,b { color: pink; }
```

```css
a, b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a ,b { color: pink; }
```

```css
a , b { color: pink; }
```

### `"never"`

There *must never* be whitespace before the commas.

在逗号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a ,b { color: pink; }
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
a, b { color: pink; }
```

### `"always-single-line"`

There *must always* be a single space before the commas in single-line selector lists.

在单行选择器列表的逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a,b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a,
b { color: pink; }
```

### `"never-single-line"`

There *must never* be a single space before the commas in single-line selector lists.

在单行选择器列表的逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a ,b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a ,
b { color: pink; }
```
