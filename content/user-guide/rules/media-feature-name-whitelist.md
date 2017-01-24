# media-feature-name-whitelist

Specify a whitelist of allowed media feature names.

指定允许使用的 media 特性名称的白名单。

```css
@media (min-width: 700px) {}
/**     ↑
 * These media feature names */
```

**Caveat:** Media feature names within a [range context](https://www.w3.org/TR/mediaqueries-4/#mq-ranges) are currently ignored.

**警告：**含有[范围上下文](https://www.w3.org/TR/mediaqueries-4/#mq-ranges)的 media 特性名称目前是被忽略的。

## Options

```js
array|string|regex: ["array", "of", "unprefixed", "media-features" or "regex"]|"media-feature"|/regex/
```

Given:

给出：

```js
["max-width", "/^my-/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (min-width: 50em) {}
```

```css
@media print and (min-resolution: 300dpi) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width: 50em) {}
```

```css
@media (my-width: 50em) {}
```
