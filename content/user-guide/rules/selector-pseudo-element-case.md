# selector-pseudo-element-case

Specify lowercase or uppercase for pseudo-element selectors.

指定伪元素的大小写。

```css
    a::before {}
/**    ↑
 * This is pseudo-element selector */
```

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a:Before {}
```

```css
a:bEfOrE {}
```

```css
a:BEFORE {}
```

```css
a::Before {}
```

```css
a::bEfOrE {}
```

```css
a::BEFORE {}
```

```css
input::-MOZ-PLACEHOLDER {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:before {}
```

```css
a::before {}
```

```css
input::-moz-placeholder {}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a:Before {}
```

```css
a:bEfOrE {}
```

```css
a:BEFORE {}
```

```css
a::Before {}
```

```css
a::bEfOrE {}
```

```css
a::before {}
```

```css
input::-moz-placeholder {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:BEFORE {}
```

```css
a::BEFORE {}
```

```css
input::-MOZ-PLACEHOLDER {}
```
