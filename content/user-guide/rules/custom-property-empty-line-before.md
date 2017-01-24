# custom-property-empty-line-before

Require or disallow an empty line before custom properties.

要求或禁止在自定义属性之前有一行空行。

```css
a {
  top: 10px;
                          /* ← */
  --foo: pink;            /* ↑ */
}                         /* ↑ */
/**                          ↑
 *                   This line */
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
  top: 10px;
  --foo: pink;
  --bar: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  top: 10px;

  --foo: pink;

  --bar: red;
}
```

### `"never"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  top: 10px;

  --foo: pink;

  --bar: red;
}
```

```css
a {

  --foo: pink;
  --bar: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  top: 10px;
  --foo: pink;
  --bar: red;
}
```

```css
a {
  --foo: pink;
  --bar: red;
}
```

## Optional secondary options

### `except: ["after-comment", "after-custom-property", "first-nested"]`

#### `"after-comment"`

Reverse the primary option for custom properties that come after a comment.

对于注释之后的自定义属性，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  --foo: pink;
  /* comment */

  --bar: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {

  --foo: pink;
  /* comment */
  --bar: red;
}

```

#### `"after-custom-property"`

Reverse the primary option for custom properties that come after another custom property.

对于自定义属性之后的自定义属性，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  --foo: pink;

  --bar: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {

  --foo: pink;
  --bar: red;
}
```

#### `"first-nested"`

Reverse the primary option for custom properties that are nested and the first child of their parent node.

对于嵌套的自定义属性而且是父节点的第一个子节点的，颠倒主选项功能。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  --foo: pink;

  --bar: red;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  --foo: pink;

  --bar: red;
}
```

### `ignore: ["after-comment", "inside-single-line-block"]`

#### `"after-comment"`

Ignore custom properties that are preceded by comments.

忽略注释之前的自定义属性。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  /* comment */
  --foo: pink;
}
```

#### `"inside-single-line-block"`

Ignore custom properties that are inside single-line blocks.

忽略单行块中的自定义属性。

For example, with `"always"`:

比如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { --foo: pink; --bar: red; }
```
