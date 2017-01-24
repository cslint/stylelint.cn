# selector-attribute-quotes

Require or disallow quotes for attribute values.

要求或禁止特性值使用引号。

```css
[target="_blank"] {}
/**     ↑      ↑
 * These quotes */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

Attribute values *must always* be quoted.

特性值必须用引号引起来。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[title=flower] {}
```

```css
[class^=top] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[title] {}
```

```css
[target="_blank"] {}
```

```css
[class|="top"] {}
```

```css
[title~='text'] {}
```

```css
[data-attribute='component'] {}
```

### `"never"`

Attribute values *must never* be quoted.

特性值禁止用引号引起来。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
[target="_blank"] {}
```

```css
[class|="top"] {}
```

```css
[title~='text'] {}
```

```css
[data-attribute='component'] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
[title] {}
```

```css
[title=flower] {}
```

```css
[class^=top] {}
```
