# function-blacklist

Specify a blacklist of disallowed functions.

指定一个禁用的函数的黑名单。

```css
a { transform: scale(1); }
/**            ↑
 * These functions */
```

## Options

```js
array|string: ["array", "of", "unprefixed", "functions" or "regex"]|"function"|"/regex/"
```

If a string is surrounded with `"/"` (e.g. `"/^rgb/"`), it is interpreted as a regular expression.

如果一个字符串被 `"/"` (如`"/^rgb/"`) 包围着，它将被解释为一个正则表达式。

Given:

给出：

```js
["scale", "rgba", "linear-gradient"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { transform: scale(1); }
```

```css
a {
  color: rgba(0, 0, 0, 0.5);
}
```

```css
a {
  background:
    red,
    -moz-linear-gradient(45deg, blue, red);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background: red; }
```
