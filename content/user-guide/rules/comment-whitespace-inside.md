# comment-whitespace-inside

Require or disallow whitespace on the inside of comment markers.

要求或禁止在注释标签内有空白。

```css
    /* comment */
/**  ↑         ↑
 * The space inside these two markers */
```

Any number of asterisks are allowed at the beginning or end of the comment. So `/** comment **/` is treated the same way as `/* comment */`.

在注释的开头和结尾允许出现任意数量的星号。所以 `/** comment **/` 具有和 `/* comment */` 同样的功能。

**Caveat:** Comments within *selector and value lists* are currently ignored.

**警告：**选择器和值列表中的注释目前是被忽略的。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be whitespace inside the markers.

在注释标签内必须有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/*comment*/
```

```css
/*comment */
```

```css
/** comment**/
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/* comment */
```

```css
/** comment **/
```

```css
/**
 * comment
 */
```

```css
/*     comment
*/
```

### `"never"`

There *must never* be whitespace on the inside the markers.

在注释标签内禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/* comment */
```

```css
/*comment */
```

```css
/** comment**/
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/*comment*/
```

```css
/****comment****/
```
