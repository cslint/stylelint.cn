# no-duplicate-selectors

Disallow duplicate selectors within a stylesheet.

在一个样式表中禁止出现重复的选择器。

```css
    .foo {} .bar {} .foo {}
/** ↑              ↑
 * These duplicates */
```

This rule checks for two types of duplication:

该规则检查以下两种类型的重复情况：

-   Duplication of a single selector with a rule's selector list, e.g. `a, b, a {}`.
-   在同一个选择器列表中的单个选择器的重复，如 `a, b, a {}`.
-   Duplication of a selector list within a stylesheet, e.g. `a, b {} a, b {}`. Duplicates are found even if the selectors come in different orders or have different spacing, e.g. `a d, b > c {} b>c, a   d {}`.
-   在样式表中一个选择器列表的重复，如 `a, b {} a, b {}`。即使选择器以不同的顺序出现，或有不同的空格，也会被认为是重复的，如 `a d, b > c {} b>c, a   d {}`。

The same selector *is* allowed to repeat in the following circumstances:

以下情况，允许出现重复的选择器：

-   It is used in different selector lists, e.g. `a {} a, b {}`.
-   不同的选择器列表，如 `a {} a, b {}`.
-   The duplicates are determined to originate in different stylesheets, e.g. you have concatenated or compiled files in a way that produces sourcemaps for PostCSS to read, e.g. postcss-import.
-   重复源自于不同的样式表，比如，你有连接或编译的文件产生了源映射供 PostCSS 阅读，如 postcss-import。
-   The duplicates are in rules with different parent nodes, e.g. inside and outside of a media query.
-   重复的选择器的父节点不同，如在媒体查询内和在媒体查询外。

This rule resolves nested selectors. So `a b {} a { & b {} }` counts as a warning, because the resolved selectors end up with a duplicate.

该规则适用于嵌套的选择器。因此 `a b {} a { & b {} }` 会引起警告，因为出现了重复。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.foo,
.bar,
.foo {}
```

```css
.foo {}
.bar {}
.foo {}
```

```css
.foo .bar {}
.bar {}
.foo .bar {}
```

```css
@media (min-width: 10px) {
  .foo {}
  .foo {}
}
```

```css
.foo, .bar {}
.bar, .foo {}
```

```css
a .foo, b + .bar {}
b+.bar,
a
  .foo {}
```

```css
a b {}
a {
  & b {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo {}
@media (min-width: 10px) {
  .foo {}
}
```

```css
.foo {
  .foo {}
}
```

```css
.foo {}
.bar {}
.foo .bar {}
.bar .foo {}
```

```css
a b {}
a {
  & b,
  & c {}
}
```
