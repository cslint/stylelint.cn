# declaration-block-trailing-semicolon

Require or disallow a trailing semicolon within declaration blocks.

要求或禁止在声明块中使用拖尾分号。

```css
a { background: orange; color: pink; }
/**                                ↑
 *                    This semicolon */
```

The trailing semicolon is the *last* semicolon in a declaration block and it is optional.

拖尾分号是声明块中的 *最后一个*分号，可以省略。

This rule will ignore Less mixins, trailing `//` comments, and declaration blocks containing nested (at-)rules.

该规则将忽略 Less mixins，拖尾 `//` 注释，含有嵌套的 (at-) 规则的声明块。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a trailing semicolon.

必须有拖尾分号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink }
```

```css
a { background: orange; color: pink }
```

```css
a { @include foo }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { background: orange; color: pink; }
```

```css
a { @include foo; }
```

### `"never"`

There *must never* be a trailing semicolon.

禁止有拖尾分号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a { background: orange; color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink }
```

```css
a { background: orange; color: pink }
```
