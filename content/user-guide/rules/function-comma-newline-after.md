# function-comma-newline-after

Require a newline or disallow whitespace after the commas of functions.

在函数的逗号之后要求有一个换行符或禁止有空格。

```css
a { transform: translate(1,
  1) }                 /* ↑ */
/**                       ↑
 *             These commas */
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline after the commas.

在逗号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
```

```css
a { transform: translate(1
  ,1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  transform: translate(1,
    1)
}
```

### `"always-multi-line"`

There *must always* be a newline after the commas in multi-line functions.

在多行函数的逗号之后必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1
  ,1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
```

```css
a {
  transform: translate(1,
    1)
}
```

### `"never-multi-line"`

There *must never* be a whitespace after the commas in multi-line functions.

在多行函数的逗号之后禁止有空格。**（译者：这里应该是换行符）**

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1
  , 1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate(1 , 1) }
```

```css
a {
  transform: translate(1
    ,1)
}
```
