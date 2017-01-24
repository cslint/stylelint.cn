# function-calc-no-unspaced-operator

Disallow an unspaced operator within `calc` functions.

禁止在 `calc` 函数内使用不加空格的操作符。

```css
a { top: calc(1px + 2px); }
/**               ↑
 * The space around this operator */
```

Before the operator, there must be a single whitespace or a newline plus indentation. After the operator, there must be a single whitespace or a newline.

在操作符之前，必须有个空格或换行符加缩进。在操作符之后，必须有个空格或换行符。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { top: calc(1px+2px); }
```

```css
a { top: calc(1px+ 2px); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { top: calc(1px + 2px); }
```

```css
a { top: calc(calc(1em * 2) / 3); }
```

```css
a {
  top: calc(var(--foo) +
    var(--bar));
}
```

```css
a {
  top: calc(var(--foo)
    + var(--bar));
}
```
