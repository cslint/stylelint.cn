# declaration-bang-space-before

Require a single space or disallow whitespace before the bang of declarations.

在感叹号之前要求有一个空格或禁止有空格。

```css
a { color: pink !important; }
/**             ↑
 * The space before this exclamation mark */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the bang.

在感叹号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink!important; }
```

```css
a { color: pink  ! important; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink !important; }
```

```css
a { color:pink ! important; }
```

### `"never"`

There *must never* be whitespace before the bang.

在感叹号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color : pink !important; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink!important; }
```

```css
a { color: pink! important; }
```
