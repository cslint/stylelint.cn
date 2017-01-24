# at-rule-no-vendor-prefix

Disallow vendor prefixes for at-rules.

禁止 at 规则使用浏览器引擎前缀。

```css
    @-webkit-keyframes { 0% { top: 0; } }
/**  ↑
 * These prefixes */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@-webkit-keyframes { 0% { top: 0; } }
```

```css
@-ms-viewport { orientation: landscape; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@keyframes { 0% { top: 0; } }
```

```css
@viewport { orientation: landscape; }
```
