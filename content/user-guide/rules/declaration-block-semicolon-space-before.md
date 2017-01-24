# declaration-block-semicolon-space-before

Require a single space or disallow whitespace before the semicolons of declaration blocks.

在声明块的分号之前要求有一个空格或禁止有空格。

```css
a { color: pink; }
/**            ↑
 * The space before this semicolon */
```

This rule ignores semicolons that are preceded by Less mixins.

该规则忽略 Less mixins 之后的分号。

## Options

```js
string: "always"|"never"|"always-single-line"|"never-single-line"
```

### `"always"`

There *must always* be a single space before the semicolons.

在分号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink ; }
```

```css
a { color: pink ; top: 0 ; }
```

### `"never"`

There *must never* be whitespace before the semicolons.

在分号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink ; }
```

```css
a { color: pink ; top: 0 ; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

### `"always-single-line"`

There *must always* be a single space before the semicolons in single-line declaration blocks.

在单行声明块中的分号之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink ; }
```

```css
a { color: pink; top: 0; }
```

```css
a { color: pink ; top: 0 ; }
```

### `"never-single-line"`

There *must never* be whitespace before the semicolons in single-line declaration blocks.

在单行声明块中的分号之前禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: pink ; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

```css
a { color: pink ; top: 0 ; }
```
