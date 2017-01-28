# declaration-colon-space-before

Require a single space or disallow whitespace before the colon of declarations.

在冒号之前要求有一个空格或禁止有空白。

```css
a { color :pink }
/**       ↑
 * The space before this colon */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the colon.

在冒号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink }
```

```css
a { color:pink }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color : pink }
```

```css
a { color :pink }
```

### `"never"`

There *must never* be whitespace before the colon.

在冒号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color : pink }
```

```css
a { color :pink }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink }
```

```css
a { color:pink }
```
