# font-family-name-quotes

Specify whether or not quotation marks should be used around font family names.

指定字体名称是否需要使用引号引起来。

```css
a { font-family: "Times New Roman", 'Ancient Runes', serif; }
/**              ↑               ↑  ↑             ↑
 *               These quotation marks and this one */
```

This rule checks the `font` and `font-family` properties.

该规则检查 `font` 和 `font-family` 属性。

This rule ignores `$sass`, `@less`, and `var(--custom-property)` variable syntaxes.

该规则忽略 `$sass`，`@less` 和 `var(--custom-property)` 变量语法。

## Options

```js
string: "always-where-required"|"always-where-recommended"|"always-unless-keyword"
```

*Please read the following to understand these options*:

*请阅读下文理解这些选项*：

-   The `font` and `font-family` properties accept a short list of special **keywords**: `inherit`, `serif`, `sans-serif`, `cursive`, `fantasy`, and `monospace`. If you wrap these words in quotes, the browser will not interpret them as keywords, but will instead look for a font by that name (e.g. will look for a `"sans-serif"` font) -- which is almost *never* what you want. Instead, you use these keywords to point to the built-in, generic fallbacks (right?). Therefore, *all of the options below enforce no quotes around these keywords*. (If you actually want to use a font named `"sans-serif"`, turn this rule off.)
- `font` 和 `font-family` 属性接受以下特定的 **关键字**：`inherit`，`serif`，`sans-serif`，`cursive`，`fantasy` 和 `monospace`。如果你想把这些词使用引号引起来，浏览器将不会把它们作为关键字解释，而是将查找对应名称的字体(比如，将查找一个 `"sans-serif"` 字体) -- 这可能不是你想要的结果。相反，你使用这些关键字指向内置的备选字体。因此，*下面所有的选项强制这些关键字不使用引号*。(如果你确实像要使用一个名为 `"sans-serif"` 的字体，关闭此规则。)
-   Quotes are **recommended** [in the spec](https://www.w3.org/TR/CSS2/fonts.html#font-family-prop) with "font family names that contain white space, digits, or punctuation characters other than hyphens".
- [在 w3 标准中](https://www.w3.org/TR/CSS2/fonts.html#font-family-prop) 推荐对“字体名中包含空格、数字或除了连字符之外的其他标点”的使用引号引起来。
-   Quotes are **required** around font-family names when they are not [valid CSS identifiers](https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier). For example, a font family name requires quotes around it if it contains `$`, `!`, or `/`, but does not require quotes just because it contains spaces or a (non-initial) number or underscore. *You can probably bet that almost every font family name you use **will** be a valid CSS identifier*.
- 当字体名称不是[有效的 CSS 标识符](https://www.w3.org/TR/CSS2/syndata.html#value-def-identifier)时，要求将它们使用引号引起来。例如，如果字体名中含有 `$`，`!` 或 `/`，要求使用引号，但如果它含有空格或一个非初始化的数字或下划线时，不要求使用引号。*你可能会打赌你使用的字体名都将是有效的 CSS 标识符*.
-   Quotes should **never** be used around vendor prefixed system fonts such as `-apple-system` and `BlinkMacSystemFont`.
- 引号不应用在带有前缀的系统字体上，比如 `-apple-system` 和 `BlinkMacSystemFont`。

For more on these subtleties, read ["Unquoted font family names in CSS"](https://mathiasbynens.be/notes/unquoted-font-family), by Mathias Bynens.

为了了解更多细节，请阅读 Mathias Bynens 写的 ["Unquoted font family names in CSS"](https://mathiasbynens.be/notes/unquoted-font-family)。

**Caveat:** This rule does not currently understand escape sequences such as those described by Mathias. If you want to use the font family name "Hawaii 5-0" you will need to wrap it in quotes, instead of escaping it as `Hawaii \35 -0` or `Hawaii\ 5-0`.

**警告：**该规则目前不能理解那些 Mathias 描述的转义序列。如果你想使用字体名 "Hawaii 5-0"，你将需要使用引号引起来，而不是将它们转义为 `Hawaii \35 -0` 或 `Hawaii\ 5-0`。

### `"always-unless-keyword"`

Expect quotes around every font family name that is not a keyword.

期待每一个不是关键字的字体名都使用引号引起来。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-family: Arial, sans-serif; }
```

```css
a { font-family: Times New Roman, Times, serif; }
```

```css
a { font: 1em Arial, sans-serif; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-family: 'Arial', sans-serif; }
```

```css
a { font-family: "Times New Roman", "Times", serif; }
```

```css
a { font: 1em 'Arial', sans-serif; }
```

### `"always-where-required"`

Expect quotes only when quotes are *required* according to the criteria above, and disallow quotes in all other cases.

根据上述标准，当要求使用引号时，使用引号。其他情况禁止使用引号。


The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-family: "Arial", sans-serif; }
```

```css
a { font-family: 'Times New Roman', Times, serif; }
```

```css
a { font: 1em "Arial", sans-serif; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-family: Arial, sans-serif; }
```

```css
a { font-family: Arial, sans-serif; }
```

```css
a { font-family: Times New Roman, Times, serif; }
```

```css
a { font-family: "Hawaii 5-0"; }
```

```css
a { font: 1em Arial, sans-serif; }
```

### `"always-where-recommended"`

Expect quotes only when quotes are *recommended* according to the criteria above, and disallow quotes in all other cases. (This includes all cases where quotes are *required*, as well.)

根据上述标准，当推荐使用引号时，使用引号。其他情况禁止使用。(包括所有要求使用引号的用例)

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-family: Times New Roman, Times, serif; }
```

```css
a { font-family: MyFontVersion6, sake_case_font; }
```

```css
a { font-family: 'Arial', sans-serif; }
```

```css
a { font: 1em Times New Roman, Times, serif; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-family: 'Times New Roman', Times, serif; }
```

```css
a { font-family: "MyFontVersion6", "sake_case_font"; }
```

```css
a { font-family: Arial, sans-serif; }
```

```css
a { font: 1em 'Times New Roman', Times, serif; }
```
