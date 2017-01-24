# function-url-quotes

Require or disallow quotes for urls.

要求或禁止 url 使用引号。

```css
a { background: url("x.jpg") }
/**                 ↑     ↑
 *             These quotes */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

Urls *must always* be quoted.

url 必须使用引号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@import url(foo.css);
```

```css
@document domain(http://www.w3.org/);
```

```css
@font-face { font-family: 'foo'; src: url(foo.ttf); }
```

```css
@-moz-document url-prefix() {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background: url('x.jpg'); }
```

```css
@import url("foo.css");
```

```css
@document domain('http://www.w3.org/');
```

```css
@font-face { font-family: "foo"; src: url("foo.ttf"); }
```

```css
@-moz-document url-prefix('') {}
```

### `"never"`

Urls *must never* be quoted.

url 禁止使用引号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { background: url('x.jpg'); }
```

```css
@import url("foo.css");
```

```css
@font-face { font-family: "foo"; src: url('foo.ttf'); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background: url(x.jpg); }
```

```css
@import url(foo.css);
```

```css
@font-face { font-family: 'foo'; src: url(foo.ttf); }
```

## Optional secondary options

### `except: ["empty"]`

Reverse the primary option if the function has no arguments.

如果 url 中没有参数时，颠倒主选项的功能。

For example, with `"always"`.

比如，在 `"always"` 选项下：

The following pattern is *not* considered warnings:

以下模式正常：

```css
@-moz-document url-prefix() {}
```
