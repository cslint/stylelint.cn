# at-rule-semicolon-newline-after

Require a newline after the semicolon of at-rules.

要求在 at 规则的分号之后有一个换行符。

```css
@import url("x.css");
@import url("y.css");
/**                 ↑
 * The newline after these semicolons */
```

This rule allows an end-of-line comment followed by a newline. For example:

该规则允许行尾注释后有一个换行符。例如：

```css
@import url("x.css"); /* end-of-line comment */

a {}
```

## Options

```js
string: "always"
```

### `"always"`

There *must always* be a newline after the semicolon.

在分号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import url("x.css"); @import url("y.css");
```

```css
@import url("x.css"); a {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@import url("x.css");
@import url("y.css");
```

```css
@import url("x.css"); /* end-of-line comment */
a {}
```

```css
@import url("x.css");

a {}
```
