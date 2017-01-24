# property-no-unknown

Disallow unknown properties.

禁止使用未知属性。

```css
a { heigth: 100%; }
/** ↑
 * These properties */
```

This rule considers properties defined in the [CSS Specifications and browser specific properties](https://github.com/betit/known-css-properties#source) to be known.

该规则参考[CSS规范和浏览器特定属性](https://github.com/betit/known-css-properties#source)中定义的属性。

This rule ignores variables (`$sass`, `@less`, `--custom-property`).

该规则忽略变量 (`$sass`，`@less`，`--custom-property`)。

This rule ignores vendor-prefixed properties (e.g., `-moz-align-self`, `-webkit-align-self`).
Use option `checkPrefixed` described below to turn on checking of vendor-prefixed properties.

该规则忽略浏览器引擎前缀属性 (如，`-moz-align-self`，`-webkit-align-self`)。使用下面描述的 `checkPrefixed` 选项开启对浏览器引擎前缀属性的检查。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  colr: blue;
}
```

```css
a {
  my-property: 1;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: green;
}
```

```css
a {
  fill: black;
}
```

```css
a {
  -moz-align-self: center;
}
```

```css
a {
  -webkit-align-self: center;
}
```

```css
a {
  align-self: center;
}
```

## Optional secondary options

### `ignoreProperties: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  my-property: 10px;
}
```

```css
a {
  my-other-property: 10px;
}
```

```css
a {
  custom: 10px;
}
```
### `checkPrefixed: true | false` (default: `false`)

If `true`, this rule will check vendor-prefixed properties.

如果为 `true`，该规则将坚持浏览器引擎前缀属性。

For example with `true`:

比如，在 `true` 选项下：

The following patterns are considered  warnings:

以下模式被认为是个警告：

```css
a {
  -moz-align-self: center;
}
```

```css
a {
  -moz-overflow-scrolling: center;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  -webkit-overflow-scrolling: auto;
}
```

```css
a {
  -moz-box-flex: 0;
}
```

