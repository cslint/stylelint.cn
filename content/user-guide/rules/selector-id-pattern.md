# selector-id-pattern

Specify a pattern for id selectors.

指定一个 id 选择器的匹配模式。

```css
.foo, #bar.baz a, #hoo[disabled] { color: pink; }
/**   ↑           ↑
 * These id selectors */
```

## Options

```js
regex|string
```

A string will be translated into a RegExp — `new RegExp(yourString)` — so *be sure to escape properly*.

字符串将被转换为一个正则表达式 - `new RegExp(yourString)` - 因此，*请确保对属性进行转义*。

The selector value *after `#`* will be checked. No need to include `#` in your pattern.

*`#` 之后的* 选择器的值将被检查。无需把 `#` 包含在你的匹配模式中。

Given the string:

给出：

```js
"foo-[a-z]+"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
#foop {}
```

```css
#foo-BAR {}
```

```css
div > .zing + #foo-BAR {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
#foo-bar {}
```

```css
div > .zing + #foo-bar {}
```

```css
.foop {}
```

```css
[foo='bar'] {}
```
