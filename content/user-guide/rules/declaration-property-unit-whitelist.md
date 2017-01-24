# declaration-property-unit-whitelist

Specify a whitelist of allowed property and unit pairs within declarations.

指定一个在声明中允许使用的属性和单位的白名单。

```css
a { width: 100px; }
/** ↑         ↑
 * These properties and these units */
```

## Options

```js
object: {
  "unprefixed-property-name": ["array", "of", "units"]
}
```

If a property name is surrounded with `"/"` (e.g. `"/^animation/"`), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: `/^animation/` will match `animation`, `animation-duration`, `animation-timing-function`, etc.

如果一个字符串被 `"/"` (如，`"/^animation/"`) 包围，它将被解释为一个正则表达式。例如，这将允许简单地匹配简写： `/^animation/` 将匹配 `animation`，`animation-duration`，`animation-timing-function` 等。

Given:

给出：

```js
{
  "font-size": ["em", "px"],
  "/^animation/": ["s"],
  "line-height": []
}
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-size: 1.2rem; }
```

```css
a { animation: animation-name 500ms ease; }
```

```css
a { -webkit-animation: animation-name 500ms ease; }
```

```css
a { animation-duration: 500ms; }
```

```css
a { line-height: 13px; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-size: 1em; }
```

```css
a { height: 100px; }
```

```css
a { animation: animation-name 5s ease; }
```

```css
a { -webkit-animation: animation-name 5s ease; }
```

```css
a { animation-duration: 5s; }
```

```css
a { line-height: 1; }
```
