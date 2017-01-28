# declaration-colon-space-after

Require a single space or disallow whitespace after the colon of declarations.

在冒号之后要求有一个空格或禁止有空白。

```css
a { color: pink }
/**      ↑
 * The space after this colon */
```

## Options

```js
string: "always"|"never"|"always-single-line"
```

### `"always"`

There *must always* be a single space after the colon.

在冒号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color :pink }
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
a { color: pink }
```

### `"never"`

There *must never* be whitespace after the colon.

在冒号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color:pink }
```

```css
a { color :pink }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color :pink }
```

```css
a { color:pink }
```

### `"always-single-line"`

There *must always* be a single space after the colon *if the declaration's value is single-line*.

在单行值列表的冒号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  box-shadow:0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```

```css
a {
  box-shadow:
    0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```

```css
a {
  box-shadow:0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}
```
