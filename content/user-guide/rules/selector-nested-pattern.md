# selector-nested-pattern

Specify a pattern for the selectors of rules nested within rules.

指定一个嵌套选择器的匹配模式。

```css
    a {
      color: orange;
      &:hover { color: pink; }
    } ↑
/**   ↑
 * These nested selectors */
```

Non-standard selectors (e.g. selectors with Sass or Less interpolation) and selectors of rules nested within at-rules are ignored.

非标准的选择器 (如，Sass 或 Less 插值)和 at 规则中的嵌套选择器将被忽略。

## Options

```js
regex|string
```

A string will be translated into a RegExp — `new RegExp(yourString)` — so *be sure to escape properly*.

字符串将被转换为一个正则表达式 - `new RegExp(yourString)` - 因此，*请确保对属性进行转义*。

The selector value will be checked in its entirety. If you'd like to allow for combinators and commas, you must incorporate them into your pattern.

该规则检查整个选择器的值。如果你允许使用关系选择符和逗号，你必须把它们加入到你的匹配模式中。

Given the string:

给出：

```js
"^&:\(\?:hover\|focus\)$"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  .bar {}
}
```

```css
a {
  .bar:hover {}
}
```

```css
a {
  &:hover,
  &:focus {}
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  &:hover {}
}
```

```css
a {
  &:focus {}
}
```

```css
a {
  &:hover {}
  &:focus {}
}
```
