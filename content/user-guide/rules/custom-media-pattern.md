# custom-media-pattern

Specify a pattern for custom media query names.

指定一个自定义媒体查询名称的匹配模式。

```css
@custom-media --foo (max-width: 30em);
/**             ↑
 * The pattern of this */
```

## Options

```js
regex|string
```

A string will be translated into a RegExp like so `new RegExp(yourString)` — so be sure to escape properly.

字符串将被转换为一个正则表达式 - `new RegExp(yourString)` - 因此，*请确保对属性进行转义*。

Given the string:

给出：

```js
"foo-.+"
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@custom-media --bar (min-width: 30em);
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@custom-media --foo-bar (min-width: 30em);
```
