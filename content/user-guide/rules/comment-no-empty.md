# comment-no-empty

Disallow empty comments.

禁止空注释。

```css
    /* */
/** ↑
 * Comments like this */
```

**Caveat:** Comments within *selector and value lists* are currently ignored.

**警告：**选择器和值列表中的注释目前是被忽略的。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/**/
```

```css
/* */
```

```css
/*

 */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/* comment */
```

```css
/*
 * Multi-line Comment
**/
```
