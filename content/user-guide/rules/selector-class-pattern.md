# selector-class-pattern

Specify a pattern for class selectors.

为类选择器指定一个匹配模式。

```css
    .foo, #bar.baz span, #hoo[disabled] { color: pink; }
/** ↑         ↑
 * These class selectors */
```

This rule ignores non-ouputting Less mixin definitions and called Less mixins.

该规则忽略非输出性的 Less mixin 定义和调用。

## Options

```js
regex|string
```

A string will be translated into a RegExp — `new RegExp(yourString)` — so *be sure to escape properly*.

字符串将被转换为一个正则表达式 - `new RegExp(yourString)` - 因此，*请确保对属性进行转义*。

The selector value *after `.`* will be checked. No need to include `.` in your pattern.

 *`.` 之后的* 选择器的值将被检查。无需把 `.` 包含在你的匹配模式中。


Given the string:

给出：

```js
"foo-[a-z]+"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.foop {}
```

```css
.foo-BAR {}
```

```css
div > #zing + .foo-BAR {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo-bar {}
```

```css
div > #zing + .foo-bar {}
```

```css
#foop {}
```

```css
[foo='bar'] {}
```

```less
.foop() {}
```

```less
.foo-bar {
  .foop;
}
```

## Optional secondary options

### `resolveNestedSelectors: true | false` (default: `false`)

This option will resolve nested selectors with `&` interpolation.

该选项将解决使用 `&` 插值进行嵌套的选择器。 

For example, with `true`.

例如，在 `true` 选项下。

Given the string:

给出：

```js
"^[A-Z]+$"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
.A {
  &__B {} /* resolved to ".A__B" */
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.A {
  &B {} /* resolved to ".AB" */
}
```
