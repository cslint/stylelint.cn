# indentation

Specify indentation.

指定缩进。

```css
   |@media print {
   |  a {
   | ↑  background-position: top left,
   | ↑ ↑  top right;
   | ↑}↑ ↑
   |}↑ ↑ ↑
/**  ↑ ↑ ↑
 * The indentation at these three points */
```

## Options

`int|"tab"`, where `int` is the number of spaces

`int|"tab"`，`int` 是空格的数量

### `2`

Always indent at-rules, rules, comments, declarations, inside parentheses and multi-line values by 2 spaces.

at 规则，规则，注释，声明，括号内和多行值总是缩进 `2` 个空格。

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
@media print {
a {
background-position: top left,
top right;
}
}
```

```css
@media print {
a {
  background-position: top left,
    top right;
  }
}
```

```css
@media print {
  a {
    background-position: top left,
    top right;
  }
}
```

```css
@media print {
  a,
    b {
    background-position: top left,
      top right;
  }
}
```

```css
a {
/* blergh */
  color: pink;
}
  /* blergh */
```

```css
@media print,
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi) {}
```

```css
a {
  color: rgb(
  255,
  255,
  255
  );
  top: 0;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media print {
  a {
    background-position: top left,
      top right;
  }
}
```

```css
@media print {
  a,
  b {
    background-position: top left,
      top right;
  }
}
```

```css
a {
  /* blergh */
  color: pink;
}
/* blergh */
```

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
  (min-resolution: 120dpi) {}
```

```css
a {
  color: rgb(
    255,
    255,
    255
  );
  top: 0;
}
```

## Optional secondary options

### `indentInsideParens: "twice"|"once-at-root-twice-in-block"`

By default, *one extra* indentation (of your specified type) is expected after newlines inside parentheses, and the closing parenthesis is expected to have no extra indentation.

默认情况下，在括号内换行是需要进行额外的缩进的，闭括号无需额外的缩进。

If you would like to change the quantity of extra indentation inside parentheses, use this option.

如果你想改变圆括号内的缩进量，使用此选项。

`"twice"` means you expect two extra indentations (of your specified type) after newlines inside parentheses, and expect the closing parenthesis to have one extra indentation. For example:

`"twice"` 意味着你想在括号换行后用两倍的额外缩进量进行缩进，闭括号无需缩进。例如：

```css
a {
  color: rgb(
      255,
      255,
      255
    );
  top: 0;
}
```

`"once-at-root-twice-in-block"` means two things: You want the behavior of `"once"`, as documented above, when the parenthetical expression is part of a node that is an immediate descendent of the root — i.e. not inside a block. And you want the behavior of `"twice"`, as documented above, when the parenthetical expression is part of a node that is inside a block. For example, with a SCSS map:

`"once-at-root-twice-in-block"` 意味着两件事情：当括号表达式是根节点的第一子节点的一部分时，如，不在一个块内时，你想使用一倍缩进，如上文描述的那样。当括号表达式是根节点的第一子节点的一部分时，但在一个块内时，你想使用两倍缩进，如上文描述的那样。例如：

```css
$foo: (
  bar: 1,
  baz: 2
);

a {
  color: rgb(
      255,
      255,
      255
    );
  top: 0;
}
```

### `indentClosingBrace: true|false`

If `true`, the closing brace of a block (rule or at-rule) will be expected at the same indentation level as the block's inner nodes.

如果为 `true`，闭括号也需要同样的缩进。

For example, with `indentClosingBrace: true`.

例如，在 `indentClosingBrace: true` 选项下。

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: pink;
}
```

```css
@media print {
  a {
    color: pink;
  }  
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
  }
```

```css
@media print {
  a {
    color: pink;
    }  
  }
```

### `except: ["block", "param", "value"]`

Do *not* indent for these things.

不要对这些情况进行缩进。

For example, with `2`.

例如，缩进 `2` 个空格。

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
  (min-resolution: 120dpi) {
  a {
    background-position: top left,
      top right;
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media print,
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi) {
a {
background-position: top left,
top right;
}
}
```

### `ignore: ["inside-parens", "param", "value"]`

#### `"inside-parens"`

Ignore the indentation inside parentheses.

忽略括号内的这些情况的缩进。

For example, with `2`.

例如，缩进 `2` 个空格。

The following patterns are *not* considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: rgb(
255,
  255,
    255
  );
  top: 0;
}
```

#### `"param"`

Ignore the indentation of at-rule params.

忽略 at 规则参数的缩进。

For example, with `2`.

例如，缩进 `2` 个空格。

The following patterns are *not* considered warnings:

以下模式被认为是有问题的：

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 120dpi) {
}
```

#### `"value"`

Ignore the indentation of values.

忽略缩进的值。

For example, with `2`.

例如，缩进 `2` 个空格。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  background-position: top left,
top right,
  bottom left,
    bottom right;
}
```
