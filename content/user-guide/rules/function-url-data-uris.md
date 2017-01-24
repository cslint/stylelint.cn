# function-url-data-uris

Require or disallow data URIs for urls.

要求或禁止在 url 中使用 data URI。

```css
a { background-image: url('data:image/gif;base64,R0lGODlh='); }
/**                        ↑ 
 *                  This data URI */
```

This rule ignores variables inside `url` function (`$sass`, `@less`, `--custom-property`).

该规则忽略 `url` 函数中的变量 (`$sass`，`@less`，`--custom-property`)

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be data URIs in url.

在 url 中必须使用 data URI。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { 
  background-image: url(image.gif) 
} 
```

```css
@font-face { 
  font-family: 'foo'; 
  src: url(foo.ttf); 
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=')
}
```

```css
@font-face { 
  font-family: 'foo'; 
  src: url(data:font/ttf;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=); 
}
```

### `"never"`

There *must never* be data URIs in url.

在 url 中禁止使用 data URI。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=')
}
```

```css
@font-face { 
  font-family: 'foo'; 
  src: url(data:font/ttf;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=); 
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  background-image: url(image.gif) 
}
```

```css
@font-face { 
  font-family: 'foo'; 
  src: url(foo.ttf); 
}
```
