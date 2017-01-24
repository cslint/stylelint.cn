# no-invalid-double-slash-comments

Disallow double-slash comments (`//...`) which are not supported by CSS and [could lead to unexpected results](http://stackoverflow.com/a/20192639/130652).

禁用 CSS 不支持的而且[可能会导致意外结果的](http://stackoverflow.com/a/20192639/130652)双斜线注释 (`//...`)。

```css
a { // color: pink; }
/** ↑
 *  This comment */
```

If you are using a preprocessor that allows `//` single-line comments (e.g. Sass, Less, Stylus), this rule will not complain about those. They are compiled into standard CSS comments by your preprocessor, so stylelint will consider them valid. This rule only complains about the lesser-known method of using `//` to "comment out" a single line of code in regular CSS. (If you didn't know this was possible, have a look at ["Single Line Comments (//) in CSS"](http://www.xanthir.com/b4U10)).

如果你使用了一个处理器来允许 `//` 单行注释 (如 Sass，Less，Stylus)，该规则将不会发出警告。它们被你的处理器编译为标准的 CSS 注释，因此 stylelint 会认为它们是有效的。该规则只会对在常规 CSS 中使用 `//` 注释掉单行代码的不为人知的方法发出警告。(如果你不知道这中情况，看一下["Single Line Comments (//) in CSS"](http://www.xanthir.com/b4U10))。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { // color: pink; }
```

```css
// a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { /* color: pink; */ }
```

```css
/* a { color: pink; } */
```
