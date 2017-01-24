# media-feature-colon-space-after

Require a single space or disallow whitespace after the colon in media features.

在 media 特性中的冒号之后要求有一个空格或禁止有空格。

```css
@media (max-width: 600px) {}
/**              ↑
 * The space after this colon */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space after the colon.

在冒号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width:600px) {}
```

```css
@media (max-width :600px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width: 600px) {}
```

```css
@media (max-width : 600px) {}
```

### `"never"`

There *must never* be whitespace after the colon.

在冒号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width: 600px) {}
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
@media (max-width :600px) {}
```
