# rule-nested-empty-line-before

Require or disallow an empty line before nested rules.

在嵌套的规则之前要求或禁止有空行。

```css
@media {
       /* ← */
  a {} /* ↑ */
}      /* ↑ */
/**       ↑
 * This line */
```

## Options

```js
string: "always"|"never"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be an empty line before rules.

在规则之前必须有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media { a {} }
```

```css
@media {
  a {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {

  a {}
}
```

### `"never"`

There *must never* be an empty line before rules.

在规则之前禁止有空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media { a {} }
```

```css
@media {

  a {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {
  a {}
}
```

### `"always-multi-line"`

There *must always* be an empty line before multi-line rules.

在多行规则之前必须有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media {
  a {
    color: pink;
    top: 0;
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {

  a {
    color: pink;
    top: 0;
  }
}
```

### `"never-multi-line"`

There *must never* be an empty line before multi-line rules.

在多行规则之前禁止有空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media {

  a {
    color: pink;
    top: 0;
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {
  a {
    color: pink;
    top: 0;
  }
}
```

## Optional secondary options

### `except: ["first-nested"]`

Reverse the primary option if the rule is the first in a block.

如果某条规则是块中第一个节点，颠倒主选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media {

  a {}

  b {}

  c {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {
  a {}

  b {}

  c {}
}
```

### `except: ["after-rule"]`

Reverse the primary option if the rule comes after another rule.

如果某条规则是另一个规则之后，颠倒主选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media {
  color: red;
  a {}
  b {}
  c {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {
  color: red;

  a {}
  b {}
  c {}
}
```

### `ignore: ["after-comment"]`

Ignore rules that come after a comment.

该规则忽略注释之后的块。

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media {
  /* comment */
  a {}
}
```

```css
@media {
  /* comment */

  a {}
}
```
