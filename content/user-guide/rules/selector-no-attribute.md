# selector-no-attribute

Disallow attribute selectors.

禁用特性选择器。

```css
    [rel="external"] {}
/** ↑
 * This type of selector */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[foo] {}
```

```css
[rel="external"] {}
```

```css
a,
[type="text"] {}
```

```css
a > [foo] {}
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
#bar {}
```
