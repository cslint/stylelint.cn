# declaration-block-single-line-max-declarations

Limit the number of declaration within a single line declaration block.

限制单行声明块中声明的数量。

```css
a { color: pink; top: 0; }
/** ↑            ↑
 * The number of these declarations */
```

## Options

`int`: Maximum number of declarations allowed.

`int`：所允许的最大值。

For example, with `1`:

比如：`1`:

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; top: 3px; }
```

```css
a,
b { color: pink; top: 3px; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a,
b { color: pink; }
```

```css
a {
  color: pink;
  top: 3px;
}
```
