# number-leading-zero

Require or disallow a leading zero for fractional numbers less than 1.

要求或禁止小于 1 的小数的前导 0。

```css
a { line-height: 0.5; }
/**              ↑
 * This leading zero */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a leading zero.

必须有一个前导 0。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { line-height: .5; }
```

```css
a { transform: translate(2px, .4px); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { line-height: 0.5; }
```

```css
a { transform: translate(2px, 0.4px); }
```

### `"never"`

There *must never* be a leading zero.

禁止有前导 0。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { line-height: 0.5; }
```

```css
a { transform: translate(2px, 0.4px); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { line-height: .5; }
```

```css
a { transform: translate(2px, .4px); }
```
