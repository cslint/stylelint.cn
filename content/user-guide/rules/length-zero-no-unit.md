# length-zero-no-unit

Disallow units for zero lengths.

长度为0时，禁止使用单位。

```css
a { top: 0px; }
/**      ↑↑
 * This zero and this type of length unit */
```

*Lengths* refer to distance measurements. A length is a *dimension*, which is a *number* immediately followed by a *unit identifier*. However, for zero lengths the unit identifier is optional. The length units are: `em`, `ex`, `ch`, `vw`, `vh`, `cm`, `mm`, `in`, `pt`, `pc`, `px`, `rem`, `vmin`, and `vmax`.

*长度* 指的是距离的测量值。长度是一种维度，用 *数字* 表示，后面紧跟着一个 *单位标识符*。然而，对于长度为 0 的情况，单位标识符是可选的。长度单位包括：`em`，`ex`，`ch`，`vw`，`vh`，`cm`，`mm`，`in`，`pt`，`pc`，`px`，`rem`，`vmin` 和 `vmax`。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { top: 0px }
```

```css
a { top: 0.000em }
```

The following patterns are *not* considered warnings:

以下模式是正常的：

```css
a { top: 0 } /* no unit */
```

```css
a { transition-delay: 0s; } /* dimension */
```

```css
a { top: 2in; }
```

```css
a { top: 1.001vh }
```
