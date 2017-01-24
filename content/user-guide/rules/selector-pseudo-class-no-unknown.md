# selector-pseudo-class-no-unknown

Disallow unknown pseudo-class selectors.

禁止使用未知的伪类选择器。

```css
    a:hover {}
/**    ↑
 * This pseudo-class selector */
```

This rule considers pseudo-class selectors defined in the CSS Specifications, up to and including Editor's Drafts, to be known.

该规则只考虑 CSS 规范包括草案中定义的伪类选择器。

All vendor-prefixed pseudo-class selectors are ignored.

所有的带有浏览器引擎前缀的伪类选择器都被忽略。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a:unknown {}
```

```css
a:UNKNOWN {}
```

```css
a:hoverr {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:hover {}
```

```css
a:focus {}
```

```css
:not(p) {}
```

```css
input:-moz-placeholder {}
```

## Optional secondary options

### `ignorePseudoClasses: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "pseudo-class"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:pseudo-class {}
```

```css
a:my-pseudo {}
```

```css
a:my-other-pseudo {}
```
