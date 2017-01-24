# custom-property-no-outside-root

Disallow custom properties outside of `:root` rules.

禁止在 `:root` 规则之外使用自定义属性。

```css
    a { --foo: 1px; }
/** ↑   ↑
 * These selectors and these types of custom properties */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { --foo: 1px; }
```

```css
:root, a { --foo: 1px; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
:root { --foo: 1px; }
```
