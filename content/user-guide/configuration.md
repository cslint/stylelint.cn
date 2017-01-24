# Configuration

The linter *expects a configuration object*. You can either craft your own config or extend an existing one.

检测器需要使用一个 *配置对象*。你可以自定义一个或扩展一个已存在的配置。

## Loading the configuration object

Finding and loading of your configuration object is done with [cosmiconfig](https://github.com/davidtheclark/cosmiconfig). Starting from the current working directory, it will look for the following possible sources, in this order:

stylelint 使用 [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) 来完成查找和加载你的配置对象。从当前工作目录开始，它将按以下顺序查找尽可能的来源：

-   a `stylelint` property in `package.json`
-   `package.json` 中的 `stylelint` 属性
-   a `.stylelintrc` file
-   `.stylelintrc` 文件
-   a `stylelint.config.js` file exporting a JS object
-   `stylelint.config.js` 文件输出的 JS 对象

The `.stylelintrc` file (without extension) can be in JSON or YAML format. Alternately, you can add a filename extension to designate JSON, YAML, or JS format: `.stylelintrc.json`, `.stylelintrc.yaml`, `.stylelintrc.js`. You may want to use an extension so that your text editor can better interpret the file, and help with syntax checking and highlighting.

`.stylelintrc`文件（不带扩展名）可以是 JSON 或 YAML 格式的。或者，你可以添加一个文件扩展名，来区分 JSON，YAML 或 JS 格式：`.stylelintrc.json`，`.stylelintrc.yaml`，`.stylelintrc.js`。你可能想使用一个扩展名，这样你的文本编辑器可以更好的解释文件，以更好进行语法检查和高亮显示。

Once one of these is found and parsed, the search will stop and that object will be used.

一旦发现它们中的任何一个，将不再继续进行查找，进行解析，将使用解析后的对象。

The configuration search can be short-circuited by using either the `config` or `configFile` options.

当使用 `config` 或 `configFile` 选项时，配置文件的搜索可能会停止。

## The configuration object

The configuration object can have the following properties.

配置对象可以有以下属性。

### `rules`

Rules determine what the linter looks for and complains about. There are [over 150](rules.md) built into stylelint. *No rules are turned on by default*, so this is where you turn on everything you want to check. All the rules must be explicitly configured as *there are no default values*.

规则决定检测器要查找什么和要解决什么。stylelint 有[超过 150](rules.md)条规则。*所有规则默认都是关闭的*，所以，通过该选项你就可以开启相应规则，进行相应的检测。所有规则必须显式的进行配置，因为 *没有默认值*。

The `rules` property is *an object whose keys are rule names and values are rule configurations*. Each rule configuration fits one of the following formats:

`rules`属性是个对象，其键为规则名称，值为规则配置。每个规则配置符合以下形式之一：

-   a single value (the primary option)
-   一个值 (主要选项)
-   an array with two values (`[primary option, secondary options]`)
-   包含两个值的数组 (`[primary option, secondary options]`)
-   `null` (to turn the rule off)
-   `null` (关闭规则)

```json
{
  "rules": {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
      "ignore": ["stylelint-commands", "between-comments"]
    } ],
    "declaration-colon-space-after": "always",
    "indentation": ["tab", {
      "except": ["value"]
    }],
    "max-empty-lines": 2,
    "rule-nested-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    "unit-whitelist": ["em", "rem", "%", "s"]
  }
}
```

Specifying a primary option will turn a rule on.

指定一个主要选项将开启规则。

#### Turning rules off from within your CSS

Rules can be temporarily turned off by using special comments in your CSS. For example, you can either turn all the rules off:

规则可以通过在你的 CSS 中使用特定的注释临时关闭。例如，你可以关闭所有的规则：

```css
/* stylelint-disable */
a {}
/* stylelint-enable */
```

Or you can turn off individual rules:

或者你可以关闭个别的规则：

```css
/* stylelint-disable selector-no-id, declaration-no-important  */
#id {
  color: pink !important;
}
/* stylelint-enable */
```

You can turn off rules for individual lines only with a `/* stylelint-disable-line */` comment, after which you do not need to explicitly re-enable them:

你可以使用 `/* stylelint-disable-line */` 注释在个别的行上关闭规则，在其之后你不需要显式的重新开启它们：

```css
#id { /* stylelint-disable-line */
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}
```

You can also turn off rules for *the next line only* with a `/* stylelint-disable-next-line */` comment, after which you do not need to explicitly re-enable them:

你也可以使用 `/* stylelint-disable-next-line */` 注释在下一行上关闭规则，在其之后你不需要显式的重新开启它们：

```css
#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

Complex, overlapping disabling & enabling patterns are supported:

复杂、重叠的禁用和启用模式也是支持的：

```css
/* stylelint-disable */
/* stylelint-enable foo */
/* stylelint-disable foo */
/* stylelint-enable */
/* stylelint-disable foo, bar */
/* stylelint-disable baz */
/* stylelint-enable baz, bar */
/* stylelint-enable foo */
```

**Caveat:** Comments within *selector and value lists* are currently ignored.

**警告：** *选择器和值列表* 中的注释目前是被忽略的。

#### Severities: error & warning

By default, all rules have an `"error"`-level severity. You can change this default by adding a `defaultSeverity` property to your configuration (see below).

默认情况下，所有的规则有一个 `"error"`级别的严重程度。你可以在配置文件中通过添加一个 `defaultSeverity` 属性来改变这种默认情况(见下文)。

To adjust any specific rule's severity, use the secondary option `severity`. The available values for `severity` are:

使用第二个选项 `severity` 来调整任何特定规则的严重程度。`severity` 可用的值为：

-   `"warning"`
-   `"warning"`
-   `"error"`
-   `"error"`

```js
// error-level severity examples
{ "indentation": 2 }
{ "indentation": [2] }

// warning-level severity examples
{ "indentation": [2, { "severity": "warning" } ] }
{ "indentation": [2, {
    "except": ["value"],
    "severity": "warning"
  }]
}
```

Different reporters may use these severity levels in different way, e.g. display them differently, or exit the process differently.

不同的报告以不同的方式使用这些严重程度级别，比如，以不同的方式进行显示，或以不同的方式退出程序。

#### Custom Messages

If you want to deliver a custom message when a rule is violated, you can do so in two ways: provide a `message` option for the rule, or write a custom formatter.

当一个规则被触发时，如果你想实现一个自定义的消息，有两种方式可以实现：为规则提供一个 `message` 选项，或写一个自定义的格式化器。

All rules accept a `message` secondary option that, if provided, will be substituted for whatever standard message would be provided. For example, the following rule configuration would substitute in a couple of custom message:

所有的规则接受一个  `message` 作为第二选项，如果提供，将替代提供的任何标准的消息。例如，以下规则配置会使用一些自定义的消息：

```json
{
  "color-hex-case": [ "lower", {
    "message": "Lowercase letters are easier to distinguish from numbers"
  } ],
  "indentation": [ 2, {
    "ignore": ["block"],
    "message": "Please use 2 spaces for indentation. Tabs make The Architect grumpy.",
    "severity": "warning"
  } ]
}
```

Writing a [custom formatter](../developer-guide/formatters.md) gives you maximum control if you need serious customization.

如果你需要严格的定制，写一个[自定义格式化器](../developer-guide/formatters.md)会给你最大控制权。

### `extends`

Your configuration can *extend* an existing configuration (whether your own or a third-party config). When one configuration extends another, it starts with the other's properties then adds to and overrides what's there.

你的配置可以 *extend* 一个已存在的配置文件(无论是你自己的还是第三方的配置)。当一个配置继承了里一个配置，它将会添加自己的属性并覆盖原有的属性。

You can extend an array of existing configurations, with each item in the array taking precedence over the following (so the first item overrides everything else, the second item overrides everything but the first, the last gets overridden by everything else, etc.).

你可以继承一个已存在的配置数组，数组中的每一项都优先于下一项(所以，第一项覆盖所有，第二项覆盖除了第一项之外的所有项，最后一项被其它所有项覆盖，等等)。

For example, extending the [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and then changing indentation to tabs and turning off the `number-leading-zero` rule:

例如，继承 [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)，然后将缩进改为 tab 缩进，关闭 `number-leading-zero` 规则：

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

Or starting with `stylelint-config-standard`, then layering `myExtendableConfig` on top of that, and then overriding the indentation rule:

或者继承 `stylelint-config-standard` 和 `myExtendableConfig`，并且覆盖缩进规则：

```json
{
  "extends": [
    "stylelint-config-standard",
    "./myExtendableConfig"
  ],
  "rules": {
    "indentation": "tab"
  }
}
```

The value of `"extends"` is a "locater" (or an array of "locaters") that is ultimately `require()`d, so can fit whatever format works with Node's `require.resolve()` algorithm. That means the a "locater" can be:

`"extends"` 的值是个“定位器” (或 “定位器” 数组)，也是最终被 `require()` 的，因此，可以使用 Node 的 `require.resolve()` 算法适应任何格式。这意味着一个“定位器”可以是：

-   The name of a module in `node_modules` (e.g. `stylelint-config-standard`; that module's `main` file must be a valid JSON configuration)
-   `node_modules`中的某个模块名称 (比如，`stylelint-config-standard`；模块的 `main` 文件必须是一个有效的 JSON 配置)
-   An absolute path to a file (which makes sense if you're creating a JS object in a Node context and passing it in) with a `.js` or `.json` extension.
-   一个带有 `.js` 或 `.json` 扩展名的文件 (which makes sense 如果你在 Node 上下文中创建了一个 JS 对象，并将它传入也是有效的)的绝对路径。
-   A relative path to a file with a `.js` or `.json` extension, relative to the referencing configuration (e.g. if configA has `extends: "../configB"`, we'll look for `configB` relative to configA).
-   一个带有 `.js` 或 `.json` 扩展名的文件的相对路径，相对于引用的配置 (例如，如果 configA 是 `extends: "../configB"`，我们将查找 `configB` 相对于 configA)。

*Because of `extends`, you can create and use shareable stylelint configurations.* Use the `stylelint-config` keyword within your `package.json` if publishing your config to npm.

*正因为`extends`，你可以创建和使用可分享的 stylelint 配置。* 如果你要发布你的配置到 npm，在你的 `package.json` 文件中使用 `stylelint-config` 关键字。

### `plugins`

Plugins are rules or sets of rules built by the community that support methodologies, toolsets, *non-standard* CSS features, or very specific use cases.

插件是由社区创建的规则或规则集，支持方法论、工具集，*非标准* 的 CSS 特性，或非常特定的用例。

To use one, add a `"plugins"` array to your config, containing "locaters" identifying the plugins you want to use. As with `extends`, above, a "locater" can be either an npm module name, an absolute path, or a path relative to the invoking configuration file.

使用插件的话，在你的配置中添加一个 `"plugins"` 数组，包含“定位器”标识出你要使用的插件。同上面的 `extends`，一个“定位器”可以是一个 npm 模块名，一个绝对路径，或一个相对于要调用的配置文件的路径。

Once the plugin is declared, within your `"rules"` object *you'll need to add options* for the plugin's rule(s), just like any standard rule. You will have to look at the plugin's documentation to know what the rule name should be.

一旦声明了插件，在你的 `"rules"` 对象中，你将需要为插件的规则添加选项，就像其它标准的规则一样。你需要查看插件的文档去了解规则的名称。

```json
{
  "plugins": [
    "../special-rule.js"
  ],
  "rules": {
    "plugin/special-rule": "everything"
  }
}
```

A "plugin" can provide a single rule or a set of rules. If the plugin you use provides a set, just invoke the module in your `"plugins"` configuration value, and use the rules it provides in `"rules"`. For example:

一个插件可以提供一个规则或一组规则。如果你使用的插件提供了一组规则，就调用 `"plugins"` 值中的模块，并在 `"rules"` 中使用它的规则。例如：

```json
{
  "plugins": [
    "../some-rule-set.js"
  ],
  "rules": {
    "some-rule-set/first-rule": "everything",
    "some-rule-set/second-rule": "nothing",
    "some-rule-set/third-rule": "everything"
  }
}
```

### `processors`

Processors are functions that hook into stylelint's pipeline, modifying code on its way into stylelint and modifying results on their way out.

Processors 是 stylelint 的钩子函数，可以以它的方式修改代码，也可以在它们退出时修改结果。

*Processors can only be used with the CLI and the Node API, not with the PostCSS plugin.* (The PostCSS plugin will ignore them.)

*Processors 只能用在 命令行 和 Node API，不适用于 PostCSS 插件* (PostCSS 插件将忽略它们。)

Processors can enable stylelint to lint the CSS within non-stylesheet files. For example, you could lint the CSS within `<style>` tags in HTML, code blocks in Markdown, or strings in JavaScript.

Processors 可以使 stylelint 检测非样式表文件中的 CSS。例如，你可以检测 HTML 内中 `<style>` 标签中的 CSS，Markdown文件中代码块或 JavaScript 中的字符串。 

To use one, add a `"processors"` array to your config, containing "locaters" identifying the processors you want to use. As with `extends`, above, a "locater" can be either an npm module name, an absolute path, or a path relative to the invoking configuration file.

使用 processors 的话，在你的配置中添加一个 `"processors"` 数组，包含“定位器”标识出你要使用的 processors。同上面的 `extends`，一个“定位器”可以是一个 npm 模块名，一个绝对路径，或一个相对于要调用的配置文件的路径。

```json
{
  "processors": ["stylelint-html-processor"],
  "rules": {..}
}
```

If your processor has options, make that item an array whose first item is the "locator" and second item is the options object.

如果你的 processor 有选项，把它们放到一个数组里，第一项是“定位器”，第二项是选项对象。

```json
{
  "processors": [
    "stylelint-html-processor",
    [ "some-other-processor", { "optionOne": true, "optionTwo": false } ]
  ],
  "rules": {..}
}
```

### `ignoreFiles`

Provide a glob or array of globs to ignore specific files.

提供一个 glob 或 globs 数组，忽略特定的文件。

(An alternative method is to use a `.stylelintignore` file, described below.)

(另一种方法是使用 `.stylelintignore` 文件，会在下面描述。)

If the globs are absolute paths, they are used as it is. If they are relative, they are analyzed relative to

如果 globs 是绝对路径，就直接使用它们。如果是相对路径，它们将相对：

-   `configBasedir`, if it's provided;
-   `configBasedir`，如果有的话；
-   the config's filepath, if the config is a file that stylelint found a loaded;
-   stylelint 使用的配置的文件路径。
-   or `process.cwd()`.
-   或 `process.cwd()`。

The `ignoreFiles` property is stripped from extended configs: only the root-level config can ignore files.

如果 `ignoreFiles` 属性被继承的配置移除：只有根配置可以忽略文件。

### `defaultSeverity`

The default severity level for all rules that do not have a severity specified in their secondary options. The available values for `severity` are:

所有在第二个选项中没有指定严重级别的规则的默认严重级别。

-   `"warning"`
-   `"warning"`
-   `"error"`
-   `"error"`

## `.stylelintignore`

You can use a `.stylelintignore` file (or point to another ignore patterns file) to ignore specific files.

你可以使用一个 `.stylelintignore` 文件(或指定其它的忽略模式文件)忽略指定的文件。

(An alternative method is to use a `config.ignoreFiles`, described above.)

(另一种方式是使用 `config.ignoreFiles`，如上描述。)

The patterns in your `.stylelintignore` file must match [`.gitignore` syntax](https://git-scm.com/docs/gitignore). (Behind the scenes, [`node-ignore`](https://github.com/kaelzhang/node-ignore) parses your patterns.) One implication of this is that *your patterns in `.stylelintignore` are always analyzed relative to `process.cwd()`.*

你的 `.stylelintignore` 文件中的模式必须匹配 [`.gitignore` 语法](https://git-scm.com/docs/gitignore)。(在幕后使用[`node-ignore`](https://github.com/kaelzhang/node-ignore) 来解析你的模式。) 这就意味着 *`.stylelintignore` 中模式总是相对于 `process.cwd()`。*

stylelint will look for a `.stylelintignore` file in `process.cwd()`. You can also specify a path to your ignore patterns file (absolute or relative to `process.cwd()`) using the `--ignore-path` (in the CLI) and `ignorePath` (in JS) options.


styleline 将在 `process.cwd()` 中查找 `.stylelintignore` 文件。你可以在命令行中使用 `--ignore-path` 和在 JS 中使用 `ignorePath` 选项来指定你一个你要忽略模式的文件路径(绝对或相对于`process.cwd()`)。