# unit-whitelist

Specify a whitelist of allowed units.

指定一个所允许的单位的白名单。

```css
a { width: 100px; }
/**           ↑
 *  These units */
```

## Options

```js
array|string: ["array", "of", "units"]|"unit"
```

Given:

给出：

```js
["px", "em", "deg"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { width: 100%; }
```

```css
a { font-size: 10rem; }
```

```css
a { animation: animation-name 5s ease; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-size: 1.2em; }
```

```css
a { line-height: 1.2; }
```

```css
a { height: 100px; }
```

```css
a { height: 100PX; }
```

```css
a { transform: rotate(30deg); }
```

## Optional secondary options

### `ignoreProperties: { unit: ["property", "/regex/"] }`

Ignore units in the values of declarations with the specified properties.

忽略指定属性的单位。

For example, with `["px", "em"]`.

比如，`["px", "em"]`。

Given:

给出：

```js
{
  "rem": [ "line-height", "/^border/" ],
  "%": [ "width" ]  
}
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { margin: 0 20rem; }
```

```css
a { -moz-border-radius-topright: 20rem; }
```

```css
a { height: 100%; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { line-height: 0.1rem; }
```

```css
a { border-bottom-width: 6rem; }
```

```css
a { width: 100%; }
```

