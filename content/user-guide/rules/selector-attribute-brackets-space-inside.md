# selector-attribute-brackets-space-inside

Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.

在特性(attribute) 选择器的方括号内要求有空格或禁止有空格。

```css
    [ target=_blank ]
/** ↑               ↑
 * The space inside these two brackets */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space inside the brackets.

在方括号内必须有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[target] {}
```

```css
[ target] {}
```

```css
[target ] {}
```

```css
[target=_blank] {}
```

```css
[ target=_blank] {}
```

```css
[target=_blank ] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[ target ] {}
```

```css
[ target=_blank ] {}
```

### `"never"`

There *must never* be whitespace on the inside the brackets.

在方括号内禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[ target] {}
```

```css
[target ] {}
```

```css
[ target ] {}
```

```css
[ target=_blank] {}
```

```css
[target=_blank ] {}
```

```css
[ target=_blank ] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[target] {}
```

```css
[target=_blank] {}
```
