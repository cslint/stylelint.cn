# selector-max-specificity

Limit the specificity of selectors.

限制选择器的优先级。(**注：**此处将specificity译为“优先级”更好理解)

```css
    .foo, #bar.baz span, #hoo { color: pink; }
/** ↑     ↑              ↑
 * Each of these selectors */
```

Visit the [Specificity Calculator](https://specificity.keegan.st) for visual representation of selector specificity.

访问 [Specificity Calculator](https://specificity.keegan.st)，对其有个视觉上的认识。

This rule ignores selectors with variable interpolation (`#{$var}`, `@{var}`, `$(var)`).

该规则忽略变量插值 (`#{$var}`，`@{var}`，`$(var)`)。

This rule ignores selectors containing the `:not()` or `:matches()` pseudo-classes.

该规则忽略包含 `:not()` 或 `:matches()` 伪类的选择器。

This rule resolves nested selectors before calculating the specificity of a selector.

该规则在计算选择器优先级之前解决嵌套的选择器。

## Options

`string`: Maximum specificity allowed.

`string`：所允许的最大数量。

Format is `"id,class,type"`, as laid out in the [W3C selector spec](https://drafts.csswg.org/selectors/#specificity-rules).

格式为 `"id,class,type"`，依据[W3C selector spec](https://drafts.csswg.org/selectors/#specificity-rules)。

For example, with `"0,2,0"`:

例如，`"0,2,0"`：

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
#foo {}
```

```css
.foo .baz .bar {}
```

```css
.foo .baz {
  & .bar {}
}
```

```css
.foo {
  color: red;
  @nest .baz .bar & {
    color: blue;
  }
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
.foo div {
  & div a {}
}
```

```css
.foo {
  & .baz {}
}
```

```css
.foo {
  color: red;
  @nest .baz & {
    color: blue;
  }
}
```
