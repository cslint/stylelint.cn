# selector-type-case

Specify lowercase or uppercase for type selectors.

指定类型选择器的大小写。

```css
    a {}
/** ↑
 * This is type selector */
```

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
A {}
```

```css
LI {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
```

```css
li {}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}
```

```css
li {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
A {}
```

```css
LI {}
```
