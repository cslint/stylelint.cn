# declaration-no-important

Disallow `!important` within declarations.

禁止在声明中使用 `!important`。

```css
a { color: pink !important; }
/**             ↑
 * This !important */
```

If you always want `!important` in your declarations, e.g. if you're writing [user styles](https://userstyles.org/), you can *safely* add them using [`postcss-safe-important`](https://github.com/crimx/postcss-safe-important).

如果你总想在你的声明中使用 `!important`，比如，你写[user styles](https://userstyles.org/)，你可以使用 [`postcss-safe-important`](https://github.com/crimx/postcss-safe-important) *安全地* 添加它们。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink !important; }
```

```css
a { color: pink ! important; }
```

```css
a { color: pink!important; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```
