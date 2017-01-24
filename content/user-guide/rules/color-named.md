# color-named

Require (where possible) or disallow named colors.

要求 (可能的情况下) 或 禁止使用命名的颜色。

```css
a { color: black }
/**        ↑
 * These named colors */
```

## Options

```js
string: "always-where-possible"|"never"
```

### `"always-where-possible"`

Colors *must always*, where possible, be named.

在可能的情况下，**必须** 使用命名的颜色。

This will warn if a hex (3, 4, 6 and 8 digit), `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hwb()` or `gray()` color can be represented as a named color.

如果一个十六进制（3位、4位、6位和8位）`rgb()`，`rgba()`，`hsl()`，`hsla()`，`hwb()` 或 `gray()` 颜色可以表示为一个命名的颜色，却不使用命名的颜色，该规则将发出警告。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #000; }
```

```css
a { color: #f000; }
```

```css
a { color: #ff000000; }
```

```css
a { color: rgb(0, 0, 0); }
```

```css
a { color: rgb(0%, 0%, 0%); }
```

```css
a { color: rgba(0, 0, 0, 0); }
```

```css
a { color: hsl(0, 0%, 0%); }
```

```css
a { color: hwb(0, 0%, 100%); }
```

```css
a { color: gray(0); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: black; }
```

```css
a { color: rgb(10, 0, 0); }
```

```css
a { color: rgb(0, 0, 0, 0.5); }
```

### `"never"`

Colors *must never* be named.

**禁止** 使用命名的颜色。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: black; }
```

```css
a { color: white; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: #000; }
```

```css
a { color: rgb(0, 0, 0); }
```

```css
a { color: var(--white); }
```

```scss
a { color: $blue; }
```

```less
a { color: @blue; }
```

## Optional secondary options

### `ignore: ["inside-function"]`

Ignore colors that are inside a function.

忽略在函数内部的颜色。

For example, with `"never"`.

例如，在 `"never"` 情况下。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: map-get($colour, blue);
}
```

```css
a {
  background-image: url(red);
}
```

### `ignoreProperties: ["/regex/", "string"]`

For example with `"never"`.

例如，在 `"never"` 情况下。

Given:

给出：

```js
["/^my-/", "composes"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  my-property: red;
}
```

```css
a {
  my-other-property: red;
}
```

```css
a {
  composes: red from './index.css';
}
```
