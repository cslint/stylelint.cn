# no-descending-specificity

Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.

禁止低优先级的选择器出现在高优先级的选择器之后。

```css
    #container a { top: 10px; } a { top: 0; }
/** ↑                           ↑
 * The order of these selectors represents descending specificity */
```

Source order is important in CSS, and when two selectors have the *same* specificity, the one that occurs *last* will take priority. However, the situation is different when one of the selectors has a *higher* specificity. In that case, source order does *not* matter: the selector with higher specificity will win out even if it comes first.

在 CSS 中，源的顺序是很重要的，当两个选择器有相同的优先级，后一个出现的优先。然而，当其中一个具有更高优先级时，这种情况就比较困难了。在这种情况下，源的顺序不再重要：高优先级的选择器将胜出，即使它首先出现。

The clashes of these two mechanisms for prioritization, source order and specificity, can cause some confusion when reading stylesheets. If a selector with higher specificity comes *before* the selector it overrides, we have to think harder to understand it, because it violates the source order expectation. **Stylesheets are most legible when overriding selectors always come *after* the selectors they override.** That way both mechanisms, source order and specificity, work together nicely.

这两种机制的冲突，源的顺序和优先级可能会对阅读样式表造成困扰。如果高优先级的选择器出现前面，覆盖了别的选择器，让我们很难理解，因为它违反了源的顺序表达。**当选择器出现在它要覆盖的选择器之后，样式表就变得很清晰了。**这样，两种机制，源顺序和优先级就能很好的配合工作了。

This rule enforces that practice *as best it can*. (It cannot catch every *actual* overriding selector (because it does not know the DOM structure, for one), but it can catch certain common mistakes.)

该规则执行这种最佳实践。(它无法捕获每一个覆盖选择器的情况，原因之一是它不知道 DOM 结构，但是它可以捕捉某些常见错误。)

Here's how it works: **This rule looks at the last *compound selector* in every full selector, and then compares it with other selectors in the stylesheet that end in the same way.**

这里展示它是如何工作的：**该规则在整个选择器中查找复合选择器，然后与其他选择器进行比对。**

So `.foo .bar` (whose last compound selector is `.bar`) will be compared to `.bar` and `#baz .bar`, but not to `#baz .foo` or `.bar .foo`.

因此 `.foo .bar`(其复合选择器是 `.bar`) 将与 `.bar` 和 `#baz .bar` 进行比较，但不与 `#baz .foo` 或 `.bar .foo` 进行比较。

And `a > li#wag.pit` (whose last compound selector is `li#wag.pit`) will be compared to `div li#wag.pit` and `a > b > li + li#wag.pit`, but not to `li`, or `li #wag`, etc.

 `a > li#wag.pit` (其复合选择器是 `li#wag.pit`) 将与 `div li#wag.pit` 和 `a > b > li + li#wag.pit` 进行比较，但不与 `li` 或 `li #wag` 进行比较，等。

There's one other important feature: Selectors targeting pseudo-elements are not considered comparable to similar selectors without the pseudo-element, because they target other elements on the rendered page. For example, `a::before {}` will not be compared to `a:hover {}`, because `a::before` targets a pseudo-element whereas `a:hover` targets the actual `<a>`.

还有另外一个重要特性：带有伪元素选择器不会与相同的不带有伪元素的选择器进行比较，因为它们在页面上的目标不同。例如，`a::before {}` 不会与 `a:hover {}` 进行比较，因为 `a::before` 目标是伪元素，而 `a:hover` 目标是 `<a>`。

This rule only compares rules that are within the same media context. So `a {} @media print { #baz a {} }` is fine.

该规则只比较在同一个 media 上下文内的规则。因此，`a {} @media print { #baz a {} }` 是没问题的。

This rule resolves nested selectors before calculating the specificity of the selectors.

该规则在计算选择器优先级之前解决嵌套的选择器。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
b a {}
a {}
```

```css
a + a {}
a {}
```

```css
b > a[foo] {}
a[foo] {}
```

```css
a {
  & > b {}
}
b {}
```

```css
@media print {
  #c a {}
  a {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
b a {}
```

```css
a {}
a + a {}
```

```css
a[foo] {}
b > a[foo] {}
```

```css
b {}
a {
  & > b {}
}
```

```css
a::before {}
a:hover::before {}
a {}
a:hover {}
```

```css
@media print {
  a {}
  #c a {}
}
```

```css
a {}
@media print {
  #baz a {}
}
```
