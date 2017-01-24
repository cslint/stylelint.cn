# declaration-block-no-duplicate-properties

Disallow duplicate properties within declaration blocks.

在声明的块中中禁止出现重复的属性。

```css
a { color: pink; color: orange; }
/** ↑            ↑
 * These duplicated properties */
```

This rule ignores variables (`$sass`, `@less`, `--custom-property`).

该规则忽略变量 (`$sass`，`@less`，`--custom-property`)。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; color: orange; }
```

```css
a { color: pink; background: orange; color: orange }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink; background: orange; }
```

## Optional secondary options

### `ignore: ["consecutive-duplicates"]`

Ignore consecutive duplicated properties.

忽略连续的重复属性。

They can prove to be useful fallbacks for older browsers.

它们对老版本浏览器的兼容很有用。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
p {
  font-size: 16px;
  font-weight: 400;
  font-size: 1rem;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
p {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
}
```

### `ignore: ["consecutive-duplicates-with-different-values"]`

Ignore consecutive duplicated properties with different values.

忽略连续的不同值的重复属性。

Including duplicate properties (fallbacks) is useful to deal with older browsers support for CSS properties. E.g. using 'px' units when 'rem' isn't available.

重复的属性在老版本浏览器对 CSS 属性的兼容很有用。如，当 'rem' 不可用时，就使用 'px'。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/* properties with the same value */
p {
  font-size: 16px;  
  font-size: 16px;
  font-weight: 400;
}
```

```css
/* nonconsecutive duplicates */
p {
  font-size: 16px;
  font-weight: 400;
  font-size: 1rem;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
p {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
}
```

### `ignoreProperties: ["/regex/", "non-regex"]`

Ignore duplicates of specific properties.

忽略重复的指定属性。

Given:

给出：

```js
["color", "/background\-/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; background: orange; background: white; }
```

```css
a { background: orange; color: pink; background: white; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; color: orange; background-color: orange; background-color: white; }
```

```css
a { color: pink; background-color: orange; color: orange; background-color: white; }
```
