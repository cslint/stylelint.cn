# selector-type-no-unknown

Disallow unknown type selectors.

禁用未知的类型选择器。

```css
    unknown {}
/** ↑
 * This type selector */
```

This rule considers tags defined in the HTML and SVG Specifications to be known.

该规则考虑 HTML 和 SVG 标准中已知的标签。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
unknown {}
```

```css
tag {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
input {}
```

```css
ul li {}
```

```css
li > a {}
```

## Optional secondary options

### `ignoreTypes: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom-type"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
custom-type {}
```

```css
my-type {}
```

```css
my-other-type {}
```
