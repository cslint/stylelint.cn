# selector-pseudo-class-parentheses-space-inside

Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.

在伪类选择器的括号内要求使用一个空格或禁止有空白。

```css
input:not( [type="submit"] ) {}
/**      ↑                 ↑
 * The space inside these two parentheses */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space inside the parentheses.

在括号内必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
input:not([type="submit"]) {}
```

```css
input:not([type="submit"] ) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
input:not( [type="submit"] ) {}
```

### `"never"`

There *must never* be whitespace on the inside the parentheses.

在括号内禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
input:not( [type="submit"] ) {}
```

```css
input:not( [type="submit"]) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
input:not([type="submit"]) {}
```
