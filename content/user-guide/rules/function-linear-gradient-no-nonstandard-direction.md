# function-linear-gradient-no-nonstandard-direction

Disallow direction values in `linear-gradient()` calls that are not valid according to the
[standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).

根据[标准语法](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax)，禁止 `linear-gradient()` 中无效的方向值。

```css
.foo { background: linear-gradient(to top, #fff, #000); }
/**                                ↑
 * This (optional) first argument is the "direction" */
```

A valid and standard direction value is one of the following:

一个有效和标准的方向值是下列值其中之一：

-   an angle
-   角度
-   `to ` plus a side-or-corner (`to top`, `to bottom`, `to left`, `to right`; `to top right`, `to right top`, `to bottom left`, etc.)
-   `to ` 加边或拐角 (`to top`，`to bottom`，`to left`，`to right`；`to top right`，`to right top`，`to bottom left` 等)

A common mistake (matching outdated non-standard syntax) is to use just a side-or-corner without the preceding `to`.

一个常见的错误(匹配过时的非标准语法)是在边或拐角之前缺少 `to`。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.foo { background: linear-gradient(top, #fff, #000); }
```

```css
.foo { background: linear-gradient(bottom, #fff, #000); }
```

```css
.foo { background: linear-gradient(left, #fff, #000); }
```

```css
.foo { background: linear-gradient(45, #fff, #000); }
```

```css
.foo { background: linear-gradient(to top top, #fff, #000); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo { background: linear-gradient(to top, #fff, #000); }
```

```css
.foo { background: linear-gradient(to bottom right, #fff, #000); }
```

```css
.foo { background: linear-gradient(45deg, #fff, #000); }
```

```css
.foo { background: linear-gradient(1.57rad, #fff, #000); }
```

```css
/* Direction defaults to "to bottom" */
.foo { background: linear-gradient(#fff, #000); }
```
