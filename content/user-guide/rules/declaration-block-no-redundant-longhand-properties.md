# declaration-block-no-redundant-longhand-properties

Disallow longhand properties that can be combined into one shorthand property.

禁止使用可以缩写却不缩写的属性。

```css
  a {
    padding-top: 1px;
    padding-right: 2px;
    padding-bottom: 3px;
    padding-left: 4px; }
/** ↑
 *  These longhand properties */
```

The longhand properties in the example above can be more concisely written as:

上面的例子中的普通写法的属性可以更简洁的写为：

```css
a {
  padding: 1px 2px 3px 4px;
}
```

This rule will only warn if you've used the longhand equivalent of *all* the properties that the shorthand will set.

该规则只对这种情况发出警告：你使用的普通写法等同于缩写写法里的所有属性。

This rule warns when the following shorthand properties can be used:

该规则只对以下缩写属性发出警告：

```js
padding
margin
background
font
border
border-top
border-bottom
border-left
border-right
border-width
border-style
border-color
border-radius
transition
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  margin-top: 1px;
  margin-right: 2px;
  margin-bottom: 3px;
  margin-left: 4px;
}
```

```css
a {
  font-style: italic;
  font-variant: normal;
  font-weight: bold;
  font-stretch: normal;
  font-size: 14px;
  line-height: 1.2;
  font-family: serif;
}
```

```css
a {
  -webkit-transition-property: top;
  -webkit-transition-duration: 2s;  
  -webkit-transition-timing-function: ease;
  -webkit-transition-delay: 0.5s;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  margin: 1px 2px 3px 4px;
}
```

```css
a {
  font: italic normal bold normal 14px/1.2 serif;
}
```

```css
a {
  -webkit-transition: top 2s ease 0.5s;
}
```

```css
a {
  margin-top: 1px;
  margin-right: 2px;
}
```

```css
a {
  margin-top: 1px;
  margin-right: 2px;
  margin-bottom: 3px;
}
```

## Optional secondary options

### `ignoreShorthands: ["/regex/", "string"]`

Given:

给出：

```js
["padding", "/border/"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 30px;
  padding-left: 10px;
}
```

```css
a {
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
}
```

```css
a {
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
}
```

```css
a {
  border-top-color: green;
  border-top-style: double;
  border-top-width: 7px;
}
```
