# at-rule-name-newline-after

Require a newline after at-rule names.

要求在 at 规则之后有一个换行符。

```css
    @media
   /*↑*/  (max-width: 600px) {}
/**  ↑
 * The newline after this at-rule name */
```

## Options

```js
string: "always"|"always-multi-line"
```

### `"always"`

There *must always* be a newline after at-rule names.

在 at 规则名称之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@charset "UTF-8";
```

```css
@media (min-width: 700px) and
  (orientation: landscape) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset
  "UTF-8";
```

```css
@import
  "x.css" screen and
 (orientation:landscape);
```

```css
@media
  (min-width: 700px) and (orientation: landscape) {}
```

```css
@media
  (min-width: 700px) and
  (orientation: landscape) {}
```

### `"always-multi-line"`

There *must always* be a newline after at-rule names in multiline-line at-rule blocks.

在多行 at 规则块中的 at 规则名称之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import "x.css" screen and
 (orientation:landscape);
```

```css
@media (min-width: 700px) and
 (orientation: landscape) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset "UTF-8";
```

```css
@charset
  "UTF-8";
```

```css
@import "x.css" screen and (orientation:landscape);
```

```css
@media (min-width: 700px) and (orientation: landscape) {}
```

```css
@media
  (min-width: 700px) and
  (orientation: landscape) {}
```
