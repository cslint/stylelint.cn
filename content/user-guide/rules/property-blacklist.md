# property-blacklist

Specify a blacklist of disallowed properties.

指定一个禁止使用的属性的黑名单。

```css
a { text-rendering: optimizeLegibility; }
/** ↑
 * These properties */
```

## Options

```js
array|string: ["array", "of", "unprefixed", "properties" or "regex"]|"property"|"/regex/"
```

If a string is surrounded with `"/"` (e.g. `"/^background/"`), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: `/^background/` will match `background`, `background-size`, `background-color`, etc.

如果一个字符串被 `"/"` (如，`"/^background/"`) 包围，它将被解释为一个正则表达式。例如，这将允许简单地匹配简写： `/^background/` 将匹配 `background`，`background-size`，`background-color` 等。

Given:

给出：

```js
[ "text-rendering", "animation", "/^background/" ]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { text-rendering: optimizeLegibility; }
```

```css
a {
  animation: my-animation 2s;
  color: pink;
}
```

```css
a { -webkit-animation: my-animation 2s; }
```

```css
a { background: pink; }
```

```css
a { background-size: cover; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { no-background: sure; }
```
