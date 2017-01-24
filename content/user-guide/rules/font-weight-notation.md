# font-weight-notation

Require numeric or named (where possible) `font-weight` values. Also, when named values are expected, require only valid names.

要求使用数字或命名的 (可能的情况下) `font-weight` 值。同时，当需要命名的值时，一定要是有效的命名。

```css
a { font-weight: bold }
/**              ↑
 *   This notation */

a { font: italic small-caps 600 16px/3 cursive; }
/**                         ↑
*      And this notation, too */
```

Valid font-weight names are `normal`, `bold`, `bolder`, and `lighter`.

有效的 font-weight 名称是 `normal`，`bold`，`bolder` 和 `lighter`。

This rule ignores `$sass`, `@less`, and `var(--custom-property)` variable syntaxes.

该规则忽略 `$sass`，`@less` 和 `var(--custom-property)` 变量语法。

## Options

```js
string: "numeric"|"named-where-possible"
```

### `"numeric"`

`font-weight` values *must always* be numbers.

`font-weight` *必须*是数字。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-weight: bold; }
```

```css
a { font: italic normal 20px; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-weight: 700; }
```

```css
a { font: italic 900 20px; }
```

### `"named-where-possible"`

`font-weight` values *must always* be keywords when an appropriate keyword is available.

`font-weight` 的值必须是关键字(当对应的关键字有效时)。

This means that only `400` and `700` will be rejected, because those are the only numbers with keyword equivalents (`normal` and `bold`).

这意味着只有 `400` 和 `700` 会被拒绝，因为它们是唯一两个有对应的关键字(`normal` 和 `bold`)的数字。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-weight: 700; }
```

```css
a { font: italic 400 20px; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-weight: bold; }
```

```css
a { font: italic normal 20px; }
```

## Optional secondary options

### `ignore: ["relative"]`

Ignore the [*relative*](https://drafts.csswg.org/css-fonts/#font-weight-prop) keyword names of `bolder` and `lighter`.

忽略[*相对值*](https://drafts.csswg.org/css-fonts/#font-weight-prop)关键字：`bolder` 和 `lighter`。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-weight: 400; }
a b { font-weight: lighter; }
```
