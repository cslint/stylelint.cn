# rule-non-nested-empty-line-before

Require or disallow an empty line before non-nested rules.

在非嵌套的规则之前要求或禁止有空行。

```css
a {}
      /* ← */
b {}  /* ↑ */
/**      ↑
 * This line */
```

If the rule is the very first node in a stylesheet then it is ignored.

如果某条规则是样式表中的第一个节点，那么它将被忽略。

## Options

```js
string: "always"|"never"|"always-multi-line"|"never-multi-line"
```

### `"always"`

There *must always* be an empty line before rules.

在规则之前禁止有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {} b {}
```

```css
a {}
b {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}

b {}
```

### `"never"`

There *must never* be an empty line before rules.

在规则之前禁止有空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}

b {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {} b {}
```

```css
a {}
b {}
```

### `"always-multi-line"`

There *must always* be an empty line before multi-line rules.

在多行规则之前必须有一个行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a
{}
b
{}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
{}

b
{}
```

### `"never-multi-line"`

There *must never* be an empty line before multi-line rules.

在多行规则之前禁止有空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a
{}

b
{}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
{}
b
{}
```

## Optional secondary options

### `ignore: ["after-comment"]`

Ignore rules that come after a comment.

该规则忽略注释之后的块。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a
{}
/* comment */
b
{}
```

```css
a
{}
/* comment */

b
{}
```

## Optional secondary options

### `except: ["after-single-line-comment"]`

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/* comment */

a
{}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/* comment */
a
{}
```
