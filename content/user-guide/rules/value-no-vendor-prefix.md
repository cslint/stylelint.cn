# value-no-vendor-prefix

Disallow vendor prefixes for values.

禁止给值添加浏览器引擎前缀。

```css
a { display: -webkit-flex; }
/**          ↑
 *  These prefixes */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { display: -webkit-flex; }
```

```css
a { max-width: -moz-max-content; }
```

```css
a { background: -webkit-linear-gradient(bottom, #000, #fff); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { display: flex; }
```

```css
a { max-width: max-content; }
```

```css
a { background: linear-gradient(bottom, #000, #fff); }
```
