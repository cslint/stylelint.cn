# declaration-block-no-shorthand-property-overrides

Disallow shorthand properties that override related longhand properties.

禁止缩写属性覆盖相关普通写法属性。

```css
a { background-repeat: repeat; background: green; }
/**                            ↑
 * This overrides the longhand property before it */
```

In almost every case, this is just an authorial oversight. For more about this behavior, see [MDN's documentation of shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties).

在几乎所有情况下，这只是作者个人的疏忽。关于这种情况的更多信息，请查看 [MDN's documentation of shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  padding-left: 10px;
  padding: 20px;
}
```

```css
a {
  transition-property: opacity;
  transition: opacity 1s linear;
}
```

```css
a {
  border-top-width: 1px;
  top: 0;
  bottom: 3px;
  border: 2px solid blue;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { padding: 10px; padding-left: 20px; }
```

```css
a { transition-property: opacity; } a { transition: opacity 1s linear; }
```

```css
a { transition-property: opacity; -webkit-transition: opacity 1s linear; }
```
