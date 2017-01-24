# no-extra-semicolons

Disallow extra semicolons.

禁止多余的分号。

```css
a { color: pink;; }
/**             ↑
 *  This semicolons */
```

This rule ignores semicolons after Less mixins.

该规则忽略 Less mixins 之后的分号。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import "x.css";;
```

```css
@import "x.css";
;
```

```css
a {
  color: pink;;
}
```

```css
a {
  ;color: pink;
}
```

```css
a {
  color: pink;
  ;
}
```

```css
a {
  color: red;
}
;
b {
  color: white;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@import "x.css";
```

```css
a {
  color: pink;
}
```
