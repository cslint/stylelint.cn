# property-whitelist

Specify a whitelist of allowed properties.

指定一个允许使用的属性的白名单。

```css
a { display: block; }
/** ↑
 * These properties */
```

This rule ignores variables (`$sass`, `@less`, `--custom-property`).

该规则忽略变量 (`$sass`，`@less`，`--custom-property`)。

## Options

```js
array|string: ["array", "of", "unprefixed", "properties" or "regex"]|"property"|"/regex/"
```

If a string is surrounded with `"/"` (e.g. `"/^background/"`), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: `/^background/` will match `background`, `background-size`, `background-color`, etc.

如果一个字符串被 `"/"` (如，`"/^background/"`) 包围，它将被解释为一个正则表达式。例如，这将允许简单地匹配简写： `/^background/` 将匹配 `background`，`background-size`，`background-color` 等。


Given:

给出：

```js
["display", "animation", "/^background/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a {
  animation: my-animation 2s;
  color: pink;
}
```

```css
a { borkgrund: orange; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { display: block; }
```

```css
a { -webkit-animation: my-animation 2s; }
```

```css
a {
  animation: my-animation 2s;
  -webkit-animation: my-animation 2s;
  display: block;
}
```

```css
a { background: pink; }
```

```css
a { background-color: pink; }
```
