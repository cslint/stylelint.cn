# media-feature-no-missing-punctuation

Disallow missing punctuation for non-boolean media features.

禁止非布尔类型的 media 特性缺少标点。

```css
@media (max-width: 600px) {}
/**              ↑
 * This punctuation */
```

This rule ensures that there is either a colon or a range operator in non-boolean media features.

该规则确保在非布尔类型的 media 特性中有一个冒号或范围操作符。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width 600px) {}
```

```css
@media (width   20em) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width: 600px) {}
```

```css
@media (width  >=  20em) {}
```
