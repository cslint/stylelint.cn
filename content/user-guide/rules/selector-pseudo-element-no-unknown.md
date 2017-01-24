# selector-pseudo-element-no-unknown

Disallow unknown pseudo-element selectors.

禁止使用未知的伪元素。

```css
    a::before {}
/**    ↑
 * This pseudo-element selector */
```

This rule considers pseudo-element selectors defined in the CSS Specifications, up to and including Editor's Drafts, to be known.

该规则只考虑 CSS 规范包括草案中定义的伪元素选择器。

All vendor-prefixed pseudo-element selectors are ignored.

所有的带有浏览器引擎前缀的伪元素选择器都被忽略。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a::pseudo {}
```

```css
a::PSEUDO {}
```

```css
a::element {}
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
::selection {}
```

```css
input::-moz-placeholder {}
```

## Optional secondary options

### `ignorePseudoElements: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "pseudo-element"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a::pseudo-element {}
```

```css
a::my-pseudo {}
```

```css
a::my-other-pseudo {}
```
