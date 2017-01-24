# font-family-no-duplicate-names

Disallow duplicate font family names.

禁止使用重复的字体名称。

```css
a { font-family: serif, serif; }
/**              ↑      ↑
 * These font family names */
```

This rule checks the `font` and `font-family` properties.

该规则检查 `font` 和 `font-family` 属性。

This rule ignores `$sass`, `@less`, and `var(--custom-property)` variable syntaxes.

该规则忽略 `$sass`，`@less` 和 `var(--custom-property)` 变量语法。

**Caveat:** This rule will stumble on *unquoted* multi-word font names and *unquoted* font names containing escape sequences. Wrap these font names in quotation marks, and everything should be fine.

**警告：**该规则在识别 *没有使用引号引起来的* 多单词的字体名称和 *没有使用引号引起来的*带有转义序列的字体名称时有困难。使用引号将这些字体引起来，就不会有问题了。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { font-family: 'Times', Times, serif; }
```

```css
a { font: 1em "Arial", 'Arial', sans-serif; }
```

```css
a { font: normal 14px/32px -apple-system, BlinkMacSystemFont, sans-serif, sans-serif; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { font-family: Times, serif; }
```

```css
a { font: 1em "Arial", "sans-serif", sans-serif; }
```

```css
a { font: normal 14px/32px -apple-system, BlinkMacSystemFont, sans-serif; }
```
