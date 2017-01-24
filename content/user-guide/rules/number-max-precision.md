# number-max-precision

Limit the number of decimal places allowed in numbers.

限制小数位数。

```css
a { top: 3.245634px; }
/**           ↑
 * These decimal places */
```

## Options

`int`: Maximum number of decimal places allowed.

`int`：所允许的小数最大位数。

For example, with `2`:

比如，`2`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { top: 3.245px; }
```

```css
a { top: 3.245634px; }
```

```css
@media (min-width: 3.234em) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { top: 3.24px; }
```

```css
@media (min-width: 3.23em) {}
```
