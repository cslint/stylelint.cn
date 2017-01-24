# selector-no-universal

Disallow the universal selector.

禁用通配符选择器。

```css
    * {}
/** ↑
 * This selector */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
* {}
```

```css
*, .foo {}
```

```css
* > [foo] {}
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

```css
#foo {}
```

```css
.bar > #foo {}
```
