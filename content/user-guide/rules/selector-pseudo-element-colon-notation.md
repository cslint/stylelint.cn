# selector-pseudo-element-colon-notation

Specify single or double colon notation for applicable pseudo-elements.

指定伪元素使用单冒号还是双冒号。

```css
   a::before { color:pink; }
/** ↑
 * This notation */
```

The `::` notation was chosen for *pseudo-elements* to establish a discrimination between *pseudo-classes* (which subclass existing elements) and *pseudo-elements* (which are elements not represented in the document tree).

*伪元素* 选择使用 `::` 符号是为了区别开 *伪类* 和 *伪元素*。

However, for compatibility with existing style sheets, user agents also accept the previous one-colon notation for *pseudo-elements* introduced in CSS levels 1 and 2 (namely, `:first-line`, `:first-letter`, `:before` and `:after`).

然而，为了与现有样式表保持兼容，用户代理(user agent)也接受 CSS 1 he 2 中的 *伪元素* 使用单冒号。

## Options

```js
string: "single"|"double"
```

### `"single"`

Applicable pseudo-elements *must always* use the single colon notation.

伪元素必须使用单冒号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a::before { color: pink; }
```

```css
a::after { color: pink; }
```

```css
a::first-letter { color: pink; }
```

```css
a::first-line { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:before { color: pink; }
```

```css
a:after { color: pink; }
```

```css
a:first-letter { color: pink; }
```

```css
a:first-line { color: pink; }
```

```css
input::placeholder { color: pink; }
```

```css
li::marker { font-variant-numeric: tabular-nums; }
```

### `"double"`

Applicable pseudo-elements *must always* use the double colon notation.

伪元素必须使用双冒号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a:before { color: pink; }
```

```css
a:after { color: pink; }
```

```css
a:first-letter { color: pink; }
```

```css
a:first-line { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a::before { color: pink; }
```

```css
a::after { color: pink; }
```

```css
a::first-letter { color: pink; }
```

```css
a::first-line { color: pink; }
```

```css
input::placeholder { color: pink; }
```

```css
li::marker { font-variant-numeric: tabular-nums; }
```
