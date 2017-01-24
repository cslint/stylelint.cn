# function-url-no-scheme-relative

Disallow scheme-relative urls.

禁止使用相对协议的链接。

```css
a { background-image: url('//www.google.com/file.jpg'); }
/**                        ↑ 
 *  This scheme-relative url */
```

A [scheme-relative url](https://url.spec.whatwg.org/#syntax-url-scheme-relative) is a url that begins with `//` followed by a host.

[相对协议的链接](https://url.spec.whatwg.org/#syntax-url-scheme-relative) 是一个以 `//` 开头后面紧随主机名的 url。

This rule ignores url arguments that are variables (`$sass`, `@less`, `--custom-property`).

该规则忽略 url 参数中的变量 (`$sass`，`@less`，`--custom-property`)。
## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { 
  background: url("//www.google.com/file.jpg"); 
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { 
  background: url("../file.jpg"); 
}
```

```css
a { 
  background: url("http://www.google.com/file.jpg"); 
}
```

```css
a { 
  background: url("/path/to/file.jpg"); 
}
```
