# at-rule-whitelist

Specify a whitelist of allowed at-rules.

指定一个允许使用的 at 规则的白名单。

```css
    @keyframes name {}
/** ↑
 * At-rules like this */
```

## Options

```js
array|string: ["array", "of", "unprefixed", "at-rules"]|"at-rule"
```

Given:

给出：

```js
["extend", "keyframes"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import "path/to/file.css";
```

```css
@media screen and (max-width: 1024px) {
  a { display: none; }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { @extend placeholder; }
```

```css
@keyframes name {
  from { top: 10px; }
  to { top: 20px; }
}
```

```css
@KEYFRAMES name {
  from { top: 10px; }
  to { top: 20px; }
}
```

```css
@-moz-keyframes name {
  from { top: 10px; }
  to { top: 20px; }
}
