# function-url-scheme-whitelist

Specify a whitelist of allowed url schemes.

指定一个允许的 url 协议的白名单。

```css
a { background-image: url('http://www.example.com/file.jpg'); }
/**                        ↑
 *           This url scheme */
```

A [url scheme](https://url.spec.whatwg.org/#syntax-url-scheme) consists of alphanumeric, `+`, `-`, and `.` characters. It can appear at the start of a url and is followed by `:`.

一个[url 协议](https://url.spec.whatwg.org/#syntax-url-scheme)由字母，`+`，`-` 和 `.` 字符组成。它出现在一个链接的的开始位置，后面紧随着 `:`。

This rule treats url schemes as case insensitive (`https` and `HTTPS` are the same).

该规则对 url 协议不区分大小写 (`https` 和 `HTTPS` 是一样的)。

This rule ignores url arguments without an existing url scheme.

该规则忽略不带 url 协议的 url 参数。

This rule ignores url arguments with variables or variable interpolation (`$sass`, `@less`, `--custom-property`, `#{$var}`, `@{var}`, `$(var)`).

该规则忽略带有变量或变量插值 (`$sass`，`@less`，`--custom-property`，`#{$var}`，`@{var}`，`$(var)`)的 url 参数。

## Options

```js
array|string: ["array", "of", "schemes"]|"scheme"
```

Given:

给出：

```js
["https", "data"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { background-image: url('http://www.example.com/file.jpg'); }
```

```css
a { background-image: url('ftp://www.example.com/file.jpg'); }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { background-image: url('https://www.example.com/file.jpg'); }
```

```css
a { background-image: url('HTTPS://www.example.com/file.jpg'); }
```

```css
a { background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='); }
```

```css
a { background-image: url('example.com/file.jpg'); }
```

```css
a { background-image: url('/example.com/file.jpg'); }
```

```css
a { background-image: url('//example.com/file.jpg'); }
```

```css
a { background-image: url('./path/to/file.jpg'); }
```
