# selector-descendant-combinator-no-non-space

Disallow non-space characters for descendant combinators of selectors.

禁止包含选择符出现非空格字符。

```css
.foo .bar .baz {}
/** ↑    ↑
* These descendant combinators */
```

This rule ensures that only a single space is used and ensures no tabs, newlines, nor multiple spaces are used for descendant combinators of selectors.

该规则确保包含选择符只使用一个空格，而且保证没有 tab，换行符或多个空格。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.foo  .bar {}
```

```css
.foo
.bar {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo .bar {}
```
