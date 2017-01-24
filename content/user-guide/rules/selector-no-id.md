# selector-no-id

Disallow id selectors.

禁用 id 选择器。

```css
    #foo {}
/** ↑
 * This type of selector */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
#foo {}
```

```css
.bar > #foo {}
```

```css
#foo.bar {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
```

```css
.foo {}
```

```css
[foo] {}
```
