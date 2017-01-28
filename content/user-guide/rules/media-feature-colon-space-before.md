# media-feature-colon-space-before

Require a single space or disallow whitespace before the colon in media features.

在 media 特性中的冒号之前要求有一个空格或禁止有空白。

```css
@media (max-width :600px) {}
/**               ↑
 * The space before this colon */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the colon.

在冒号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width:600px) {}
```

```css
@media (max-width: 600px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width :600px) {}
```

```css
@media (max-width : 600px) {}
```

### `"never"`

There *must never* be whitespace before the colon.

在冒号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width :600px) {}
```

```css
@media (max-width : 600px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width:600px) {}
```

```css
@media (max-width: 600px) {}
```
