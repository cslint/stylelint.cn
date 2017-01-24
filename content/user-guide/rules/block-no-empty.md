# block-no-empty

Disallow empty blocks.

禁止出现空块。

```css
 a { }
/** ↑
 * Blocks like this */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}
```

```css
a { }
```

```css
@media print { a {} }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
@media print { a { color: pink; } }
```
