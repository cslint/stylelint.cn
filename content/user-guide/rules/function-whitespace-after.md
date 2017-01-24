# function-whitespace-after

Require or disallow whitespace after functions.

要求或禁止在函数之后有空格。

```css
a { transform: translate(1, 1) scale(3); }
/**                           ↑
 *                   This space */
```

This rule does not check for space immediately after `)` if the very next character is `,`, `)`, or `}`, allowing some of the patterns exemplified below.

该规则不检查： `)` 之后是个空格，下一个字符是 `,` 或 `)` 或 `}`，允许以下列子中的一些模式。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be whitespace after the function.

在函数之后必须有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1)scale(3); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1) scale(3); }
```

```css
a { transform: translate(1, 1)     scale(3); }
```

```css
a {
  transform:
    translate(1, 1)
    scale(3);
}
```

```css
/* notice the two closing parentheses without a space between */
a { top: calc(1 * (1 + 3)); }
```

```css
/* notice the ), with no space after the closing parenthesis */
a { padding: calc(1 * 2px), calc(2 * 5px); }
```

```scss
/* notice the )}, with no space after the closing parenthesis */
a {
  max-height: #{($line-height) * ($lines-to-show)}em;
}
```

```less
/* notice the )}, with no space after the closing parenthesis */
a {
  max-height: ((@line-height) * (@lines-to-show))em;
}
```

### `"never"`

There *must never* be whitespace after the function.

在函数之后禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: translate(1, 1) scale(3); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: translate(1, 1)scale(3); }
```
