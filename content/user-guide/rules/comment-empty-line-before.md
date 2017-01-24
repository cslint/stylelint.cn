# comment-empty-line-before

Require or disallow an empty line before comments.

要求或禁止在注释之前有空行。

```css
a {}
              /* ← */
/* comment */ /* ↑ */
/**              ↑
*        This line */
```

If the comment is the very first node in a stylesheet then it is ignored. Shared-line comments are also ignored.

如果注释是样式表中的第一个节点，它们将被忽略。跨行的注释同样也会被忽略。

If you're using a custom syntax which support single-line comments with `//`, those are ignored as well.

如果你使用支持使用 `//` 表示的单行注释的自定义语法，它们也会被忽略。

**Caveat:** Comments within *selector and value lists* are currently ignored.

**警告：**选择器和值列表中的注释目前是被忽略的。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be an empty line before comments.

在注释之前必须有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}
/* comment */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}

/* comment */
```

```css
a {} /* comment */
```

### `"never"`

There *must never* be an empty line before comments.

在注释之前禁止有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}

/* comment */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
/* comment */
```

```css
a {} /* comment */
```

## Optional secondary options

### `except: ["first-nested"]`

Reverse the primary option for comments that are nested and the first child of their parent node.

对嵌套的注释和第一个子节点是注释的节点，颠倒主选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  /* comment */
  color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  /* comment */
  color: pink;
}
```

### `ignore: ["between-comments", "stylelint-commands"]`

#### `"between-comments"`

Don't require an empty line between comments.

在注释之前不要求有空行。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  background: pink;

  /* comment */
  /* comment */
  color: #eee;
}
```

```css
a {
  background: pink;

  /* comment */

  /* comment */
  color: #eee;
}
```

#### `"stylelint-commands"`

Ignore comments that deliver commands to stylelint, e.g. `/* stylelint-disable color-no-hex */`.

忽略表达 stylelint 命令的注释 ，比如， `/* stylelint-disable color-no-hex */`。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  background: pink;
  /* not a stylelint command */
  color: #eee;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  background: pink;
  /* stylelint-disable color-no-hex */
  color: pink;
}
```
