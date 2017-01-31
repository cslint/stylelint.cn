# stylelint

<!--[![NPM version](http://img.shields.io/npm/v/stylelint.svg)](https://www.npmjs.org/package/stylelint) [![Build Status](https://travis-ci.org/stylelint/stylelint.svg?branch=master)](https://travis-ci.org/stylelint/stylelint) [![Build status](https://ci.appveyor.com/api/projects/status/wwajr0886e00g8je/branch/master?svg=true)](https://ci.appveyor.com/project/stylelint/stylelint/branch/master) [![NPM Downloads](https://img.shields.io/npm/dm/stylelint.svg)](https://www.npmjs.org/package/stylelint) [![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=9282518)](https://www.bountysource.com/trackers/9282518-stylelint?utm_source=9282518&utm_medium=shield&utm_campaign=TRACKER_BADGE)-->


A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.

一个强大的现代 CSS 检测器，可以让你在样式表中遵循一致的约定和避免错误。

## Features

-   **Over one hundred and fifty rules:** Including those that:
-   **超过 150 条规则：**包括：
    -   **Catch errors**: e.g. invalid hex colors, indistinguishable colors, or overriding shorthand properties.
    -   **捕捉错误：**如，无效的十六进制颜色，无法识别的颜色，或覆盖了简写属性。
    -   **Enforce best practices**: e.g. keeping specificity low or disallowing vendor prefixes in your source code.
    -   **最佳实践：**如，在你的源码中保持小写，或禁用浏览器引擎前缀。
    -   **Control what languages features can be used**: e.g. whitelisting specific units, properties and functions, or disallowing certain selector types.
    -   **控制可以使用的语言特性：**如，特定单位的白名单，属性和函数 或禁止特定的选择器类型。
    -   **Enforce code style conventions**: e.g. checking the spacing around the colon in declarations or specifying patterns for class selectors.
    -   **强制代码风格规范：**如，检查冒号周围的空格或指定类选择的匹配模式。
-   **Support for the latest CSS syntax:** Including custom properties, range context for media features, calc() and nesting.
-   **支持最新的 CSS 语法：**包括自定义属性，media 特性的范围上下文，calc() 和 嵌套。
-   **Understands *CSS-like* syntaxes:** The linter is powered by [PostCSS](https://github.com/postcss/postcss), so it understands any syntax that PostCSS can parse, including SCSS, [SugarSS](https://github.com/postcss/sugarss), and *experimental support* for Less.
-   **理解 *CSS-like* 语法：** styelint 是基于 [PostCSS](https://github.com/postcss/postcss) 的，所以它能理解 PostCSS 可以解析的任何语法，包括 SCSS，[SugarSS](https://github.com/postcss/sugarss) 和 Less 的*实验特性*。
-   **Completely unopinionated:** Only enable the rules you want, and configure them with options that tailor the linter to your needs.
-   **灵活可配置：**只启用你想要的规则，在配置它们的选项，来满足你的需求。
-   **Support for plugins:** It's easy to create your own rules and add them to the linter.
-   **支持插件：**很容易创建你自己的规则，并将它们添加到检测器。
-   **Automatically fix some stylistic warnings:** By using [stylefmt](https://github.com/morishitter/stylefmt) which supports stylelint configuration files.
-   **自动修复：**通过使用支持 stylelint 配置文件的 [stylefmt](https://github.com/morishitter/stylefmt) 可以进行自动修复。
-   **Shareable configs:** If you don't want to craft your own config, you can extend a shareable config.
-   **可分享的配置：**如果你不想精雕细琢你自己的配置，你可以继承一个可分享的配置。
-   **Options validator:** So that you can be confident that your config is valid.
-   **选项验证器：**你可以非常确信你的配置是有效的。
-   **Well tested:** Nearly twenty five thousand tests cover the internals and rules.
-   **充分的测试：**将近 25000 个测试用例覆盖所有代码和规则。
-   **Growing community:** Used by [Facebook](https://code.facebook.com/posts/879890885467584/improving-css-quality-at-facebook-and-beyond/), [Github](https://github.com/primer/stylelint-config-primer), [Wikimedia](https://github.com/wikimedia/stylelint-config-wikimedia), [GSA](https://github.com/18F/stylelint-rules/), and [WordPress](https://github.com/ntwb/stylelint-config-wordpress/) among others.
-   **日益增长的社区：**[Facebook](https://code.facebook.com/posts/879890885467584/improving-css-quality-at-facebook-and-beyond/)，[Github](https://github.com/primer/stylelint-config-primer)，[Wikimedia](https://github.com/wikimedia/stylelint-config-wikimedia)，[GSA](https://github.com/18F/stylelint-rules/) 和 [WordPress](https://github.com/ntwb/stylelint-config-wordpress/) 等等都在使用。

## Example output

![Example](https://github.com/stylelint/stylelint/raw/master/example.png?raw=true)

## Getting started

With stylelint, it's easy to start linting your CSS:

使用 stylelint，可以很容易开始检测你的 CSS：

1.  Decide how you want to use stylelint:
1.  决定通过什么方式使用 stylelint：
    -   [via the stylelint CLI](/docs/user-guide/cli.md)
    -   [通过 stylelint 命令行](/docs/user-guide/cli.md)
    -   [via a plugin for your build tool](/docs/user-guide/complementary-tools.md#build-tool-plugins) (gulp, webpack etc)
    -   [通过构建工具的插件](/docs/user-guide/complementary-tools.md#build-tool-plugins) (gulp, webpack etc)
    -   [via a plugin for your text editor](/docs/user-guide/complementary-tools.md#editor-plugins) (atom, sublime text etc)
    -   [通过编辑器的插件](/docs/user-guide/complementary-tools.md#editor-plugins) (atom, sublime text etc)
    -   [via the stylelint Node API](/docs/user-guide/node-api.md)
    -   [通过 stylelint Node API](/docs/user-guide/node-api.md)
    -   [via the stylelint PostCSS plugin](/docs/user-guide/postcss-plugin.md)
    -   [通过 stylelint PostCSS plugin](/docs/user-guide/postcss-plugin.md)
2.  Create your [configuration object](/docs/user-guide/configuration.md) by either extending a shared config or crafting your own:
2.  通过以下两种方式创建你自己的[配置对象](/docs/user-guide/configuration.md)：
    -   To extend a shared config, we recommend using [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard). It includes over 80 of stylelint's rules with sensible defaults. (You can always override specific rules after extending the config.) We update the config with each new release of stylelint. Alternately, you can [search for](https://www.npmjs.com/browse/keyword/stylelint-config) a community config and [extend](/docs/user-guide/configuration.md#extends) that instead.
    -   继承一个可分享的配置，我们推荐使用 [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)。它包括超过 80 个 stylelint 规则，而且都有合理的默认值。 (你总是可以通过继承这个配置来覆盖特定的规则。) 我们会随每个 stylelint 新版本更新这个配置。你还可以 [查找](https://www.npmjs.com/browse/keyword/stylelint-config) 一个社区的配置，然后 [extend](/docs/user-guide/configuration.md#extends)它。
    -   To craft your own config, first [learn about how rules are named and how they work together](/docs/user-guide/about-rules.md), then either:
    -   创建自己的配置，首先[学习规则如何命名，如何协同配合](/docs/user-guide/about-rules.md)，然后：
        -   Start small and only learn about [the rules](/docs/user-guide/rules.md) you want to turn on and enforce. *All of the rules are off by default*, and so you can start small, growing your config over time as you have a chance to explore more of the rules.
        -   先了解一下你想开启和应用的[规则](/docs/user-guide/rules.md)。 *所有的规则默认都是关闭的*，因此你可以一步一步来，随着你对规则的了解，慢慢增加你的配置。
        -   Or copy-paste [this example configuration](docs/user-guide/example-config.md), which lists all of stylelint's rules and their primary options. Then you can edit the options of each rule to your liking, and remove (or turn off with `null`) the rules that you don't care to enforce.
        -   或者复制粘贴[示例配置](docs/user-guide/example-config.md)，包含了所有的 stylelint 规则和主要选项。然后你可以编辑每个你喜欢的规则的选项，也可以移除(或通过设置 `null` 关闭)你不关心的规则。
3.  Lint!
3.  检测!

## Guides

You'll find more detailed information on using stylelint and tailoring it to your needs in our guides:

你可以在以下指南中根据自己需要详细了解如何使用 stylelint：

-   [User guide](docs/user-guide.md) - Usage, configuration, FAQ and complementary tools.
-   [用户指南](docs/user-guide.md) - 使用，配置，常见问题解答和工具。
-   [Developer guide](docs/developer-guide.md) - Contributing to stylelint and writing your own plugins & formatters.
-   [开发者指南](docs/developer-guide.md) - 参与到 stylelint，写你自己的插件和格式化器。

## Need help?

If you're looking for help or have a support question, then check out our [FAQ](docs/user-guide/faq.md) first. If the answer to your problem isn't there, then go to [stackoverflow](http://stackoverflow.com/questions/tagged/stylelint). stackoverflow is a huge Question and Answer community, and tagging your post there with "stylelint" will catch the stylelint team's attention.

如果你寻求帮助或有问题需要支持，请先查看[FAQ](docs/user-guide/faq.md)。如果没有找到你想要的答案，就去[stackoverflow](http://stackoverflow.com/questions/tagged/stylelint)。stackoverflow 是一个非常大的问答社区，在你的文章打上 "stylelint" 标签，这样会吸引 stylelint 团队的注意。

If you think you've found a bug or if you have feature request, then create a [new GitHub issue](https://github.com/stylelint/stylelint/issues/new). Be sure to follow the issue template, answering each question, as this helps us greatly in understanding your problem or request.

如果你发现了 bug 或有新特性请求，请发[issue](https://github.com/stylelint/stylelint/issues/new)。请按照 issue 模板，回答每一个问题，这将帮助我们理解你的问题或请求。

Upgrading? Please read our [CHANGELOG](CHANGELOG.md) to learn what changes to expect in the latest version, whether that's new features, bug fixes, renamed rules, or whatever else.

升级？请阅读我们的[变更日志](CHANGELOG.md) 了解最新版本的变化，新特性，bug 复现，规则重命名或其他。

## Help out

There is always a lot of work to do, and already well over 150 rules to maintain. So please help out in any way that you can:

还有很多事情需要去做，而且有超过 150 条规则需要维护。所以，用你的方式参与进来吧：

-   Chime in on any open [issue](https://github.com/stylelint/stylelint/issues) or [pull request](https://github.com/stylelint/stylelint/pulls).
-   参与到 [issue](https://github.com/stylelint/stylelint/issues) 或 [pull request](https://github.com/stylelint/stylelint/pulls)。
-   Create, enhance, and debug rules (see our guide to ["Working on rules"](docs/developer-guide/rules.md)).
-   创建，加强，调试规则 (查看我们的指南 ["Working on rules"](docs/developer-guide/rules.md))。
-   Improve [documentation](docs/).
-   提高改善[文档](docs/)。
-   Add new tests to *absolutely anything*.
-   添加新的测试用例。
-   Work on [improving performance of rules](docs/developer-guide/rules.md#improving-the-performance-of-a-new-or-an-existing-rule).
-   [提高规则的性能](docs/developer-guide/rules.md#improving-the-performance-of-a-new-or-an-existing-rule)。
-   Open new issues about your ideas for making stylelint better, and pull requests to show us how your idea works.
-   通过发 issue 告诉我们你的想法，让 stylelint 变得更好，发 pull request 向我们展示你的想法是如何运作的。
-   Create or contribute to ecosystem tools, like the plugins for [Atom](https://github.com/AtomLinter/linter-stylelint) and [Sublime Text](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint).
-   创建或贡献生态系统的工具，比如 [Atom](https://github.com/AtomLinter/linter-stylelint) 的插件和 [Sublime Text](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint) 插件。

[License](https://raw.githubusercontent.com/stylelint/stylelint/master/LICENSE)
