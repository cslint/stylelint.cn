# value-keyword-case

Specify lowercase or uppercase for keywords values.

指定关键字的值的大小写。

```css
    a { display: block; }
/**              ↑
 *    These values */
```

This rule ignores [`<custom-idents>`](https://developer.mozilla.org/en/docs/Web/CSS/custom-ident) of known properties. Values which are paired with non-properties (e.g. `$vars` and custom properties), and do not conform to the primary option, can be ignored using the `ignoreValues: []` secondary option.

该规则忽略已知属性的[`<custom-idents>`](https://developer.mozilla.org/en/docs/Web/CSS/custom-ident)。成对出现的值(比如，`$vars` 和自定义属性)，而且不符合主选项的，可以使用第二选项 `ignoreValues: []` 忽略掉。

## Options

```js
string: "lower"|"upper"
```
### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  display: Block;
}
```

```css
a {
  display: bLoCk;
}
```

```css
a {
  display: BLOCK;
}
```

```css
a {
  transition: -WEBKIT-TRANSFORM 2s;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  display: block;
}
```

```css
a {
  transition: -webkit-transform 2s;
}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  display: Block;
}
```

```css
a {
  display: bLoCk;
}
```

```css
a {
  display: block;
}
```

```css
a {
  transition: -webkit-transform 2s;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  display: BLOCK;
}
```

```css
a {
  transition: -WEBKIT-TRANSFORM 2s;
}
```

## Optional secondary options

### `ignoreKeywords: ["/regex/", "non-regex"]`

Ignore case of keywords values.

忽略关键字的值的大小写。

For example, with `"lower"`.

例如，在 `"lower"` 选项下。

Given:

给出：

```js
["Block", "/^(f|F)lex$/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  display: bLoCk;
}
```

```css
a {
  display: BLOCK;
}
```

```css
a {
  display: fLeX;
}
```

```css
a {
  display: FLEX;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  display: block;
}
```

```css
a {
  display: Block;
}
```

```css
a {
  display: flex;
}
```

```css
a {
  display: Flex;
}
```

For example, with `"upper"`.

例如，在 `"upper"` 选项下。

Given:

给出：

```js
["Block", "/^(f|F)lex$/"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  display: bLoCk;
}
```

```css
a {
  display: block;
}
```

```css
a {
  display: fLeX;
}
```

```css
a {
  display: fLEX;
}
```

The following patterns are *not* considered warnings:

以下模式被认为是个警告：

```css
a {
  display: BLOCK;
}
```

```css
a {
  display: Block;
}
```

```css
a {
  display: FLEX;
}
```

```css
a {
  display: Flex;
}
```

```css
a {
  display: flex;
}
```
