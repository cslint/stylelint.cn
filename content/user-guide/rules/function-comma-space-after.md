# function-comma-space-after

Require a single space or disallow whitespace after the commas of functions.

在函数的逗号之后要求有一个空格或禁止有空格。

```css
a { transform: translate(1, 1) }
/**                       ↑
 * The space after these commas */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space after the commas.

在逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate(1 , 1) }
```

### `"never"`

There *must never* be whitespace after the commas.

在逗号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate(1 , 1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
```

### `"always-single-line"`

There *must always* be a single space after the commas in single-line functions.

在单行函数的逗号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
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

### `"never-single-line"`

There *must never* be whitepace after the commas in single-line functions.

在单行函数的逗号之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate(1 , 1) }
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
  transform: translate(1
    , 1)
}
```
