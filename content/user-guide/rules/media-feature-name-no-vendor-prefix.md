# media-feature-name-no-vendor-prefix

Disallow vendor prefixes for media feature names.

禁止 media 特性名称带有浏览器引擎前缀。

```css
@media (-webkit-min-device-pixel-ratio: 1) {}
/**      ↑
 * These prefixes */
```

Right now this rule simply checks for prefixed *resolutions*.

到目前为止，该规则只是简单检查一下带有前缀的名称。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (-webkit-min-device-pixel-ratio: 1) {}
```

```css
@media (min--mox-device-pixel-ratio: 1) {}
```

```css
@media (-o-max-device-pixel-ratio: 1/1) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (min-resolution: 96dpi) {}
```

```css
@media (max-resolution: 900dpi) {}
```
