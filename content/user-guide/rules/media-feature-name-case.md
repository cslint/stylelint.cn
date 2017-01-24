# media-feature-name-case

Specify lowercase or uppercase for media feature names.

指定 media 特性名称的大小写。

```css
@media (min-width: 700px) {}
/**     ↑
 * These media feature names */
```

**Caveat:** Media feature names within a range context are currently ignored.

**警告：**含有范围上下文的 media 特性名称目前是被忽略的。

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (MIN-WIDTH: 700px) {}
```

```css
@media not all and (MONOCHROME) {}
```

```css
@media (min-width: 700px) and (ORIENTATION: landscape) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (min-width: 700px) {}
```

```css
@media not all and (monochrome) {}
```

```css
@media (min-width: 700px) and (orientation: landscape) {}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (min-width: 700px) {}
```

```css
@media not all and (monochrome) {}
```

```css
@media (MIN-WIDTH: 700px) and (orientation: landscape) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (MIN-WIDTH: 700px) {}
```

```css
@media not all and (MONOCHROME) {}
```

```css
@media (MIN-WIDTH: 700px) and (ORIENTATION: landscape) {}
```
