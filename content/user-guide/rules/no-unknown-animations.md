# no-unknown-animations

Disallow animation names that do not correspond to a `@keyframes` declaration.

禁止动画名称与 `@keyframes` 声明不符。

```css
a { animation-name: fancy-slide; }
/**                    ↑
 *   This animation name */

a { animation: fancy-slide 2s linear; }
/**                    ↑
 *           And this one */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { animation-name: fancy-slide; }
```

```css
a { animation: fancy-slide 2s linear; }
```

```css
a { animation-name: fancccy-slide; }
@keyframes fancy-slide {}
```

```css
a { animation: linear 100ms fancccy-slide; }
@keyframes fancy-slide {}
```

```css
a { animation-name: jump; }
@keyframes fancy-slide {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { animation-name: fancy-slide; }
@keyframes fancy-slide {}
```

```css
@keyframes fancy-slide {}
a { animation-name: fancy-slide; }
```

```css
@keyframes fancy-slide {}
a { animation: fancy-slide 2s linear; }
```

```css
a { animation: 100ms steps(12, end) fancy-slide; }
@keyframes fancy-slide {}
```
