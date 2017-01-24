# no-missing-end-of-source-newline

Disallow missing end-of-source newlines.

禁止缺少文件末尾的换行符。

```css
    a { color: pink; }
    \n
/** ↑
 * This newline */
```

Completely empty files are not considered warnings.

该规则忽略空文件。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
\n
```
