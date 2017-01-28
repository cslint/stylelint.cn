# selector-combinator-space-before

Require a single space or disallow whitespace before the combinators of selectors.

在关系选择符之前要求有一个空格或禁止有空白。

```css
  a > b + c ~ d e { color: pink; }
/** ↑   ↑   ↑  ↑
 * These are combinators */
```

Combinators are used to combine several different selectors into new and more specific ones. There are several types of combinators, including: child (`>`), adjacent sibling (`+`), general sibling (`~`), and descendant (which is represented by a blank space between two selectors).

关系选择符用来将几种不同类型的选择器组合成新的更具体的选择器。有几种类型的选择符，包括：子选择符 (`>`)，相邻选择符 (`+`)，兄弟选择符 (`~`)，和包含选择符(即，两个选择器之间的空格)。

The descendant combinator is *not* checked by this rule.

该规则不会检查包含选择符。

Also, `+` and `-` signs within `:nth-*()` arguments are not checked (e.g. `a:nth-child(2n+1)`).

也不会检查 `:nth-*()` 参数内的 `+` 和 `-` (如，`a:nth-child(2n+1)`)。

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space before the combinators.

在选择符之前必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a+ b { color: pink; }
```

```css
a>b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a + b { color: pink; }
```

```css
a >b { color: pink; }
```

### `"never"`

There *must never* be whitespace before the combinators.

在选择符之前禁止有空白。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a + b { color: pink; }
```

```css
a >b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a+ b { color: pink; }
```

```css
a>b { color: pink; }
```
