# unit-no-unknown

Disallow unknown units.

禁止使用未知单位。

```css
a { width: 100pixels; }
/**           ↑
 *  These units */
```

This rule considers units defined in the CSS Specifications, up to and including Editor's Drafts, to be known.

该规则只考虑 CSS 规范包括草案中定义的单位。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  width: 10pixels;
}
```

```css
a {
  width: calc(10px + 10pixels);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: 10px;
}  
```

```css
a {
  width: 10Px;
}  
```

```css
a {
  width: 10pX;
}  
```

```css
a {
  width: calc(10px + 10px);
}
```

## Optional secondary options

### `ignoreUnits: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: 10custom;
}
```

```css
a {
  width: 10my-unit;
}
```

```css
a {
  width: 10my-other-unit;
}
```
