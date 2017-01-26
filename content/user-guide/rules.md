# Rules

Rules determine what the linter looks for and complains about. All the rules are turned off by default and none have default values for their options. The rules follow a consistent naming convention and have been designed to work in conjunction with one another, you can read more about this in the ["About rules"](about-rules.md) section.

Rules determine what the linter looks for and complains about. 所有规则默认是关闭的，而且没有默认选项。这些规则遵循统一的命名惯例，协同配合，你可以在[关于规则](about-rules.md)中了解更多。

In addition to these rules there are [plugins](plugins.md), which are rules built by the community that support methodologies, toolsets, *non-standard* CSS features, or very specific use cases. Don't forget to look at the list of [plugins](plugins.md) for more ways to lint.

除了这些规则，还有[插件](plugins.md)，它们是社区支持的方法、工具集，非标准的 CSS 特性，或特定的用例。查看[插件](plugins.md)了解更多。

## List of rules

Here are all the rules within stylelint, grouped by the [*thing*](http://apps.workflower.fi/vocabs/css/en) they apply to.

以下是 stylelint 的所有规则，并参照[css vocabulary](http://apps.workflower.fi/vocabs/css/en)进行分类。

### Color

-   [`color-hex-case`](color-hex-case/README.md): Specify lowercase or uppercase for hex colors.
-   [`color-hex-case`](color-hex-case/README.md): 指定十六进制颜色大小写。
-   [`color-hex-length`](color-hex-length/README.md): Specify short or long notation for hex colors.
-   [`color-hex-length`](color-hex-length/README.md): 指定十六进制颜色是否使用缩写。
-   [`color-named`](color-named/README.md): Require (where possible) or disallow named colors.
-   [`color-named`](color-named/README.md): 要求 (可能的情况下) 或 禁止使用命名的颜色。
-   [`color-no-hex`](color-no-hex/README.md): Disallow hex colors.
-   [`color-no-hex`](color-no-hex/README.md): 禁止使用十六进制颜色。
-   [`color-no-invalid-hex`](color-no-invalid-hex/README.md): Disallow invalid hex colors.
-   [`color-no-invalid-hex`](color-no-invalid-hex/README.md): 禁止使用无效的十六进制颜色。

### Font family

-   [`font-family-name-quotes`](font-family-name-quotes/README.md): Specify whether or not quotation marks should be used around font family names.
-   [`font-family-name-quotes`](font-family-name-quotes/README.md)：指定字体名称是否需要使用引号引起来。
-   [`font-family-no-duplicate-names`](font-family-no-duplicate-names/README.md): Disallow duplicate font family names.
-   [`font-family-no-duplicate-names`](font-family-no-duplicate-names/README.md): 禁止使用重复的字体名称。

### Font weight

-   [`font-weight-notation`](font-weight-notation/README.md): Require numeric or named (where possible) `font-weight` values.
-   [`font-weight-notation`](font-weight-notation/README.md)：要求使用数字或命名的 (可能的情况下) `font-weight` 值。

### Function

-   [`function-blacklist`](function-blacklist/README.md): Specify a blacklist of disallowed functions.
-   [`function-blacklist`](function-blacklist/README.md)：指定一个禁用的函数的黑名单。
-   [`function-calc-no-unspaced-operator`](function-calc-no-unspaced-operator/README.md): Disallow an unspaced operator within `calc` functions.
-   [`function-calc-no-unspaced-operator`](function-calc-no-unspaced-operator/README.md)：禁止在 `calc` 函数内使用不加空格的操作符。
-   [`function-comma-newline-after`](function-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of functions.
-   [`function-comma-newline-after`](function-comma-newline-after/README.md)：在函数的逗号之后要求有一个换行符或禁止有空格。
-   [`function-comma-newline-before`](function-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of functions.
-   [`function-comma-newline-before`](function-comma-newline-before/README.md)：在函数的逗号之前要求有一个换行符或禁止有空格。
-   [`function-comma-space-after`](function-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of functions.
-   [`function-comma-space-after`](function-comma-space-after/README.md)：在函数的逗号之后要求有一个空格或禁止有空格。
-   [`function-comma-space-before`](function-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of functions.
-   [`function-comma-space-before`](function-comma-space-before/README.md)：在函数的逗号之前要求有一个空格或禁止有空格。
-   [`function-linear-gradient-no-nonstandard-direction`](function-linear-gradient-no-nonstandard-direction/README.md): Disallow direction values in `linear-gradient()` calls that are not valid according to the [standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).
-   [`function-linear-gradient-no-nonstandard-direction`](function-linear-gradient-no-nonstandard-direction/README.md)：根据[标准语法](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax)，禁止 `linear-gradient()` 中无效的方向值。
-   [`function-max-empty-lines`](function-max-empty-lines/README.md): Limit the number of adjacent empty lines within functions.
-   [`function-max-empty-lines`](function-max-empty-lines/README.md)：限制函数中相邻的空行数量。
-   [`function-name-case`](function-name-case/README.md): Specify lowercase or uppercase for function names.
-   [`function-name-case`](function-name-case/README.md)：指定函数名称的大小写。
-   [`function-parentheses-newline-inside`](function-parentheses-newline-inside/README.md): Require a newline or disallow whitespace on the inside of the parentheses of functions.
-   [`function-parentheses-newline-inside`](function-parentheses-newline-inside/README.md)：在函数的括号内要求有一个换行符或禁止有空格。
-   [`function-parentheses-space-inside`](function-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses of functions.
-   [`function-parentheses-space-inside`](function-parentheses-space-inside/README.md)：在函数的括号内要有一个空格或禁止有空格。
-   [`function-url-data-uris`](function-url-data-uris/README.md): Require or disallow data URIs for urls.
-   [`function-url-data-uris`](function-url-data-uris/README.md)：要求或禁止在 url 中使用 data URI。
-   [`function-url-no-scheme-relative`](function-url-no-scheme-relative/README.md): Disallow scheme-relative urls.
-   [`function-url-no-scheme-relative`](function-url-no-scheme-relative/README.md)：禁止使用相对协议的链接。
-   [`function-url-quotes`](function-url-quotes/README.md): Require or disallow quotes for urls.
-   [`function-url-quotes`](function-url-quotes/README.md)：要求或禁止 url 使用引号。
-   [`function-url-scheme-whitelist`](function-url-scheme-whitelist/README.md): Specify a whitelist of allowed url schemes.
-   [`function-url-scheme-whitelist`](function-url-scheme-whitelist/README.md)：指定一个允许的 url 协议的白名单。
-   [`function-whitelist`](function-whitelist/README.md): Specify a whitelist of allowed functions.
-   [`function-whitelist`](function-whitelist/README.md)：指定一个允许的函数的白名单。
-   [`function-whitespace-after`](function-whitespace-after/README.md): Require or disallow whitespace after functions.
-   [`function-whitespace-after`](function-whitespace-after/README.md)：要求或禁止在函数之后有空格。

### Number

-   [`number-leading-zero`](number-leading-zero/README.md): Require or disallow a leading zero for fractional numbers less than 1.
-   [`number-leading-zero`](number-leading-zero/README.md)：要求或禁止小于 1 的小数的前导 0。
-   [`number-max-precision`](number-max-precision/README.md): Limit the number of decimal places allowed in numbers.
-   [`number-max-precision`](number-max-precision/README.md)：限制小数位数。
-   [`number-no-trailing-zeros`](number-no-trailing-zeros/README.md): Disallow trailing zeros in numbers.
-   [`number-no-trailing-zeros`](number-no-trailing-zeros/README.md)：禁止数字中的拖尾 0。

### String

-   [`string-no-newline`](string-no-newline/README.md): Disallow (unescaped) newlines in strings.
-   [`string-no-newline`](string-no-newline/README.md)：禁止在字符串中使用（非转义的）换行符。
-   [`string-quotes`](string-quotes/README.md): Specify single or double quotes around strings.
-   [`string-quotes`](string-quotes/README.md)：指定字符串使用单引号还是双引号。

### Length

-   [`length-zero-no-unit`](length-zero-no-unit/README.md): Disallow units for zero lengths.
-   [`length-zero-no-unit`](length-zero-no-unit/README.md): 长度为0时，禁止使用单位。

### Time

-   [`time-no-imperceptible`](time-no-imperceptible/README.md): Disallow `animation` and `transition` less than or equal to 100ms.
-   [`time-no-imperceptible`](time-no-imperceptible/README.md)：禁止 `animation` 和 `transition` 小于或等于 100ms。

### Unit

-   [`unit-blacklist`](unit-blacklist/README.md): Specify a blacklist of disallowed units.
-   [`unit-blacklist`](unit-blacklist/README.md)：指定一个禁止使用的单位的黑名单。
-   [`unit-case`](unit-case/README.md): Specify lowercase or uppercase for units.
-   [`unit-case`](unit-case/README.md)：指定单位的大小写。
-   [`unit-no-unknown`](unit-no-unknown/README.md): Disallow unknown units.
-   [`unit-no-unknown`](unit-no-unknown/README.md)：禁止使用未知单位。
-   [`unit-whitelist`](unit-whitelist/README.md): Specify a whitelist of allowed units.
-   [`unit-whitelist`](unit-whitelist/README.md)：指定一个所允许的单位的白名单。

### Value

-   [`value-keyword-case`](value-keyword-case/README.md): Specify lowercase or uppercase for keywords values.
-   [`value-keyword-case`](value-keyword-case/README.md)：指定关键字的值的大小写。
-   [`value-no-vendor-prefix`](value-no-vendor-prefix/README.md): Disallow vendor prefixes for values.
-   [`value-no-vendor-prefix`](value-no-vendor-prefix/README.md)：禁止给值添加浏览器引擎前缀。

### Value list

-   [`value-list-comma-newline-after`](value-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of value lists.
-   [`value-list-comma-newline-after`](value-list-comma-newline-after/README.md)：在值列表的逗号之后要求有一个换行符或禁止有空格。
-   [`value-list-comma-newline-before`](value-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of value lists.
-   [`value-list-comma-newline-before`](value-list-comma-newline-before/README.md)：在值列表的逗号之前要求有一个换行符或禁止有空格。
-   [`value-list-comma-space-after`](value-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of value lists.
-   [`value-list-comma-space-after`](value-list-comma-space-after/README.md)：在值列表的逗号之后要求有一个空格或禁止有空格。
-   [`value-list-comma-space-before`](value-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of value lists.
-   [`value-list-comma-space-before`](value-list-comma-space-before/README.md)：在值列表的逗号之前要求有一个空格或禁止有空格。
-   [`value-list-max-empty-lines`](value-list-max-empty-lines/README.md): Limit the number of adjacent empty lines within value lists.
-   [`value-list-max-empty-lines`](value-list-max-empty-lines/README.md)：限制值列表中相邻空行数量。

### Custom property

-   [`custom-property-empty-line-before`](custom-property-empty-line-before/README.md): Require or disallow an empty line before custom properties.
-   [`custom-property-empty-line-before`](custom-property-empty-line-before/README.md)：要求或禁止在自定义属性之前有一行空行。
-   [`custom-property-no-outside-root`](custom-property-no-outside-root/README.md): Disallow custom properties outside of `:root` rules.
-   [`custom-property-no-outside-root`](custom-property-no-outside-root/README.md)：禁止在 `:root` 规则之外使用自定义属性。
-   [`custom-property-pattern`](custom-property-pattern/README.md): Specify a pattern for custom properties.
-   [`custom-property-pattern`](custom-property-pattern/README.md)：为自定义属性指定一个匹配模式。

### Shorthand property

-   [`shorthand-property-no-redundant-values`](shorthand-property-no-redundant-values/README.md): Disallow redundant values in shorthand properties.
-   [`shorthand-property-no-redundant-values`](shorthand-property-no-redundant-values/README.md)：禁止在简写属性中使用冗余值。

### Property

-   [`property-blacklist`](property-blacklist/README.md): Specify a blacklist of disallowed properties.
-   [`property-blacklist`](property-blacklist/README.md)：指定一个禁止使用的属性的黑名单。
-   [`property-case`](property-case/README.md): Specify lowercase or uppercase for properties.
-   [`property-case`](property-case/README.md)：指定属性的大小写。
-   [`property-no-unknown`](property-no-unknown/README.md): Disallow unknown properties.
-   [`property-no-unknown`](property-no-unknown/README.md)：禁止使用未知属性。
-   [`property-no-vendor-prefix`](property-no-vendor-prefix/README.md): Disallow vendor prefixes for properties.
-   [`property-no-vendor-prefix`](property-no-vendor-prefix/README.md)：禁止属性使用浏览器引擎前缀。
-   [`property-whitelist`](property-whitelist/README.md): Specify a whitelist of allowed properties.
-   [`property-whitelist`](property-whitelist/README.md)：指定一个允许使用的属性的白名单。

### Keyframe declaration

-   [`keyframe-declaration-no-important`](keyframe-declaration-no-important/README.md): Disallow `!important` within keyframe declarations.
-   [`keyframe-declaration-no-important`](keyframe-declaration-no-important/README.md)：禁止在 keyframe 声明中使用 `!important`。

### Declaration

-   [`declaration-bang-space-after`](declaration-bang-space-after/README.md): Require a single space or disallow whitespace after the bang of declarations.
-   [`declaration-bang-space-after`](declaration-bang-space-after/README.md)：在感叹号之后要求有一个空格或禁止有空格。
-   [`declaration-bang-space-before`](declaration-bang-space-before/README.md): Require a single space or disallow whitespace before the bang of declarations.
-   [`declaration-bang-space-before`](declaration-bang-space-before/README.md)：在感叹号之前要求有一个空格或禁止有空格。
-   [`declaration-colon-newline-after`](declaration-colon-newline-after/README.md): Require a newline or disallow whitespace after the colon of declarations.
-   [`declaration-colon-newline-after`](declaration-colon-newline-after/README.md)：在冒号之后要求有一个换行符或禁止有空格。
-   [`declaration-colon-space-after`](declaration-colon-space-after/README.md): Require a single space or disallow whitespace after the colon of declarations.
-   [`declaration-colon-space-after`](declaration-colon-space-after/README.md)：在冒号之后要求有一个空格或禁止有空格。
-   [`declaration-colon-space-before`](declaration-colon-space-before/README.md): Require a single space or disallow whitespace before the colon of declarations.
-   [`declaration-colon-space-before`](declaration-colon-space-before/README.md)：在冒号之前要求有一个空格或禁止有空格。
-   [`declaration-empty-line-before`](declaration-empty-line-before/README.md): Require or disallow an empty line before declarations.
-   [`declaration-empty-line-before`](declaration-empty-line-before/README.md)：要求或禁止在声明语句之前有空行。
-   [`declaration-no-important`](declaration-no-important/README.md): Disallow `!important` within declarations.
-   [`declaration-no-important`](declaration-no-important/README.md)：禁止在声明中使用 `!important`。
-   [`declaration-property-unit-blacklist`](declaration-property-unit-blacklist/README.md): Specify a blacklist of disallowed property and unit pairs within declarations.
-   [`declaration-property-unit-blacklist`](declaration-property-unit-blacklist/README.md)：指定一个在声明中禁止使用的属性和单位的黑名单。
-   [`declaration-property-unit-whitelist`](declaration-property-unit-whitelist/README.md): Specify a whitelist of allowed property and unit pairs within declarations.
-   [`declaration-property-unit-whitelist`](declaration-property-unit-whitelist/README.md)：指定一个在声明中允许使用的属性和单位的白名单。
-   [`declaration-property-value-blacklist`](declaration-property-value-blacklist/README.md): Specify a blacklist of disallowed property and value pairs within declarations.
-   [`declaration-property-value-blacklist`](declaration-property-value-blacklist/README.md)：指定一个在声明中禁止使用的属性和值的黑名单。
-   [`declaration-property-value-whitelist`](declaration-property-value-whitelist/README.md): Specify a whitelist of allowed property and value pairs within declarations.
-   [`declaration-property-value-whitelist`](declaration-property-value-whitelist/README.md)：指定一个在声明中允许使用的属性和值的白名单。

### Declaration block

-   [`declaration-block-no-duplicate-properties`](declaration-block-no-duplicate-properties/README.md): Disallow duplicate properties within declaration blocks.
-   [`declaration-block-no-duplicate-properties`](declaration-block-no-duplicate-properties/README.md)：在声明的块中中禁止出现重复的属性。
-   [`declaration-block-no-ignored-properties`](declaration-block-no-ignored-properties/README.md): Disallow property values that are ignored due to another property value in the same rule.
-   [`declaration-block-no-ignored-properties`](declaration-block-no-ignored-properties/README.md)：禁止使用由于其它属性的原因而被忽略的属性。
-   [`declaration-block-no-redundant-longhand-properties`](declaration-block-no-redundant-longhand-properties/README.md): Disallow longhand properties that can be combined into one shorthand property.
-   [`declaration-block-no-redundant-longhand-properties`](declaration-block-no-redundant-longhand-properties/README.md)：禁止使用可以缩写却不缩写的属性。
-   [`declaration-block-no-shorthand-property-overrides`](declaration-block-no-shorthand-property-overrides/README.md): Disallow shorthand properties that override related longhand properties within declaration blocks.
-   [`declaration-block-no-shorthand-property-overrides`](declaration-block-no-shorthand-property-overrides/README.md)：禁止缩写属性覆盖相关普通写法属性。
-   [`declaration-block-properties-order`](declaration-block-properties-order/README.md): Specify the order of properties within declaration blocks.
-   [`declaration-block-properties-order`](declaration-block-properties-order/README.md)：指定声明块中的属性顺序。**待调整**
-   [`declaration-block-semicolon-newline-after`](declaration-block-semicolon-newline-after/README.md): Require a newline or disallow whitespace after the semicolons of declaration blocks.
-   [`declaration-block-semicolon-newline-after`](declaration-block-semicolon-newline-after/README.md)：在声明块的分号之后要求有一个换行符或禁止有空格。
-   [`declaration-block-semicolon-newline-before`](declaration-block-semicolon-newline-before/README.md): Require a newline or disallow whitespace before the semicolons of declaration blocks.
-   [`declaration-block-semicolon-newline-before`](declaration-block-semicolon-newline-before/README.md)：在声明块的分号之前要求有一个换行符或禁止有空格。
-   [`declaration-block-semicolon-space-after`](declaration-block-semicolon-space-after/README.md): Require a single space or disallow whitespace after the semicolons of declaration blocks.
-   [`declaration-block-semicolon-space-after`](declaration-block-semicolon-space-after/README.md)：在声明块的分号之后要求有一个空格或禁止有空格。
-   [`declaration-block-semicolon-space-before`](declaration-block-semicolon-space-before/README.md): Require a single space or disallow whitespace before the semicolons of declaration blocks.
-   [`declaration-block-semicolon-space-before`](declaration-block-semicolon-space-before/README.md)：在声明块的分号之后前要求有一个空格或禁止有空格。
-   [`declaration-block-single-line-max-declarations`](declaration-block-single-line-max-declarations/README.md): Limit the number of declaration within single line declaration blocks.
-   [`declaration-block-single-line-max-declarations`](declaration-block-single-line-max-declarations/README.md)：限制单行声明块中声明的数量。
-   [`declaration-block-trailing-semicolon`](declaration-block-trailing-semicolon/README.md): Require or disallow a trailing semicolon within declaration blocks.
-   [`declaration-block-trailing-semicolon`](declaration-block-trailing-semicolon/README.md)：要求或禁止在声明块中使用拖尾分号。

### Block

-   [`block-closing-brace-empty-line-before`](block-closing-brace-empty-line-before/README.md): Require or disallow an empty line before the closing brace of blocks.
-   [`block-closing-brace-empty-line-before`](block-closing-brace-empty-line-before/README.md)：要求或禁止在闭括号之前有空行。
-   [`block-closing-brace-newline-after`](block-closing-brace-newline-after/README.md): Require a newline or disallow whitespace after the closing brace of blocks.
-   [`block-closing-brace-newline-after`](block-closing-brace-newline-after/README.md)：在闭括号之后要求有一个换行符或禁止有空格。
-   [`block-closing-brace-newline-before`](block-closing-brace-newline-before/README.md): Require a newline or disallow whitespace before the closing brace of blocks.
-   [`block-closing-brace-newline-before`](block-closing-brace-newline-before/README.md)：在闭括号之前要求有一个换行符或禁止有空格。
-   [`block-closing-brace-space-after`](block-closing-brace-space-after/README.md): Require a single space or disallow whitespace after the closing brace of blocks.
-   [`block-closing-brace-space-after`](block-closing-brace-space-after/README.md)：在闭括号之后要求有一个空格或禁止有空格。
-   [`block-closing-brace-space-before`](block-closing-brace-space-before/README.md): Require a single space or disallow whitespace before the closing brace of blocks.
-   [`block-closing-brace-space-before`](block-closing-brace-space-before/README.md)：在闭括号之前要求有一个空格或禁止有空格。
-   [`block-no-empty`](block-no-empty/README.md): Disallow empty blocks.
-   [`block-no-empty`](block-no-empty/README.md)：禁止出现空块。
-   [`block-no-single-line`](block-no-single-line/README.md): Disallow single-line blocks.
-   [`block-no-single-line`](block-no-single-line/README.md)：禁止出现单行块。
-   [`block-opening-brace-newline-after`](block-opening-brace-newline-after/README.md): Require a newline after the opening brace of blocks.
-   [`block-opening-brace-newline-after`](block-opening-brace-newline-after/README.md)：在开括号之后要求有一个换行符。
-   [`block-opening-brace-newline-before`](block-opening-brace-newline-before/README.md): Require a newline or disallow whitespace before the opening brace of blocks.
-   [`block-opening-brace-newline-before`](block-opening-brace-newline-before/README.md)：在括开号之前要求有一个换行符或禁止有空格。
-   [`block-opening-brace-space-after`](block-opening-brace-space-after/README.md): Require a single space or disallow whitespace after the opening brace of blocks.
-   [`block-opening-brace-space-after`](block-opening-brace-space-after/README.md)：在开括号之后要求有一个空格或禁止有空格。
-   [`block-opening-brace-space-before`](block-opening-brace-space-before/README.md): Require a single space or disallow whitespace before the opening brace of blocks.
-   [`block-opening-brace-space-before`](block-opening-brace-space-before/README.md)：在开括号之前要求有一个空格或禁止有空格。

### Selector

-   [`selector-attribute-brackets-space-inside`](selector-attribute-brackets-space-inside/README.md): Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
-   [`selector-attribute-brackets-space-inside`](selector-attribute-brackets-space-inside/README.md)：在特性选择器的方括号内要求有空格或禁止有空格。
-   [`selector-attribute-operator-blacklist`](selector-attribute-operator-blacklist/README.md): Specify a blacklist of disallowed attribute operators.
-   [`selector-attribute-operator-blacklist`](selector-attribute-operator-blacklist/README.md)：指定一个禁止使用的特性(attribute)操作符的黑名单。
-   [`selector-attribute-operator-space-after`](selector-attribute-operator-space-after/README.md): Require a single space or disallow whitespace after operators within attribute selectors.
-   [`selector-attribute-operator-space-after`](selector-attribute-operator-space-after/README.md)：在特性选择器的操作符之后要求有一个空格或禁止有空格。
-   [`selector-attribute-operator-space-before`](selector-attribute-operator-space-before/README.md): Require a single space or disallow whitespace before operators within attribute selectors.
-   [`selector-attribute-operator-space-before`](selector-attribute-operator-space-before/README.md)：在特性选择器的操作符之前要求有一个空格或禁止有空格。
-   [`selector-attribute-operator-whitelist`](selector-attribute-operator-whitelist/README.md): Specify a whitelist of allowed attribute operators.
-   [`selector-attribute-operator-whitelist`](selector-attribute-operator-whitelist/README.md)：指定允许使用的特性(attribute)操作符的白名单。
-   [`selector-attribute-quotes`](selector-attribute-quotes/README.md): Require or disallow quotes for attribute values.
-   [`selector-attribute-quotes`](selector-attribute-quotes/README.md)：要求或禁止特性值使用引号。
-   [`selector-class-pattern`](selector-class-pattern/README.md): Specify a pattern for class selectors.
-   [`selector-class-pattern`](selector-class-pattern/README.md)：为类选择器指定一个匹配模式。
-   [`selector-combinator-space-after`](selector-combinator-space-after/README.md): Require a single space or disallow whitespace after the combinators of selectors.
-   [`selector-combinator-space-after`](selector-combinator-space-after/README.md)：在关系选择符之后要求有一个空格或禁止有空格。
-   [`selector-combinator-space-before`](selector-combinator-space-before/README.md): Require a single space or disallow whitespace before the combinators of selectors.
-   [`selector-combinator-space-before`](selector-combinator-space-before/README.md)：在关系选择符之前要求有一个空格或禁止有空格。
-   [`selector-descendant-combinator-no-non-space`](selector-descendant-combinator-no-non-space/README.md): Disallow non-space characters for descendant combinators of selectors.
-   [`selector-descendant-combinator-no-non-space`](selector-descendant-combinator-no-non-space/README.md)：禁止包含选择符出现非空格字符。
-   [`selector-id-pattern`](selector-id-pattern/README.md): Specify a pattern for id selectors.
-   [`selector-id-pattern`](selector-id-pattern/README.md)：指定一个 id 选择器的匹配模式。
-   [`selector-max-compound-selectors`](selector-max-compound-selectors/README.md): Limit the number of compound selectors in a selector.
-   [`selector-max-compound-selectors`](selector-max-compound-selectors/README.md)：限制复合选择器的数量。
-   [`selector-max-specificity`](selector-max-specificity/README.md): Limit the specificity of selectors.
-   [`selector-max-specificity`](selector-max-specificity/README.md)：限制选择器的优先级。
-   [`selector-nested-pattern`](selector-nested-pattern/README.md): Specify a pattern for the selectors of rules nested within rules.
-   [`selector-nested-pattern`](selector-nested-pattern/README.md)：指定一个嵌套选择器的匹配模式。
-   [`selector-no-attribute`](selector-no-attribute/README.md): Disallow attribute selectors.
-   [`selector-no-attribute`](selector-no-attribute/README.md)：禁用特性选择器。
-   [`selector-no-combinator`](selector-no-combinator/README.md): Disallow combinators in selectors.
-   [`selector-no-combinator`](selector-no-combinator/README.md)：禁用关系选择符。
-   [`selector-no-empty`](selector-no-empty/README.md): Disallow empty selectors.
-   [`selector-no-empty`](selector-no-empty/README.md)：禁止出现空选择器。
-   [`selector-no-id`](selector-no-id/README.md): Disallow id selectors.
-   [`selector-no-id`](selector-no-id/README.md)：禁用 id 选择器。
-   [`selector-no-qualifying-type`](selector-no-qualifying-type/README.md): Disallow qualifying a selector by type.
-   [`selector-no-qualifying-type`](selector-no-qualifying-type/README.md)：禁止使用类型对选择器进行限制。
-   [`selector-no-type`](selector-no-type/README.md): Disallow type selectors.
-   [`selector-no-type`](selector-no-type/README.md)：禁用类型选择器。
-   [`selector-no-universal`](selector-no-universal/README.md): Disallow the universal selector.
-   [`selector-no-universal`](selector-no-universal/README.md)：禁用通配符选择器。
-   [`selector-no-vendor-prefix`](selector-no-vendor-prefix/README.md): Disallow vendor prefixes for selectors.
-   [`selector-no-vendor-prefix`](selector-no-vendor-prefix/README.md)：禁止使用浏览器引擎前缀。
-   [`selector-pseudo-class-blacklist`](selector-pseudo-class-blacklist/README.md): Specify a blacklist of disallowed pseudo-class selectors.
-   [`selector-pseudo-class-blacklist`](selector-pseudo-class-blacklist/README.md)：指定一个禁止使用的伪类选择器的黑名单。
-   [`selector-pseudo-class-case`](selector-pseudo-class-case/README.md): Specify lowercase or uppercase for pseudo-class selectors.
-   [`selector-pseudo-class-case`](selector-pseudo-class-case/README.md)：指定伪类选择器的大小写。
-   [`selector-pseudo-class-no-unknown`](selector-pseudo-class-no-unknown/README.md): Disallow unknown pseudo-class selectors.
-   [`selector-pseudo-class-no-unknown`](selector-pseudo-class-no-unknown/README.md)：禁止使用未知的伪类选择器。
-   [`selector-pseudo-class-parentheses-space-inside`](selector-pseudo-class-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
-   [`selector-pseudo-class-parentheses-space-inside`](selector-pseudo-class-parentheses-space-inside/README.md)：在伪类选择器的括号内要求使用一个空格或禁止使用空格。
-   [`selector-pseudo-class-whitelist`](selector-pseudo-class-whitelist/README.md): Specify a whitelist of allowed pseudo-class selectors.
-   [`selector-pseudo-class-whitelist`](selector-pseudo-class-whitelist/README.md)：指定一个允许使用的伪类选择器的白名单。
-   [`selector-pseudo-element-case`](selector-pseudo-element-case/README.md): Specify lowercase or uppercase for pseudo-element selectors.
-   [`selector-pseudo-element-case`](selector-pseudo-element-case/README.md)：指定伪元素的大小写。
-   [`selector-pseudo-element-colon-notation`](selector-pseudo-element-colon-notation/README.md): Specify single or double colon notation for applicable pseudo-elements.
-   [`selector-pseudo-element-colon-notation`](selector-pseudo-element-colon-notation/README.md):指定伪元素使用单冒号还是双冒号。
-   [`selector-pseudo-element-no-unknown`](selector-pseudo-element-no-unknown/README.md): Disallow unknown pseudo-element selectors.
-   [`selector-pseudo-element-no-unknown`](selector-pseudo-element-no-unknown/README.md)：禁止使用未知的伪元素。
-   [`selector-root-no-composition`](selector-root-no-composition/README.md): Disallow the composition of `:root` in selectors.
-   [`selector-root-no-composition`](selector-root-no-composition/README.md)：禁止 `:root` 混合使用。
-   [`selector-type-case`](selector-type-case/README.md): Specify lowercase or uppercase for type selector.
-   [`selector-type-case`](selector-type-case/README.md)：指定类型选择器的大小写。
-   [`selector-type-no-unknown`](selector-type-no-unknown/README.md): Disallow unknown type selectors.
-   [`selector-type-no-unknown`](selector-type-no-unknown/README.md)：禁用未知的类型选择器。
-   [`selector-max-empty-lines`](selector-max-empty-lines/README.md): Limit the number of adjacent empty lines within selectors.
-   [`selector-max-empty-lines`](selector-max-empty-lines/README.md)：限制选择器中相邻空行数量。

### Selector list

-   [`selector-list-comma-newline-after`](selector-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of selector lists.
-   [`selector-list-comma-newline-after`](selector-list-comma-newline-after/README.md): 要求选择器列表的逗号之后有一个换行符或禁止在逗号之后有空白。
-   [`selector-list-comma-newline-before`](selector-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of selector lists.
-   [`selector-list-comma-newline-before`](selector-list-comma-newline-before/README.md): 要求选择器列表的逗号之前有一个换行符或禁止在逗号之前有空白。
-   [`selector-list-comma-space-after`](selector-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of selector lists.
-   [`selector-list-comma-space-after`](selector-list-comma-space-after/README.md)：要求在选择器列表的逗号之后有一个空格，或禁止有空白。
-   [`selector-list-comma-space-before`](selector-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of selector lists.
-   [`selector-list-comma-space-before`](selector-list-comma-space-before/README.md)：要求在选择器列表的逗号之前有一个空格，或禁止有空白。

### Root rule

-   [`root-no-standard-properties`](root-no-standard-properties/README.md): Disallow standard properties inside `:root` rules.
-   [`root-no-standard-properties`](root-no-standard-properties/README.md)：禁止在 `:root` 中出现标准属性。

### Rule

-   [`rule-nested-empty-line-before`](rule-nested-empty-line-before/README.md): Require or disallow an empty line before nested rules.
-   [`rule-nested-empty-line-before`](rule-nested-empty-line-before/README.md)：在嵌套的规则中要求或禁止有空行。
-   [`rule-non-nested-empty-line-before`](rule-non-nested-empty-line-before/README.md): Require or disallow an empty line before non-nested rules.
-   [`rule-non-nested-empty-line-before`](rule-non-nested-empty-line-before/README.md)：在非嵌套的规则之前要求或禁止有空行。

### Media feature

-   [`media-feature-colon-space-after`](media-feature-colon-space-after/README.md): Require a single space or disallow whitespace after the colon in media features.
-   [`media-feature-colon-space-after`](media-feature-colon-space-after/README.md)：在 media 特性中的冒号之后要求有一个空格或禁止有空格。
-   [`media-feature-colon-space-before`](media-feature-colon-space-before/README.md): Require a single space or disallow whitespace before the colon in media features.
-   [`media-feature-colon-space-before`](media-feature-colon-space-before/README.md)：在 media 特性中的冒号之前要求有一个空格或禁止有空格。
-   [`media-feature-name-blacklist`](media-feature-name-blacklist/README.md): Specify a blacklist of disallowed media feature names.
-   [`media-feature-name-blacklist`](media-feature-name-blacklist/README.md)：指定禁止使用的 media 特性名称的黑名单。
-   [`media-feature-name-case`](media-feature-name-case/README.md): Specify lowercase or uppercase for media feature names.
-   [`media-feature-name-case`](media-feature-name-case/README.md)：指定 media 特性名称的大小写。
-   [`media-feature-name-no-unknown`](media-feature-name-no-unknown/README.md): Disallow unknown media feature names.
-   [`media-feature-name-no-unknown`](media-feature-name-no-unknown/README.md)：禁止使用未知的 media 特性名称。
-   [`media-feature-name-no-vendor-prefix`](media-feature-name-no-vendor-prefix/README.md): Disallow vendor prefixes for media feature names.
-   [`media-feature-name-no-vendor-prefix`](media-feature-name-no-vendor-prefix/README.md)：禁止 media 特性名称带有浏览器引擎前缀。
-   [`media-feature-name-whitelist`](media-feature-name-whitelist/README.md): Specify a whitelist of allowed media feature names.
-   [`media-feature-name-whitelist`](media-feature-name-whitelist/README.md)：指定允许使用的 media 特性名称的白名单。
-   [`media-feature-no-missing-punctuation`](media-feature-no-missing-punctuation/README.md): Disallow missing punctuation for non-boolean media features.
-   [`media-feature-no-missing-punctuation`](media-feature-no-missing-punctuation/README.md)：禁止非布尔类型的 media 特性缺少标点。
-   [`media-feature-parentheses-space-inside`](media-feature-parentheses-space-inside/README.md): Require a single space or disallow whitespace on the inside of the parentheses within media features.
-   [`media-feature-parentheses-space-inside`](media-feature-parentheses-space-inside/README.md)：在media 特性的括号内要求有一个空格或禁止有空格。
-   [`media-feature-range-operator-space-after`](media-feature-range-operator-space-after/README.md): Require a single space or disallow whitespace after the range operator in media features.
-   [`media-feature-range-operator-space-after`](media-feature-range-operator-space-after/README.md)：在 media 特性的范围操作符之后要求有一个空格或禁止有空格。
-   [`media-feature-range-operator-space-before`](media-feature-range-operator-space-before/README.md): Require a single space or disallow whitespace before the range operator in media features.
-   [`media-feature-range-operator-space-before`](media-feature-range-operator-space-before/README.md)：在 media 特性的范围操作符之前要求有一个空格或禁止有空格。

### Custom media

-   [`custom-media-pattern`](custom-media-pattern/README.md): Specify a pattern for custom media query names.
-   [`custom-media-pattern`](custom-media-pattern/README.md)：指定一个自定义媒体查询名称的匹配模式。

### Media query list

-   [`media-query-list-comma-newline-after`](media-query-list-comma-newline-after/README.md): Require a newline or disallow whitespace after the commas of media query lists.
-   [`media-query-list-comma-newline-after`](media-query-list-comma-newline-after/README.md)：在媒体查询的逗号之后要求有一个换行符或禁止有空格。
-   [`media-query-list-comma-newline-before`](media-query-list-comma-newline-before/README.md): Require a newline or disallow whitespace before the commas of media query lists.
-   [`media-query-list-comma-newline-before`](media-query-list-comma-newline-before/README.md)：在媒体查询的逗号之前要求有一个换行符或禁止有空格。
-   [`media-query-list-comma-space-after`](media-query-list-comma-space-after/README.md): Require a single space or disallow whitespace after the commas of media query lists.
-   [`media-query-list-comma-space-after`](media-query-list-comma-space-after/README.md)：在媒体查询的逗号之后要求有一个空格或禁止有空格。
-   [`media-query-list-comma-space-before`](media-query-list-comma-space-before/README.md): Require a single space or disallow whitespace before the commas of media query lists.
-   [`media-query-list-comma-space-before`](media-query-list-comma-space-before/README.md)：在媒体查询的逗号之前要求有一个空格或禁止有空格。

### At-rule

-   [`at-rule-blacklist`](at-rule-blacklist/README.md): Specify a blacklist of disallowed at-rules.
-   [`at-rule-blacklist`](at-rule-blacklist/README.md)：指定一个禁止使用的 at 规则的黑名单。
-   [`at-rule-empty-line-before`](at-rule-empty-line-before/README.md): Require or disallow an empty line before at-rules.
-   [`at-rule-empty-line-before`](at-rule-empty-line-before/README.md)：要求或禁止在 at 规则之前有空行。
-   [`at-rule-name-case`](at-rule-name-case/README.md): Specify lowercase or uppercase for at-rules names.
-   [`at-rule-name-case`](at-rule-name-case/README.md)：指定 at 规则名称的大小写。
-   [`at-rule-name-newline-after`](at-rule-name-newline-after/README.md): Require a newline after at-rule names.
-   [`at-rule-name-newline-after`](at-rule-name-newline-after/README.md)：要求在 at 规则之后有一个换行符。
-   [`at-rule-name-space-after`](at-rule-name-space-after/README.md): Require a single space after at-rule names.
-   [`at-rule-name-space-after`](at-rule-name-space-after/README.md)：要求在 at 规则之后有一个空格。
-   [`at-rule-no-unknown`](at-rule-no-unknown/README.md): Disallow unknown at-rules.
-   [`at-rule-no-unknown`](at-rule-no-unknown/README.md)：禁止使用未知的 at 规则。
-   [`at-rule-no-vendor-prefix`](at-rule-no-vendor-prefix/README.md): Disallow vendor prefixes for at-rules.
-   [`at-rule-no-vendor-prefix`](at-rule-no-vendor-prefix/README.md)：禁止 at 规则使用浏览器引擎前缀。
-   [`at-rule-semicolon-newline-after`](at-rule-semicolon-newline-after/README.md): Require a newline after the semicolon of at-rules.
-   [`at-rule-semicolon-newline-after`](at-rule-semicolon-newline-after/README.md)：要求在 at 规则的分号之后有一个换行符。
-   [`at-rule-whitelist`](at-rule-whitelist/README.md): Specify a whitelist of allowed at-rules.
-   [`at-rule-whitelist`](at-rule-whitelist/README.md)：指定一个允许使用的 at 规则的白名单。

### `stylelint-disable` comment

-   [`stylelint-disable-reason`](stylelint-disable-reason/README.md): Require a reason comment before or after `stylelint-disable` comments.
-   [`stylelint-disable-reason`](stylelint-disable-reason/README.md)：要求在 `stylelint-disable` 注释之前或之后有一个原因的描述注释。

### Comment

-   [`comment-empty-line-before`](comment-empty-line-before/README.md): Require or disallow an empty line before comments.
-   [`comment-empty-line-before`](comment-empty-line-before/README.md)：要求或禁止在注释之前有空行。
-   [`comment-no-empty`](comment-no-empty/README.md):  Disallow empty comments.
-   [`comment-no-empty`](comment-no-empty/README.md)：禁止空注释。
-   [`comment-whitespace-inside`](comment-whitespace-inside/README.md): Require or disallow whitespace on the inside of comment markers.
-   [`comment-whitespace-inside`](comment-whitespace-inside/README.md)：要求或禁止在注释标签内有空白。
-   [`comment-word-blacklist`](comment-word-blacklist/README.md): Specify a blacklist of disallowed words within comments.
-   [`comment-word-blacklist`](comment-word-blacklist/README.md)：指定一个不允许出现在注释中的单词的黑名单。

### General / Sheet

-   [`indentation`](indentation/README.md): Specify indentation.
-   [`indentation`](indentation/README.md)：指定缩进。
-   [`max-empty-lines`](max-empty-lines/README.md): Limit the number of adjacent empty lines.
-   [`max-empty-lines`](max-empty-lines/README.md)：限制相邻空行的数量。
-   [`max-line-length`](max-line-length/README.md): Limit the length of a line.
-   [`max-line-length`](max-line-length/README.md)：限制单行的长度。
-   [`max-nesting-depth`](max-nesting-depth/README.md): Limit the depth of nesting.
-   [`max-nesting-depth`](max-nesting-depth/README.md)：限制允许嵌套的深度。
-   [`no-browser-hacks`](no-browser-hacks/README.md): Disallow browser hacks that are irrelevant to the browsers you are targeting.
-   [`no-browser-hacks`](no-browser-hacks/README.md)：禁用与你使用的浏览器无关的 browser hacks。
-   [`no-descending-specificity`](no-descending-specificity/README.md): Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
-   [`no-descending-specificity`](no-descending-specificity/README.md)：禁止低优先级的选择器出现在高优先级的选择器之后。
-   [`no-duplicate-selectors`](no-duplicate-selectors/README.md): Disallow duplicate selectors.
-   [`no-duplicate-selectors`](no-duplicate-selectors/README.md)：在一个样式表中禁止出现重复的选择器。
-   [`no-empty-source`](no-empty-source/README.md): Disallow empty sources.
-   [`no-empty-source`](no-empty-source/README.md)：禁止空源。
-   [`no-eol-whitespace`](no-eol-whitespace/README.md): Disallow end-of-line whitespace.
-   [`no-eol-whitespace`](no-eol-whitespace/README.md)：禁止行尾空白。
-   [`no-extra-semicolons`](no-extra-semicolons/README.md): Disallow extra semicolons.
-   [`no-extra-semicolons`](no-extra-semicolons/README.md)：禁止多余的分号。
-   [`no-indistinguishable-colors`](no-indistinguishable-colors/README.md): Disallow colors that are suspiciously close to being identical.
-   [`no-indistinguishable-colors`](no-indistinguishable-colors/README.md)：禁用相似的颜色。
-   [`no-invalid-double-slash-comments`](no-invalid-double-slash-comments/README.md): Disallow double-slash comments (`//...`) which are not supported by CSS.
-   [`no-invalid-double-slash-comments`](no-invalid-double-slash-comments/README.md)：禁用 CSS 不支持的双斜线注释 (`//...`)。
-   [`no-missing-end-of-source-newline`](no-missing-end-of-source-newline/README.md): Disallow missing end-of-source newlines.
-   [`no-missing-end-of-source-newline`](no-missing-end-of-source-newline/README.md)：禁止缺少文件末尾的换行符。
-   [`no-unknown-animations`](no-unknown-animations/README.md): Disallow animation names that do not correspond to a `@keyframes` declaration.
-   [`no-unknown-animations`](no-unknown-animations/README.md)：禁止动画名称与 `@keyframes` 声明不符。
-   [`no-unsupported-browser-features`](no-unsupported-browser-features/README.md): Disallow features that are unsupported by the browsers that you are targeting.
-   [`no-unsupported-browser-features`](no-unsupported-browser-features/README.md)：禁止使用浏览器不支持的特性。

