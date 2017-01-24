# declaration-property-value-whitelist

Specify a whitelist of allowed property and value pairs within declarations.

指定一个在声明中允许使用的属性和值的白名单。

```css
a { text-transform: uppercase; }
/** ↑               ↑
 * These properties and these values */
```

## Options

```js
object: {
  "unprefixed-property-name": ["array", "of", "values"],
  "unprefixed-property-name": ["/regex/", "non-regex"]
}
```

If a property name is surrounded with `"/"` (e.g. `"/^animation/"`), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: `/^animation/` will match `animation`, `animation-duration`, `animation-timing-function`, etc.

如果一个字符串被 `"/"` (如，`"/^animation/"`) 包围，它将被解释为一个正则表达式。例如，这将允许简单地匹配简写： `/^animation/` 将匹配 `animation`，`animation-duration`，`animation-timing-function` 等。

The same goes for values. Keep in mind that a regular expression value is matched against the entire value of the declaration, not specific parts of it. For example, a value like `"10px solid rgba( 255 , 0 , 0 , 0.5 )"` will *not* match `"/^solid/"` (notice beginning of the line boundary) but *will* match `"/\\s+solid\\s+/"` or `"/\\bsolid\\b/"`.

这样的处理同样适用于值。记住，一个正则表达式匹配整个值，而不是特定的某一部分。比如，`"10px solid rgba( 255 , 0 , 0 , 0.5 )"` 不会匹配 `"/^solid/"`，但会匹配 `"/\\s+solid\\s+/"` 或 `"/\\bsolid\\b/"`。

Be careful with regex matching not to accidentally consider quoted string values and `url()` arguments. For example, `"/red/"` will match value such as `"1px dotted red"` as well as `"\"foo\""` and `"white url(/mysite.com/red.png)"`.

注意，正则表达式匹配不考虑引号内的字符串和 `url()` 中的参数，比如，`"/red/"` 不匹配像 `"1px dotted red"`，`"\"foo\""` 和  `"white url(/mysite.com/red.png)"` 的值，

Given:

给出：

```js
{
  "transform": ["/scale/"],
  "whitespace": ["nowrap"],
  "/color/": ["/^green/"]
}
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { whitespace: pre; }
```

```css
a { transform: translate(1, 1); }
```

```css
a { -webkit-transform: translate(1, 1); }
```

```css
a { color: pink; }
```

```css
a { background-color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { whitespace: nowrap; }
```

```css
a { transform: scale(1, 1); }
```

```css
a { -webkit-transform: scale(1, 1); }
```

```css
a { color: green; }
```

```css
a { background-color: green; }
```

```css
a { background: pink; }
```
