# unit-blacklist

Specify a blacklist of disallowed units.

指定一个禁止使用的单位的黑名单。

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
a { width: 100px; }
```

```css
a { font-size: 10em; }
```

```css
a { transform: rotate(30deg); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-size: 1.2rem; }
```

```css
a { line-height: 1.2; }
```

```css
a { height: 100vmin; }
```

```css
a { animation: animation-name 5s ease; }
```

## Optional secondary options

### `ignoreProperties: { unit: ["property", "/regex/"] }`

Ignore units in the values of declarations with the specified properties.

忽略指定的属性中的单位。

For example, with `["px", "vmin"]`.

例如，`["px", "vmin"]`。

Given:

给出：

```js
{
  "px": [ "font-size", "/^border/" ],
  "vmin": [ "width" ]  
}
```
The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { line-height: 12px; }
```

```css
a { -moz-border-radius-topright: 40px; }
```

```css
a { height: 100vmin; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-size: 13px; }
```

```css
a { border-bottom-width: 6px; }
```

```css
a { width: 100vmin; }
```
