# no-eol-whitespace

Disallow end-of-line whitespace.

禁止行尾空白。

```css
a { color: pink; }···
/**               ↑
 *  This whitespace */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }·
```

```css
a { color: pink; }····
```

Comment strings are also checked -- so the following is a warning:

注释字符串也会被检查，所以，以下模式是个警告：

```css
/* something····
 * something else */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
/* something
 * something else */
```

## Optional secondary options

### `ignore: ["empty-lines"]`

#### `"empty-lines"`

Allow end-of-line whitespace for lines that are only whitespace, "empty" lines.

允许只有空白的行和空行的行尾空白。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
··
  background: orange;
}
```

```css
····
```

```css
a { color: pink; }
····
```
