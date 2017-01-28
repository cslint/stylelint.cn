# media-query-list-comma-space-before

Require a single space or disallow whitespace before the commas of media query lists.

在媒体查询的逗号之前要求有一个空格或禁止有空白。

```css
@media screen and (color) ,projection and (color) {}
/**                       ↑
 *             These commas */
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
@media screen and (color),projection and (color) {}
```

```css
@media screen and (color)
,projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color) ,projection and (color) {}
```

```css
@media screen and (color) ,
projection and (color) {}
```

### `"never"`

There *must never* be whitepace before the commas.

在逗号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color) ,projection and (color) {}
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
@media screen and (color),
projection and (color) {}
```

### `"always-single-line"`

There *must always* be a single space before the commas in single-line media query lists.

在单行媒体查询列表中的逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color),projection and (color) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (color) ,projection and (color) {}
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

There *must never* be whitepace before the commas in single-line media query lists.

在单行媒体查询列表中的逗号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (color) , projection and (color) {}
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
