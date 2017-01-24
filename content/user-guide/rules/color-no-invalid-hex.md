# color-no-invalid-hex

Disallow invalid hex colors.

禁止使用无效的十六进制颜色。

```css
a { color: #y3 }
/**        ↑
 * These hex colors */
```

Longhand hex colors can be either 6 or 8 (with alpha channel) hexadecimal characters. And their shorthand variants are 3 and 4 characters respectively.

十六进制颜色普通写法可以是 6 或 8（带有 alpha 通道）个十六进制字符。它们对应的简写形式分别为 3 和 4个字符。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #00; }
```

```css
a { color: #fff1az; }
```

```css
a { color: #12345aa; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: #000; }
```

```css
a { color: #000f; }
```

```css
a { color: #fff1a0; }
```

```css
a { color: #123450aa; }
```
