# unit-case

Specify lowercase or uppercase for units.

指定单位的大小写。

```css
    a { width: 10px; }
/**              ↑
 *     These units */
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
  width: 10PX;
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
  width: 10PIXEL;
}
```

```css
a {
  width: calc(10PX * 2);
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
  width: calc(10px * 2);
}
```

### `"upper"`

The following patterns are considered warnings:

以下模式被认为是个警告：

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
  width: 10pixel;
}
```

```css
a {
  width: calc(10px * 2);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  width: 10PX;
}
```

```css
a {
  width: calc(10PX * 2);
}
```
