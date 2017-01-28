# function-parentheses-newline-inside

Require a newline or disallow whitespace on the inside of the parentheses of functions.

在函数的括号内要求有一个换行符或禁止有空白。

```css
  a {
    transform: translate(
      1,             /* ↑ */
      1              /* ↑ */
    );               /* ↑ */
  }                  /* ↑ */
/** ↑                   ↑
 * The newline inside these two parentheses */
```

## Options

```js
string: "always"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be a newline inside the parentheses.

在括号内必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1); }
```

```css
a { transform: translate(1,
  1
  ); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  transform: translate(
    1, 1
  );
}
```

```css
a {
  transform: translate(
    1,
    1
  );
}
```

### `"always-multi-line"`

There *must always* be a newline inside the parentheses of multi-line functions.

在多行函数的括号内必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1,
  1) }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate( 1, 1 ) }
```

```css
a {
  transform: translate(
    1, 1
  );
}
```

```css
a {
  transform: translate(
    1,
    1
  );
}
```

### `"never-multi-line"`

There *must never* be a newline inside the parentheses of multi-line functions.

在多行函数的括号内禁止有换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  transform: translate(
    1, 1
  );
}
```

```css
a {
  transform: translate(
    1,
    1
  );
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) }
```

```css
a { transform: translate( 1, 1 ) }
```

```css
a { transform: translate(1,
  1) }
```
