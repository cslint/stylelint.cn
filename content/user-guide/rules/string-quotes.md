# string-quotes

Specify single or double quotes around strings.

指定字符串使用单引号还是双引号。

```css
a[id="foo"] { content: "x"; }
/**  ↑   ↑             ↑ ↑
 * These quotes and these quotes */
```

Quotes within comments are ignored.

注释里的引号将被忽略。

```css
/* "This is fine" */
/* 'And this is also fine' */
```

## Options

```js
string: "single"|"double"
```

### `"single"`

Strings *must always* be wrapped with single quotes.

字符串必须使用单引号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { content: "x"; }
```

```css
a[id="foo"] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { content: 'x'; }
```

```css
a[id='foo'] {}
```

### `"double"`

Strings *must always* be wrapped with double quotes.

字符串必须使用双引号。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { content: 'x'; }
```

```css
a[id='foo'] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { content: "x"; }
```

```css
a[id="foo"] {}
```
