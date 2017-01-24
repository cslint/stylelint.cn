# selector-pseudo-class-whitelist

Specify a whitelist of allowed pseudo-class selectors.

指定一个允许使用的伪类选择器的白名单。

```css
  a:hover {}
/** ↑
 * These pseudo-class selectors */
```

This rule ignores selectors that use variable interpolation e.g. `:#{$variable} {}`.

该规则忽略使用变量插值的选择器，如，`:#{$variable} {}`。

## Options

```js
array|string|regex: ["array", "of", "unprefixed", "pseudo-classes" or "regex"]|"pseudo-class"|/regex/
```

If a string is surrounded with `"/"` (e.g. `"/^nth-/"`), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: `/^nth-/` will match `nth-child`, `nth-last-child`, `nth-of-type`, etc.

如果一个字符串被 "/" (如，"/^nth-/") 包围，它将被解释为一个正则表达式。例如，这将允许简单地匹配简写： /^nth-/ 将匹配 nth-child，nth-last-child，nth-of-type 等。

Given:

给出：

```js
["hover", "/^nth-/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a:focus {}
```

```css
a:first-of-type {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a:hover {}
```

```css
a:nth-of-type(5) {}
```

```css
a:nth-child(2) {}
```
