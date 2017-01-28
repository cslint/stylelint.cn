# selector-attribute-operator-space-before

Require a single space or disallow whitespace before operators within attribute selectors.

在特性(attribute)选择器的操作符之前要求有一个空格或禁止有空白。

```css
[target =_blank]
/**     ↑    
 * The space before operator */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the operator.

在操作符之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[target=_blank] {}
```

```css
[target= _blank] {}
```

```css
[target='_blank'] {}
```

```css
[target="_blank"] {}
```

```css
[target= '_blank'] {}
```

```css
[target= "_blank"] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[target] {}
```

```css
[target =_blank] {}
```

```css
[target ='_blank'] {}
```

```css
[target ="_blank"] {}
```

```css
[target = _blank] {}
```

```css
[target = '_blank'] {}
```

```css
[target = "_blank"] {}
```

### `"never"`

There *must never* be a single before after the operator.

在操作符之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[target =_blank] {}
```

```css
[target = _blank] {}
```

```css
[target ='_blank'] {}
```

```css
[target ="_blank"] {}
```

```css
[target = '_blank'] {}
```

```css
[target = "_blank"] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[target] {}
```

```css
[target=_blank] {}
```

```css
[target='_blank'] {}
```

```css
[target="_blank"] {}
```

```css
[target= _blank] {}
```

```css
[target= '_blank'] {}
```

```css
[target= "_blank"] {}
```
