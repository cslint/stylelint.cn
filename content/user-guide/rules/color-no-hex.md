# color-no-hex

Disallow hex colors.

禁止使用十六进制颜色。

```css
a { color: #333 }
/**        ↑
 * These hex colors */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #000; }
```

```css
a { color: #fff1aa; }
```

```css
a { color: #123456aa; }
```

Hex values that are not valid also cause warnings:

无效的十六进制色值也会引发警告：

```css
a { color: #foobar; }
```

```css
a { color: #0000000000000000; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: black; }
```

```css
a { color: rgb(0, 0, 0); }
```

```css
a { color: rgba(0, 0, 0, 1); }
```
