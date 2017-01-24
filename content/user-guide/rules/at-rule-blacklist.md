# at-rule-blacklist

Specify a blacklist of disallowed at-rules.

指定一个禁止使用的 at 规则的黑名单。

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
a { @extend placeholder; }
```

```css
@keyframes name {
  from { top: 10px; }
  to { top: 20px; }
}
```

```css
@-moz-keyframes name {
  from { top: 10px; }
  to { top: 20px; }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@import "path/to/file.css";
```
