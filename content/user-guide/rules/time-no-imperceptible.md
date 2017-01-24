# time-no-imperceptible

Disallow `animation` and `transition` less than or equal to 100ms.

禁止 `animation` 和 `transition` 小于或等于 100ms。

```css
a { animation: slip-n-slide 150ms linear; }
/**                         ↑
 *                  This time */
```

This rule checks `transition-duration`, `transition-delay`, `animation-duration`, `animation-delay`, and those times as they manifest in the `transition` and `animation` shorthands.

该规则检查 `transition-duration`，`transition-delay`，`animation-duration`，`animation-delay` 和出现在 `transition` 和 `animation` 缩写中的时间。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { animation: 80ms; }
```

```css
a { transition-duration: 0.08s; }
```

```css
a { transition: background-color 6ms linear; }
```

```css
a { animation: horse-dance 1s linear 0.01s; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { animation: 8s; }
```

```css
a { transition-duration: 0.8s; }
```

```css
a { transition: background-color 600ms linear; }
```

```css
a { animation: horse-dance 1s linear 1.3s; }
```
