# function-parentheses-space-inside

Require a single space or disallow whitespace on the inside of the parentheses of functions.

在函数的括号内要有一个空格或禁止有空格。

```css
a { transform: translate( 1, 1 ); }
/**                     ↑      ↑
 * The space inside these two parentheses */
```

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space inside the parentheses.

在括号内必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1); }
```

```css
a { transform: translate(1, 1 ); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate( 1, 1 ); }
```

### `"never"`

There *must never* be whitespace on the inside the parentheses.

在括号内禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate( 1, 1 ); }
```

```css
a { transform: translate(1, 1 ); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1); }
```

### `"always-single-line"`

There *must always* be a single space inside the parentheses of single-line functions.

在单行函数的括号内必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate(1, 1 ) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate( 1, 1 ) }
```

```css
a { transform: translate(1,
  1) }
```

```css
a {
  transform: translate(
    1,
    1
  )
}
```

### `"never-single-line"`

There *must never* be whitespace inside the parentheses of single-line functions.

在单行函数的括号内禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate( 1, 1 ) }
```

```css
a { transform: translate(1, 1 ) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate( 1,
  1) }
```

```css
a {
  transform: translate(
    1,
    1
  )
}
```
