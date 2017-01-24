# media-query-list-comma-space-after

Require a single space or disallow whitespace after the commas of media query lists.

在媒体查询的逗号之后要求有一个空格或禁止有空格。

```css
@media screen and (color), projection and (color) {}
/**                      ↑
 *            These commas */
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
@media screen and (color),projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color)
, projection and (color) {}
```

### `"never"`

There *must never* be whitepace after the commas.

在逗号之后禁止有空格。

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
@media screen and (color),projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

### `"always-single-line"`

There *must always* be a single space after the commas in single-line media query lists.

在单行媒体查询列表中的逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color),projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color), projection and (color) {}
```

```css
@media screen and (color)
, projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

### `"never-single-line"`

There *must never* be whitepace after the commas in single-line media query lists.

在单行媒体查询列表中的逗号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color), projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color),projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

```css
@media screen and (color)
, projection and (color) {}
```
