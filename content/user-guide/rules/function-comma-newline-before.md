# function-comma-newline-before

Require a newline or disallow whitespace before the commas of functions.

在函数的逗号之前要求有一个换行符或禁止有空白。

```css
  a { transform: translate(1
    , 1) }
/** ↑
 * These commas */
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline before the commas.

在逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,1) }
```

```css
a { transform: translate(1 ,1) }
```

```css
a { transform: translate(1,
  1) }
```

The following patterns are *not* considered warnings:

```css
a {
  transform: translate(1
    ,1)
}
```

```css
a {
  transform: translate(1
    , 1)
}
```

### `"always-multi-line"`

There *must always* be a newline before the commas in multi-line functions.

在多行函数的逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,
  1) }
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
    ,1)
}
```

```css
a {
  transform: translate(1
    , 1)
}
```

### `"never-multi-line"`

There *must never* be a whitespace before the commas in multi-line functions.

在多行函数的逗号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1 ,
  1) }
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
