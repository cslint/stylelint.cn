# media-feature-range-operator-space-before

Require a single space or disallow whitespace before the range operator in media features.

在 media 特性的范围操作符之前要求有一个空格或禁止有空白。

```css
@media (max-width >= 600px) {}
/**               ↑
 * The space before this */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the range operator.

在范围操作符之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width>=600px) {}
```

```css
@media (max-width>= 600px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width >=600px) {}
```

```css
@media (max-width >= 600px) {}
```

### `"never"`

There *must never* be whitespace before the range operator.

在范围操作符之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width >=600px) {}
```

```css
@media (max-width >= 600px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width>=600px) {}
```

```css
@media (max-width>= 600px) {}
```
