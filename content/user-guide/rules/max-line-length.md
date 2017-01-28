# max-line-length

Limit the length of a line.

限制单行的长度。

```css
a { color: red }
/**            ↑
 *       The end */
```

Lines that exceed the maximum length but contain no whitespace (other than at the beginning of the line) are ignored.

超过最大长度但不包含空白(除了一行的开始)的行将被忽略。

When evaluating the line length, `url(...)` functions are collapsed into just `url()`, because typically you have no control over the length of its argument. This means that long `url()` functions should not contribute to warnings.

当评估行的长度时，`url(...)` 函数的长度等于 `url()` 的长度，因为通常你无法控制参数的长度。这就意味着 `url()`，函数不应该导致警告。

## Options

`int`: Maximum number of characters allowed.

`int`：所允许的最大值。

For example, with `20`:

例如，`20`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: 0; top: 0; }
```

```css
a {
  background: linear-gradient(red, blue);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: 0;
  top: 0;
}
```

```css
a {
  background: url(a-url-that-is-over-20-characters-long);
}
```

## Optional secondary options

### `ignore: ["non-comments"]`

Only enforce the line-length limit for lines within comments.

只限制含有注释的行的长度。

This does not apply to comments that are stuck in between other stuff, only to lines that begin at the beginning or in the middle of a comment.

该选项并不适用于在其它代码直接的注释，只适用于在注释开头或中间位置的行。

For example, with a maximum length of `30`.

例如，在最大长度为 `30` 的限制下。

The following patterns are considered warnings:

以下模式被认为是个警告：

Each have only one warning.

以下每个都有一个警告。

```css
/* This line is too long for my rule */
a { color: pink; background: orange; }
a { color: pink; /* this comment is also long but not on its own line */ }
```

```css
a { color: pink; background: orange; }
/**
 * This line is short,
 * but this line is too long for my liking,
 * though this one is fine
 */
a { color: pink; /* this comment is also long but not on its own line */ }
```

### `ignore: ["comments"]`

Only enforce the line-length limit for lines that are not comments.

限制不含注释的行的长度。

This also applies to comments that are between code on the same line.

该选项只适用于同一行代码之间的注释。

For example, with a maximum length of `30`.

例如，在最大长度 `30` 的限制下。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; } /* comment that is too long */
```

```css
a { /* this comment is too long for the max length */ }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/* comment that is too long for my rule*/
a { color: pink; }
```

```css
/*
 * comment that is too long the max length
 * comment that is too long the max length 
 *
 */
a { color: pink; }
```
