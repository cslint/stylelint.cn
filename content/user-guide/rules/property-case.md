# property-case

Specify lowercase or uppercase for properties.

指定属性的大小写。

```css
    a { width: 1px; }
/**     ↑
 * These properties */
```

## Options

```js
string: "lower"|"upper"
```

### `"lower"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  Width: 1px
}
```

```css
a {
  WIDTH: 1px
}
```

```css
a {
  widtH: 1px
}
```

```css
a {
  border-Radius: 5px;
}
```

```css
a { 
  -WEBKIT-animation-duration: 3s; 
}
```

```css
@media screen and (orientation: landscape) { 
  WiDtH: 500px; 
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: 1px
}
```

```css
a {
  border-radius: 5px;
}
```

```css
a { 
  -webkit-animation-duration: 3s; 
}
```

```css
@media screen and (orientation: landscape) { 
  width: 500px; 
}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  Width: 1px
}
```

```css
a {
  width: 1px
}
```

```css
a {
  widtH: 1px
}
```

```css
a {
  border-Radius: 5px;
}
```

```css
a { 
  -WEBKIT-animation-duration: 3s; 
}
```

```css
@media screen and (orientation: landscape) { 
  WiDtH: 500px; 
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  WIDTH: 1px
}
```

```css
a {
  BORDER-RADIUS: 5px;
}
```

```css
a { 
  -WEBKIT-ANIMATION-DURATION: 3s; 
}
```

```css
@media screen and (orientation: landscape) { 
  WIDTH: 500px; 
}
```
