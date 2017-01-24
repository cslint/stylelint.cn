# declaration-empty-line-before

Require or disallow an empty line before declarations.

要求或禁止在声明语句之前有空行。

```css
a {
  --foo: pink;
             /* ← */
  top: 15px; /* ↑ */   
}            /* ↑ */
/**             ↑
 *      This line */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  --foo: pink;
  top: 5px;
}
```

```css
a {
  bottom: 15px;
  top: 5px;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  --foo: pink;

  top: 5px;
}
```

```css
a {

  bottom: 15px;

  top: 5px;
}
```

### `"never"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  --foo: pink;

  bottom: 15px;
}
```

```css
a {

  bottom: 15px;

  top: 5px;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  --foo: pink;
  bottom: 15px;
}
```

```css
a {
  bottom: 15px;
  top: 5px;
}
```

## Optional secondary options

### `except: ["after-comment", "after-declaration", "first-nested"]`

#### `"after-comment"`

Reverse the primary option for declarations that come after a comment.

在注释之后的声明，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  /* comment */

  top: 5px;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  /* comment */
  top: 5px;
}

```

#### `"after-declaration"`

Reverse the primary option for declarations that come after another declaration.

对于在另一声明之后的声明，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  bottom: 15px;

  top: 5px;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {

  bottom: 15px;
  top: 5px;
}
```

#### `"first-nested"`

Reverse the primary option for declarations that are nested and the first child of their parent node.

对嵌套的声明和第一个子节点是注释的节点，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  bottom: 15px;

  top: 5px;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  bottom: 15px;

  top: 5px;
}
```

### `ignore: ["after-comment", "after-declaration", "inside-single-line-block"]`

#### `"after-comment"`

Ignore declarations that are preceded by comments.

忽略声明之前有注释的情况。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式被认为是个警告：

```css
a {
  /* comment */
  bottom: 15px;
}
```

#### `"after-declaration"`

Ignore declarations that are preceded by declarations, to allow for multiple declaration sets in the same block.

忽略声明之前的声明，以允许在同一个块中的多个声明。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {

  bottom: 15px;
  top: 15px;
}
```

```css
a {

  bottom: 15px;

  top: 15px;
}
```

```css
a {

  color: orange;
  text-decoration: none;

  bottom: 15px;
  top: 15px;
}
```

#### `"inside-single-line-block"`

Ignore declarations that are inside single-line blocks.

忽略单行空中的声明。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { bottom: 15px; top: 5px; }
```
