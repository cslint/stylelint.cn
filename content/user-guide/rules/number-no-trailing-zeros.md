# number-no-trailing-zeros

Disallow trailing zeros in numbers.

禁止数字中的拖尾 0。

```css
a { top: 0.5000px; bottom: 1.0px; }
/**         ↑                ↑
 *        These trailing zeros */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { top: 1.0px }
```

```css
a { top: 1.01000px }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { top: 1px }
```

```css
a { top: 1.01px }
```
