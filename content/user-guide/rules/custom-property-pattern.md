# custom-property-pattern

Specify a pattern for custom properties.

为自定义属性指定一个匹配模式。

```css
a { --foo-: 1px; }
/**   ↑
 * The pattern of this */
```

## Options

```js
regex|string
```

A string will be translated into a RegExp like so `new RegExp(yourString)` — so be sure to escape properly.

该字符将被转换为一个 RegExp，比如 `new RegExp(yourString)`，请确保对其进行正确转义。

Given the string:

给出：

```js
"foo-.+"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
:root { --boo-bar: 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
:root { --foo-bar: 0; }
```
