# declaration-block-properties-order

Specify the order of properties within declaration blocks.

指定声明块中的属性顺序。

```css
  a {
    color: pink;
    top: 0;
  }
/** ↑
 * These properties */
```

Prefixed properties *must always* be alphabetically ordered and *must always* precede the unprefixed version.

带前缀的属性必须按字母排序，必须排在不带前缀的属性之前。

This rule ignores variables (`$sass`, `@less`, `--custom-property`).

该规则忽略变量 (`$sass`，`@less`，`--custom-property`)。

## Options

```js
string|array: "alphabetical"|["array", "of", "unprefixed", "property", "names", "or", "group", "objects"]
```

### `"alphabetical"`

Properties *must always* be ordered alphabetically.

属性必须按字母属性排列。

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  top: 0;
  color: pink;
}
```

```css
a {
  -moz-transform: scale(1);
  transform: scale(1);
  -webkit-transform: scale(1);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
  top: 0;
}
```

```css
a {
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
}
```

### `["array", "of", "unprefixed", "property", "names", "or", "group", "objects"]`

Within an order array, you can include

在排好序的数组内，可以包括：

-   unprefixed property names
-   不带前缀的属性名
-   group objects with these properties:
-   这些属性的分组对象：
    -   `order ("strict"|"flexible")`: If `"strict"` (the default), the properties in this group must come in the order specified. If `"flexible"`, the properties can be in any order as long as they are grouped correctly.
    -   `order ("strict"|"flexible")`：如果为 `"strict"` (默认)，该分组内的属性必须按指定顺序排列。如果为 `"flexible"`，属性可以以任何顺序排列，只要它们分组正常。
    -   `properties (array of strings)`: The properties in this group.
    -   `properties (array of strings)`：分组内的属性

There are some important details to keep in mind:

有一些重要的细节要牢记：

**By default, unlisted properties will be ignored.** So if you specify an array and do not include `display`, that means that the `display` property can be included before or after any other property. *This can be changed with the `unspecified` option* (see below).

**默认情况下，不在列表中的属性将被忽略。** 如果你指定的数组不包括 `display`，这就意味着 `display` 属性可以放在其他任何属性之前或之后。*这可以通过使用 `unspecified` 选项来改变。*（见下文）。

**If an (unprefixed) property name is not included in your array and it contains a hyphen (e.g. `padding-left`), this rule will look for the string before that first hyphen in your array (e.g. `padding`) and use that position.** This means that you do not have to specify each extension of the root property; you can just specify the root property and the extensions will be accounted for.

**如果一个(不带前缀)的属性名不在你的数组中，而且它含有一个连字符(如`padding-left`)，该规则将查找数组中的第一个连字符之前的字符串(如 `padding`)，并使用这个位置。** 这就意味着，你不需要指定根属性的每个扩展；你可以仅仅指定根属性，扩展属性会自动占位。

For example, if you have included `border` in your array but not `border-top`, the rule will expect `border-top` to appear in the same relative position as `border`.

例如，如果在数组中有 `border`，但是没有 `border-top`，该规则将期待 `border-top` 出现在与 `border` 相同的位置。

Other relevant rules include `margin`, `border`, `animation`, `transition`, etc.

其他相关的规则包括 `margin`，`border`，`animation`，`transition` 等。

Using this fallback, the order of these hyphenated relative to their peer extensions (e.g. `border-top` to `border-bottom`) will be *arbitrary*. If you would like to enforce a specific ordering (e.g. always put `border-right` before `border-left`), you should specify those particular names in your array.

使用这种兼容，这些带有连字符的属性的顺序相对于它们的扩展(如， `border-top` 相对于 `border-bottom`) 将是 *任意的*。如果你喜欢指定一个顺序 (如，总是把 `border-right` 放在 `border-left` 之前)，你应该在数组中指定这些特点的名称。

Given:

给出：

```js
["transform", "top", "color"]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: pink;
  top: 0;
}
```

```css
a {
  -moz-transform: scale(1);
  transform: scale(1);
  -webkit-transform: scale(1);
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  top: 0;
  color: pink;
}
```

```css
a {
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
}
```

Given:

给出：

```js
["padding", "color"]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: pink;
  padding: 1em;
}
```

```css
a {
  color: pink;
  padding-top: 1em;
}
```

```css
a {
  padding-left: 2em;
  color: pink;
  padding-top: 1em;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  padding: 1em;
  color: pink;
}
```

```css
a {
  padding-top: 1em;
  color: pink;
}
```

```css
a {
  padding-left: 2em;
  padding-top: 1em;
  color: pink;
}
```

```css
a {
  padding-top: 1em;
  padding-left: 2em;
  color: pink;
}
```

Given:

给出：

```js
["my", "font-smoothing", "color"]
```

Where `font-smoothing` is the unprefixed version of proprietary browser property `-webkit-font-smoothing` and `my` is a user-defined shorthand property.

`font-smoothing` 是浏览器属性 `-webkit-font-smoothing` 的不带前缀的版本，`my` 是个用户定义的简写属性。

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: pink;
  -webkit-font-smoothing: antialiased;
}
```

