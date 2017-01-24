# selector-max-compound-selectors

Limit the number of compound selectors in a selector.

限制复合选择器的数量。

```css
   div .bar[data-val] > a.baz + .boom > #lorem {}
/* ↑   ↑                ↑       ↑       ↑
   |   |                |       |       |
  Lv1 Lv2              Lv3     Lv4     Lv5  -- these are compound selectors */
```

A [compound selector](https://www.w3.org/TR/selectors4/#compound) is a chain of one or more simple (tag, class, id, universal, attribute) selectors. If there is more than one compound selector in a complete selector, they will be separated by combinators (e.g. ` `, `+`, `>`). One reason why you might want to limit the number of compound selectors is described in the [SMACSS book](http://smacss.com/book/applicability).

[复合选择器](https://www.w3.org/TR/selectors4/#compound)是一系列的简单选择器组成的。如果在一个选择器中有一个以上的复合选择器，它们将被关系选择符 (如，` `，`+`，`>`)分开。限制复合选择器的数量的一个原因在 [SMACSS book](http://smacss.com/book/applicability) 中有描述。

This rule resolves nested selectors before calculating the depth of a selector.

该规则在计算选择器深度之前解决嵌套的选择器。

`:not()` is considered one compound selector irrespective to the complexity of the selector inside it. The rule *does* process that inner selector, but does so separately, independent of the main selector.

`:not()` 被认为是个复合选择器，无关乎其内部的选择器的复杂度 。该规则会处理其内部的选择器，但是会单独地，独立于主选择器。

## Options

`int`: Maximum compound selectors allowed.

`int`：所允许的最大值。

For example, with `3`:

例如，`3`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.foo .bar .baz .lorem {}
```

```css
.foo .baz {
  & > .bar .lorem {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
div {}
```

```css
.foo div {}
```

```css
#foo #bar > #baz {}
```

```css
.foo + div :not (a b ~ c) {} /* `a b ~ c` is inside :not() and is processed separately */
```
