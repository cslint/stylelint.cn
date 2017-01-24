# at-rule-empty-line-before

Require or disallow an empty line before at-rules.

要求或禁止在 at 规则之前有空行。

```css
a {}
          /* ← */
@media {} /* ↑ */
/**          ↑
 *   This line */
```

If the at-rule is the very first node in a stylesheet then it is ignored.

如果 at 规则是样式表中的第一个节点，它将被忽略。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be an empty line before at-rules.

在 at 规则之前必须有一行空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {} @media {}
```

```css
a {}
@media {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}

@media {}
```

### `"never"`

There *must never* be an empty line before at-rules.

在 at 规则之前禁止有空行。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}

@media {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {} @media {}
```

```css
a {}
@media {}
```

## Optional secondary options

### `except: ["all-nested", "blockless-after-same-name-blockless", "blockless-group", "first-nested"]`

### `"all-nested"`

Reverse the primary option for at-rules that are nested.

对于嵌套的 at 规则，颠倒主选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  @extend foo;
  color: pink;
}

b {
  color: pink;

  @extend foo;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  @extend foo;
  color: pink;
}

b {
  color: pink;
  @extend foo;
}
```

#### `"blockless-after-same-name-blockless"`

Reverse the primary option for blockless at-rules that follow another blockless at-rule with the same name.

对于不在块内的 at 规则，而且这个 at 规则紧随另一个同名的不在块内的 at 规则。

This means that you can group your blockless at-rules by name.

这意味着你可以对非块内的 at 规则根据名称进行分组。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式被认为是个警告：

```css
@charset "UTF-8";

@import url(x.css);
@import url(y.css);
```

```css
a {

  @extends .foo;
  @extends .bar;

  @include loop;
  @include doo;
}
```

#### `"blockless-group"`

Reverse the primary option for at-rules within a blockless group.

对于非块内的 at 规则，颠倒主选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import url(x.css);

@import url(y.css);

@media print {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@import url(x.css);
@import url(y.css);

@media print {}
```

#### `"first-nested"`

Reverse the primary option for at-rules that are nested and the first child of their parent node.

对于嵌套的而且是父节点中的第一个子节点的 at 规则，颠倒注选项功能。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {

  @extend foo;
  color: pink;
}

b {
  color: pink;
  @extend foo;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  @extend foo;
  color: pink;
}

b {
  color: pink;

  @extend foo;
}
```

### `ignore: ["after-comment", "all-nested", "blockless-after-same-name-blockless", "blockless-group",]`

#### `"after-comment"`

Ignore at-rules that come after a comment.

忽略注释之后的 at 规则。

The following patterns are *not* considered warnings:

以下模式被认为是个警告：

```css
/* comment */
@media {}
```

```css
/* comment */

@media {}
```

#### `"all-nested"`

Ignore at-rules that are nested.

忽略嵌套的 at 规则。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  @extend foo;
  color: pink;
}

a {

  @extend foo;
  color: pink;
}

b {
  color: pink;
  @extend foo;
}

b {
  color: pink;

  @extend foo;
}
```

#### `"blockless-after-same-name-blockless"`

Ignore blockless at-rules that follow another blockless at-rule with the same name.

忽略不在块内的 at 规则，而且这个 at 规则紧随另一个同名的不在块内的 at 规则。

This means that you can group your blockless at-rules by name.

这意味着你可以对非块内的 at 规则根据名称进行分组。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式被认为是个警告：

```css

@charset "UTF-8";

@import url(x.css);
@import url(y.css);
```

```css
a {

  @extends .foo;
  @extends .bar;

  @include loop;
  @include doo;
}
```

#### `"blockless-group"`

Ignore at-rules within a blockless group.

忽略不在块内的 at 规则。

For example, with `"always"`:

例如，在 `"always"` 选项下：

The following patterns are *not* considered warnings:

以下模式正常：

```css
@import url(x.css);

@import url(y.css);

@media print {}
```

```css
@import url(x.css);
@import url(y.css);

@media print {}
```

### `ignoreAtRules: ["array", "of", "at-rules"]`

Ignore specified at-rules.

忽略指定的 at 规则。

For example, with `"always"`.

例如，在 `"always"` 选项下。

Given:

给出：

```js
["import"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset "UTF-8";
@import {}
```
