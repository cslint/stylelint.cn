# declaration-bang-space-after

Require a single space or disallow whitespace after the bang of declarations.

在感叹号之后要求有一个空格或禁止有空白。

```css
a { color: pink !important; }
/**             ↑
 * The space after this exclamation mark */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space after the bang.

在感叹号之后必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink !important; }
```

```css
a { color: pink      !important; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink ! important; }
```

```css
a { color: pink! important; }
```

### `"never"`

There *must never* be whitespace after the bang.

在感叹号之后禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink ! important; }
```

```css
a { color: pink! important; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink !important; }
```

```css
a { color:pink!important; }
```
