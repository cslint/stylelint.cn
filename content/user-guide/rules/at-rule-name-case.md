# at-rule-name-case

Specify lowercase or uppercase for at-rules names.

指定 at 规则名称的大小写。

```css
   @media (min-width: 10px) {}
/** ↑
 * These at-rule names */
```

Only lowercase at-rule names are valid in SCSS.

在 SCSS 只有小写的 at 规则名称是有效的。

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@Charset 'UTF-8';
```

```css
@cHarSeT 'UTF-8';
```

```css
@CHARSET 'UTF-8';
```

```css
@Media (min-width: 50em) {}
```

```css
@mEdIa (min-width: 50em) {}
```

```css
@MEDIA (min-width: 50em) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset 'UTF-8';
```

```css
@media (min-width: 50em) {}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@Charset 'UTF-8';
```

```css
@cHarSeT 'UTF-8';
```

```css
@charset 'UTF-8';
```

```css
@Media (min-width: 50em) {}
```

```css
@mEdIa (min-width: 50em) {}
```

```css
@media (min-width: 50em) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@CHARSET 'UTF-8';
```

```css
@MEDIA (min-width: 50em) {}
```