```css
a {
  -webkit-font-smoothing: antialiased;
  my-property: 2em;
}
```

```css
a {
  my-property: 2em;
  color: pink;
  my-other-property: 1em;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  -webkit-font-smoothing: antialiased;
  color: pink;
}
```

```css
a {
  my-property: 2em;
  -webkit-font-smoothing: antialiased;
}
```

```css
a {
  my-property: 2em;
  my-other-property: 1em;
  color: pink;
}
```

```css
a {
  my-other-property: 1em;
  my-property: 2em;
  color: pink;
}
```

Given:

给出：

```js
["padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "color"]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  padding-left: 2em;
  padding-top: 1em;
  padding: 1em;
  color: pink;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  padding-top: 1em;
  padding-right: 1em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  color: pink;
}
```

```css
a {
  padding: 1em;
  padding-right: 2em;
  padding-left: 2.5em;
  color: pink;
}
```

Given:

给出：

```js
[
  {
    properties: [
      "height",
      "width",
    ],
  },
  {
    properties: [
      "font-size",
      "font-weight",
    ],
  },
]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  width: 2px;
  height: 1px;  
  font-size: 2px;
  font-weight: bold;
}
```

```css
a {
  width: 2px;
  height: 1px;

  font-size: 2px;
  font-weight: bold;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  height: 1px;
  width: 2px;
  font-size: 2px;
  font-weight: bold;
}
```

```css
a {
  height: 1px;
  width: 2px;

  font-size: 2px;
  font-weight: bold;
}
```

Given:

给出：

```js
[
  "height",
  "width",
  {
    order: "flexible",
    properties: [
      "color",
      "font-size",
      "font-weight",
    ],
  },
]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  height: 1px;
  font-weight: bold;
  width: 2px;
}
```

```css
a {
  width: 2px;
  height: 1px;
  font-weight: bold;  
}
```

```css
a {
  height: 1px;
  color: pink;
  width: 2px;
  font-weight: bold;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  height: 1px;
  width: 2px;
  color: pink;
  font-size: 2px;
  font-weight: bold;
}
```

```css
a {
  height: 1px;
  width: 2px;
  font-size: 2px;
  color: pink;
  font-weight: bold;
}
```

## Optional secondary options

### `unspecified: "top"|"bottom"|"bottomAlphabetical"|"ignore"`

These options only apply if you've defined your own array of properties.

如果你定义了你自己的属性数组，这些宣传才生效。

Default behavior is the same as `"ignore"`: an unspecified property can appear before or after any other property.

默认行为同 `"ignore"` 一样：未指定的属性可以出现在其他任何属性之前或之后。

With `"top"`, unspecified properties are expected *before* any specified properties. With `"bottom"`, unspecified properties are expected *after* any specified properties. With `"bottomAlphabetical"`, unspecified properties are expected *after* any specified properties, and the unspecified properties are expected to be in alphabetical order.

在 `"top"` 选项下，未指定的属性出现在任何指定的属性 *之前*。在 `"bottom"` 选项下，未指定的属性出现在任何指定的属性 *之后*。
在 `"bottomAlphabetical"` 选项下，未指定的属性出现在任何指定的属性 *之后*，而且按字母顺序排列。

Given:

给出：

```js
[["color", "background"], { unspecified: "ignore" }]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
  background: orange;
  left: 0;
}
```

```css
a {
  left: 0;
  color: pink;
  background: orange;
}
```

```css
a {
  color: pink;
  left: 0;
  background: orange;
}
```

Given:

```js
[["color", "background"], { unspecified: "top" }]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  color: pink;
  background: orange;
  left: 0;
}
```

```css
a {
  color: pink;
  left: 0;
  background: orange;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  left: 0;
  color: pink;
  background: orange;
}
```

Given:

```js
[["color", "background"], { unspecified: "bottom" }]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  left: 0;
  color: pink;
  background: orange;
}
```

```css
a {
  color: pink;
  left: 0;
  background: orange;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  color: pink;
  background: orange;
  left: 0;
}
```

Given:

```js
[["composes"], { unspecified: "bottomAlphabetical" }]
```

The following patterns are considered warnings:

以下模式被认为是有问题的：

```css
a {
  align-items: flex-end;
  composes: b;
  left: 0;
}
```

```css
a {
  composes: b;
  left: 0;
  align-items: flex-end;
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  composes: b;
  align-items: flex-end;
  left: 0;
}
```
