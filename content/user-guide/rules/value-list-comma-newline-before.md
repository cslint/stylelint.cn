# value-list-comma-newline-before

Require a newline or disallow whitespace before the commas of value lists.

在值列表的逗号之前要求有一个换行符或禁止有空白。

```css
  a { background-size: 0
    , 0; }
/** ↑
 * The newline before these commas */
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
a { background-size: 0,0; }
```

```css
a { background-size: 0,
      0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background-size: 0
      , 0; }
```

### `"always-multi-line"`

There *must always* be a newline before the commas in multi-line value lists.

在多行值列表的在逗号之前必须有一个换行符。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { background-size: 0,
      0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background-size: 0, 0; }
```

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0
      , 0; }
```

### `"never-multi-line"`

There *must never* be whitespace before the commas in multi-line value lists.

在多行值列表的在逗号之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { background-size: 0
      , 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0, 0; }
```

```css
a { background-size: 0,
      0; }
```
