# color-hex-length

Specify short or long notation for hex colors.

指定十六进制颜色是否使用缩写。

```css
a { color: #fff }
/**        ↑
 * These hex colors */
```

## Options

```js
string: "short"|"long"
```

### `"short"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #ffffff; }
```

```css
a { color: #fffffaa; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: #fff; }
```

```css
a { color: #fffa; }
```

```css
a { color: #a4a4a4; }
```

### `"long"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #fff; }
```

```css
a { color: #fffa; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: #ffffff; }
```

```css
a { color: #fffffaa; }
```
