# media-query-list-comma-newline-before

Require a newline or disallow whitespace before the commas of media query lists.

在媒体查询的逗号之前要求有一个换行符或禁止有空格。

```css
    @media screen and (color)
    , projection and (color) {}
/** ↑
 * These commas */
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
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color),
projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color)
,projection and (color) {}
```

```css
@media screen and (color)
,
projection and (color) {}
```

### `"always-multi-line"`

There *must always* be a newline before the commas in multi-line media query lists.

在多行媒体查询列表的逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color),
projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

```css
@media screen and (color)
,
projection and (color) {}
```

### `"never-multi-line"`

There *must never* be whitespace before the commas in multi-line media query lists.

在多行媒体查询列表的逗号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color)
,projection and (color) {}
```

```css
@media screen and (color)
,
projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color),
projection and (color) {}
```
