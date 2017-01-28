# selector-list-comma-newline-before

Require a newline or disallow whitespace before the commas of selector lists.

要求选择器列表的逗号之前有一个换行符或禁止在逗号之前有空白。

```css
    a
    , b { color: pink; }
/** ↑
 * The newline before this comma */
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline before the commas.

在逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a, b { color: pink; }
```

```css
a,
b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
, b { color: pink; }
```

```css
a
,b { color: pink; }
```

### `"always-multi-line"`

There *must always* be a newline before the commas in multi-line selector lists.

在多行选择器列表中，在逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a,
b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a, b { color: pink; }
```

```css
a
,b { color: pink; }
```

```css
a
,
b { color: pink; }
```

### `"never-multi-line"`

There *must never* be whitespace before the commas in multi-line selector lists.

在多行选择器列表中，在逗号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a
, b { color: pink; }
```

```css
a
,
b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a,b { color: pink; }
```

```css
a,
b { color: pink; }
```
