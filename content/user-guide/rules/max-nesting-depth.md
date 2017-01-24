# max-nesting-depth

Limit the allowed nesting depth.

限制允许嵌套的深度。

```css
a { & > b { top: 0; }
/** ↑
 * This nesting */
```

This rule works by checking rules' and at-rules' actual "nesting depth" against your specified max. Here's how nesting depths works:

该规则检查规则和 at 规则的实际嵌套深度与你指定的最大值。以下展示嵌套深度是如何工作的：

```css
a {
  & b { /* nesting depth 1 */
    & .foo { /* nesting depth 2 */
      @media print { /* nesting depth 3 */
        & .baz { /* nesting depth 4 */
          color: pink;
        }
      }
    }
  }
}
```

Note that **root-level at-rules will *not* be included in the nesting depth calculation**, because most users would take for granted that root-level at-rules are "free" (because necessary). So both of the following `.foo` rules have a nesting depth of 2, and will therefore pass if your `max` is less than or equal to 2:

注意，**根级别的 at 规则将 *不会*被算进嵌套深度里**，因为大多数用户会理所当然地认为根级别的 at 规则是必须的。因此，下面的 `.foo` 规则嵌套深度都为 `2`，如果你的 `max` 小于等于 2，将通过规则。

```css
a {
  b { /* 1 */
    .foo {} /* 2 */
  }
}

@media print { /* ignored */
  a {
    b { /* 1 */
      .foo {} /* 2 */
    }
  }
}
```

This rule integrates into stylelint's core the functionality of the (now deprecated) plugin [`stylelint-statement-max-nesting-depth`](https://github.com/davidtheclark/stylelint-statement-max-nesting-depth).

## Options

`int`: Maximum nesting depth allowed.

`int`：所允许的最大嵌套深度。

For example, with `2`:

例如，最大嵌套深度为 `2`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  & .foo { /* 1 */
    &__foo { /* 2 */
      & > .bar {} /* 3 */
    }
  }
}
```

```css
a {
  @media print { /* 1 */
    & .foo { /* 2 */
      & .bar {} /* 3 */
    }
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  & .foo { /* 1 */
    &__foo {} /* 2 */
  }
}

a .foo__foo .bar .baz {}
```

```css
@media print {
  a {
    & .foo { /* 1 */
      &__foo {} /* 2 */
    }
  }
}
```

## Optional secondary options

### `ignore: ["at-rules-without-declaration-blocks"]`

Ignore at-rules that only wrap other rules, and do not themselves have declaration blocks.

For example, with `1`:

例如，最大嵌套深度为 `1`：

The following patterns are considered warnings:

以下模式被认为是个警告：

As the at-rules have a declarations blocks.

因为 at 规则有一个声明块。

```css
a {
  &:hover { /* 1 */
    @media (min-width: 500px) { color: pink; } /* 2 */      
  }
}
```

```css
a {
  @nest > b { /* 1 */
    .foo { color: pink; } /* 2 */      
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

As all of the following `.foo` rules would have a nesting depth of just 1.

```css
a {
  .foo { color: pink; } /* 1 */
}
```

```css
@media print { /* ignored regardless of options */
  a {
    .foo { color: pink; } /* 1 */
  }
}
```

```css
a {
  @media print { /* ignored because it's an at-rule without a declaration block of its own */
    .foo { color: pink; } /* 1 */
  }
}
```

### `ignoreAtRules: ["/regex/", "string"]`

Ignore the specified at-rules.

忽略指定的 at 规则。

For example, with `1` and given:

例如，最大嵌套深度为 `1`，给出：

```js
["/^my-/", "media"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  @import print {       /* 1 */
    b { top: 0; }       /* 2 */
  }
}
```

```css
a {
  @not-my-at-rule print {   /* 1 */
    b { top: 0; }       /* 2 */
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  @media print {      /* 1 */
    b {               /* 2 */
      c { top: 0; }   /* 3 */
    }
  }
}
```

```css
a {
  b {                 /* 1 */
    @media print {    /* 2 */
      c { top: 0; }   /* 3 */
    }
  }
}
```

```css
a {
  @my-at-rule print {  /* 1 */
    b {                /* 2 */
      c { top: 0; }    /* 3 */
    }
  }
}
```

```css
a {
  @my-other-at-rule print {  /* 1 */
    b {                      /* 2 */
      c { top: 0; }          /* 3 */
    }
  }
}
```
