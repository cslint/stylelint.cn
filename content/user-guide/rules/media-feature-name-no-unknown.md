# media-feature-name-no-unknown

Disallow unknown media feature names.

禁止使用未知的 media 特性名称。

```css
@media (min-width: 700px) {}
/**     ↑
 * These media feature names */
```

This rule considers media feature names defined in the CSS Specifications, up to and including Editor's Drafts, to be known.

该规则只考虑 CSS 规范包括草案中定义的 media 特性名称。

All vendor-prefixed media feature names are ignored.

所有带有浏览器引擎前缀的 media 特性名称都被忽略。

**Caveat:** Media feature names within a [range context](https://www.w3.org/TR/mediaqueries-4/#mq-ranges) are currently ignored.

**警告：**含有[范围上下文](https://www.w3.org/TR/mediaqueries-4/#mq-ranges)的 media 特性名称目前是被忽略的。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media screen and (unknown) {}
```

```css
@media screen and (unknown: 10px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css  
@media all and (monochrome) {}
```

```css  
@media (min-width: 700px) {}
```

```css
@media (MIN-WIDTH: 700px) {}
```

```css
@media (min-width: 700px) and (orientation: landscape) {}
```

```css
@media (-webkit-min-device-pixel-ratio: 2) {}
```

## Optional secondary options

### `ignoreMediaFeatureNames: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media screen and (my-media-feature-name) {}
```

```css
@media screen and (MY-MEDIA-FEATURE-NAME) {}
```

```css
@media screen and (custom: 10px) {}
```

```css
@media (min-width: 700px) and (custom: 10px) {}
```
