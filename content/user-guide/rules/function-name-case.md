# function-name-case

Specify lowercase or uppercase for function names.

指定函数名称的大小写。

```css
a { width: calc(5% - 10em); }
/**        ↑
 * These functions */
```

Camel case function names, e.g. `translateX`, are accounted for when the `lower` option is used.

当使用 `lower` 选项时，函数名称使用驼峰式大小写，如 `translateX`。

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  width: Calc(5% - 10em);
}
```

```css
a {
  width: cAlC(5% - 10em);
}
```

```css
a {
  width: CALC(5% - 10em);
}
```

```css
a {
  background: -WEBKIT-RADIAL-GRADIENT(red, green, blue);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: calc(5% - 10em);
}
```

```css
a {
  background: -webkit-radial-gradient(red, green, blue);
}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是警告：

```css
a {
  width: Calc(5% - 10em);
}
```

```css
a {
  width: cAlC(5% - 10em);
}
```

```css
a {
  width: calc(5% - 10em);
}
```

```css
a {
  background: -webkit-radial-gradient(red, green, blue);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: CALC(5% - 10em);
}
```

```css
a {
  background: -WEBKIT-RADIAL-GRADIENT(red, green, blue);
}
```

## Optional secondary options

### `ignoreFunctions: ["/regex/", "non-regex"]`

Ignore case of function names.

忽略函数名称的大小写。

For example, with `"lower"`.

比如，在 `"lower"` 选项下。

Given:

给出：

```js
["SOME-FUNCTION", "/^get.*$/"]
```

The following patterns are considered warnings:

以下模式被认为是警告：

```css
a {
  color: sOmE-FuNcTiOn();
}
```

```css
a {
  color: OTHER-SOME-FUNCTION();
}
```

```css
a {
  color: GetColor();
}
```

```css
a {
  color: GET_COLOR();
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  display: some-function();
}
```

```css
a {
  display: SOME-FUNCTION();
}
```

```css
a {
  display: getColor();
}
```

```css
a {
  display: get_color();
}
```

For example, with `"upper"`.

比如，在 `"upper"` 选项下。

Given:

给出：

```js
["some-function", "/^get.*$/"]
```

The following patterns are considered warnings:

以下模式被认为是警告：

```css
a {
  color: sOmE-FuNcTiOn();
}
```

```css
a {
  color: other-some-function();
}
```

```css
a {
  color: GetColor();
}
```

```css
a {
  color: GET_COLOR();
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  display: some-function();
}
```

```css
a {
  display: SOME-FUNCTION();
}
```

```css
a {
  display: getColor();
}
```

```css
a {
  display: get_color();
}
```
