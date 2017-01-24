# at-rule-name-space-after

Require a single space after at-rule names.

要求在 at 规则之后有一个空格。

```css
@media (max-width: 600px) {}
/**   ↑
 * The space after at-rule names */
```

## Options

```js
string: "always"|"always-single-line"
```

### `"always"`

There *must always* be a single space after at-rule names.

在 at 规则名称之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@charset"UTF-8";
```

```css
@media(min-width: 700px) {}
```

```css
@media  (min-width: 700px) {}
```

```css
@media 
(min-width: 700px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset "UTF-8";
```

```css
@import url("x.css");
```

```css
@media (min-width: 700px) {}
```

### `"always-single-line"`

There *must always* be a single space after at-rule names in single-line declaration blocks.

在多行 at 规则块中的 at 规则名称之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@charset"UTF-8";
```

```css
@media(min-width: 700px) {}
```

```css
@media  (min-width: 700px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset "UTF-8";
```

```css
@import url("x.css");
```

```css
@media (min-width: 700px) {}
```

```css
@media 
(min-width: 700px) {}
```

```css
@media(min-width: 700px) and
  (orientation: portrait) {}
```

```css
@media
  (min-width: 700px) and
  (orientation: portrait) {}
```
