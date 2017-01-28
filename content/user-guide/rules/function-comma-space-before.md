# function-comma-space-before

Require a single space or disallow whitespace before the commas of functions.

在函数的逗号之前要求有一个空格或禁止有空白。

```css
a { transform: translate(1 ,1) }
/**                        ↑
 * The space before these commas */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space before the commas.

在逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1, 1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1 ,1) }
```

```css
a { transform: translate(1 , 1) }
```

### `"never"`

There *must never* be whitespace before the commas.

在逗号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1 ,1) }
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
a { transform: translate(1, 1) }
```

### `"always-single-line"`

There *must always* be a single space before the commas in single-line functions.

在单行函数的逗号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1, 1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1 ,1) }
```

```css
a { transform: translate(1 , 1) }
```

```css
a {
  transform: translate(1,
    1)
}
```

### `"never-single-line"`

There *must never* be whitepace before the commas in single-line functions.

在单行函数的逗号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1 ,1) }
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
a { transform: translate(1, 1) }
```

```css
a {
  transform: translate(1 ,
    1)
}
```
