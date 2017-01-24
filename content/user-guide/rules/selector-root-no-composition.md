# selector-root-no-composition

Disallow the composition of `:root` in selectors.

禁止 `:root` 混合使用。

```css
    a, :root {}
/** ↑  ↑
 * This type of composite selector */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a, :root {}
```

```css
:root + a {}
```

```css
html:root {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
:root {}
```
