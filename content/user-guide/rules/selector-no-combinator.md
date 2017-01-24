# selector-no-combinator

Disallow combinators in selectors.

禁用关系选择符。

```css
  a > b + c ~ d e { color: pink; }
/** ↑   ↑   ↑  ↑
 * These are combinators */
```

Combinators are used to combine several different selectors into new and more specific ones. There are several types of combinators, including: child (`>`), adjacent sibling (`+`), general sibling (`~`), and descendant (which is represented by a blank space between two selectors).

关系选择符用来将几种不同类型的选择器组合成新的更具体的选择器。有几种类型的选择符，包括：子选择符 (>)，相邻选择符 (+)，兄弟选择符 (~)，和包含选择符(即，两个选择器之间的空格)。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a b { color: pink; }
```

```css
a > b { color: pink; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink; }
```

```css
a, b { color: pink; }
```

```css
a.foo { color: pink; }
```
