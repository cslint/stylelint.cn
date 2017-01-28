# media-query-list-comma-newline-after

Require a newline or disallow whitespace after the commas of media query lists.

在媒体查询的逗号之后要求有一个换行符或禁止有空白。

```css
@media screen and (color),
  projection {}       /* ↑ */
/**                      ↑
 *            These commas */
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
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color)
, projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color),
projection and (color) {}
```

```css
@media screen and (color)
,
projection and (color) {}
```

### `"always-multi-line"`

There *must always* be a newline after the commas in multi-line media query lists.

在多行媒体查询列表的逗号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color)
, projection and (color) {}
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

```css
@media screen and (color)
,
projection and (color) {}
```

### `"never-multi-line"`

There *must never* be a whitespace after the commas in multi-line media query lists.

在多行媒体查询列表的逗号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color),
projection and (color) {}
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
@media screen and (color)
,projection and (color) {}
```
