# selector-attribute-operator-blacklist

Specify a blacklist of disallowed attribute operators.

指定一个禁止使用的特性(attribute)操作符的黑名单。

```css
[target="_blank"] {}
/**    ↑
 * These operators */
```

## Options

```js
array|string: ["array", "of", "operators"]|"operator"
```

Given:

给出：

```js
[ "*=" ]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[class*="test"] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[target] {}
```

```css
[target="_blank"] {}
```

```css
[class|="top"] {}
```
