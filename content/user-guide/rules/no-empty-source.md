# no-empty-source

Disallow empty sources.

禁止空源。

```css
  ···\n\t
/**     ↑
 *  This empty source */
```

A source containing only whitespace is considered empty.

一个源只包含空白被认为是空的。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css

```

```css
\t\t
```

```css
\n
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
```

```css
/* Only comments */
```
