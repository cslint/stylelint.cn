# The stylelint PostCSS plugin

As with any other [PostCSS plugin](https://github.com/postcss/postcss#plugins), you can use stylelint's PostCSS plugin either with a PostCSS runner or with the PostCSS JS API directly.

与其它[PostCSS 插件](https://github.com/postcss/postcss#plugins)一样，你可以使用 stylelint 的 PostCSS 插件

*However, if a dedicated stylelint task runner plugin [is available](complementary-tools.md) (e.g. [gulp-stylelint](https://github.com/olegskl/gulp-stylelint) or [grunt-stylelint](https://github.com/wikimedia/grunt-stylelint)) we recommend you use that rather than this plugin, as they provide better reporting.*

*但是，如果有一个专门的 stlyelint [插件](complementary-tools.md) (如 [gulp-stylelint](https://github.com/olegskl/gulp-stylelint) 或 [grunt-stylelint](https://github.com/wikimedia/grunt-stylelint))，我们推荐你使用它们，因为它们会提供更好输出。*

## Installation

stylelint is an [npm package](https://www.npmjs.com/package/stylelint). Install it using:

stylelint 是一个 [npm 包](https://www.npmjs.com/package/stylelint)。使用以下命令进行安装：

```console
npm install stylelint
```

## Options

The plugin accepts an options object as argument, with the following properties:

插件接收一个对象选项作为参数，该对象有以下属性：

### `config`

A [stylelint configuration object](configuration.md).

一个 [stylelint 配置对象](configuration.md)。

If no `config` or `configFile` is passed, stylelint will look for a `.stylelintrc` configuration file.

如果没有传递 `config` 或 `configFile`，stylelint 将查找一个 `.stylelintrc` 配置文件。

### `configFile`

The path to a JSON, YAML, or JS file that contains your [stylelint configuration object](configuration.md).

一个包含你的 [stylelint 配置对象](configuration.md) 的 JSON，YAML 或 JS 文件路径。

It should be either absolute or relative to the directory that your process is running from (`process.cwd()`). We'd recommend absolute.

它应该是绝对路径或是相对于你的程序运行的目录（`process.cwd()`）的相对路径。我们推荐使用绝对路径。

### `configBasedir`

An absolute path to the directory that relative paths defining `extends` and `plugins` are *relative to*.

一个定义 `extends` 和 `plugins` 的相对路径的目录的绝对路径。

This is only necessary if you passed an object directly through the `config` property. If you used
`configFile`, this option is not necessary.

如果你直接通过 `config` 属性传递一个对象，那么该选项是必须的。如果你使用的是 `configFile`，那么该选项不是必须的。

If the `config` object passed uses relative paths, e.g. for `extends` or `plugins`, you are going to have to pass a `configBasedir`. If not, you do not need this.

如果 `config` 对象使用相对路径，比如，对于 `extends` 或 `plugins`，你需要传递 `configBasedir`。反之，不需要。

### `configOverrides`

A partial stylelint configuration object whose properties will override the existing config object, whether that config was loaded via the `config` option or a `.stylelintrc` file.

部分 stylelint 配置对象的属性将会覆盖已存在的通过 `config` 选项或 `.stylelintrc` 文件加载的配置对象。

The difference between the `configOverrides` and `config` options is this: If any `config` object is passed, stylelint does not bother looking for a `.stylelintrc` file and instead just uses whatever `config` object you've passed; but if you want to *both* load a `.stylelintrc` file *and* override specific parts of it, `configOverrides` does just that.

`configOverrides` 和 `config` 选项的不同点在于：如果使用了 `config` 对象，stylelint 就不会去查找 `.stylelintrc` 文件了，而是使用你传入的 `config` 对象；但是，如果你想加载 `.stylelintrc` 文件而且像覆盖特定的部分，`configOverrides` 就派上用场了。

### `ignoreDisables`

If `true`, all disable comments (e.g. `/* stylelint-disable block-no-empty */`) will be ignored.

如果为 `true`，所有的禁用注释(比如，`/* stylelint-disable block-no-empty */`) 将被忽略。

You can use this option to see what your linting results would be like without those exceptions.

你可以使用该选项查看不使用这样例外的情况下，你的检测结果是怎样的。

### `ignorePath`

A path to a file containing patterns describing files to ignore. The path can be absolute or relative to `process.cwd()`. By default, stylelint looks for `.stylelintignore` in `process.cwd()`. See [Configuration](configuration.md#stylelintignore).

一个文件的路径，该文件包含要忽略文件的模式。该路径可以是绝对或相对于 `process.cwd()` 的路径。默认情况下，stylelint 会查找 在`process.cwd()` 中查找 `.stylelintignore`。查看[配置](configuration.md#stylelintignore)。

## Usage examples

We recommend you lint your CSS before applying any transformations. You can do this by either:

我们推荐你在应用任何转换之前检测你的 CSS。你可以：

-   creating a separate lint task that is independent of your build one.
-   创建一个单独的检测任务，独立于你的构建。
-   using the [`plugins` option](https://github.com/postcss/postcss-import#plugins) of [`postcss-import`](https://github.com/postcss/postcss-import) or [`postcss-easy-import`](https://github.com/TrySound/postcss-easy-import) to lint the your files before any transformations.
-   使用 [`postcss-import`](https://github.com/postcss/postcss-import) 或 [`postcss-easy-import`](https://github.com/TrySound/postcss-easy-import) 的 [`plugins` 选项](https://github.com/postcss/postcss-import#plugins) 在转换之前检测你的文件。
-   placing stylelint at the beginning of your plugin pipeline.
-   将 stylelint 放在你的插件管道前面。

You'll also need to use a reporter. *The stylelint plugin registers warnings via PostCSS*. Therefore, you'll want to use it with a PostCSS runner that prints warnings or another PostCSS plugin whose purpose is to format and print warnings (e.g. [`postcss-reporter`](https://github.com/postcss/postcss-reporter)).

你也需要使用一个报告。*stylelint 插件通过 PostCSS 注册警告*。因此，你要结合 PostCSS 运行器或其它格式化打印警告的PostCSS 插件来使用。

### Example A

A separate lint task that uses the plugin via the PostCSS JS API to lint Less using [`postcss-less`](https://github.com/webschik/postcss-less).

一个单独的检测任务样例，它使用[`postcss-less`](https://github.com/webschik/postcss-less) 调用 PostCSS JS API 检测 Less。

*Note: the stylelint PostCSS plugin, unlike the stylelint CLI and node API, doesn't have a `syntax` option. So, the syntax must be set within the [PostCSS options](https://github.com/postcss/postcss#options) as there can only be one parser/syntax in a pipeline.*

*注意：stlyelint 的 PostCSS 插件，不像 stylelint 的命令行和 Node API，没有 `syntax` 选项。因此，必须在[PostCSS 选项](https://github.com/postcss/postcss#options)中设置 `syntax`，在一个管道中有且只能有一个解析器或语法*

```js
var fs = require("fs")
var less = require("postcss-less")
var postcss = require("postcss")

// CSS to be processed
var css = fs.readFileSync("input.css", "utf8")

postcss([
  require("stylelint")({ /* your options */ })
  require("postcss-reporter")({ clearMessages: true })
])
  .process(css, {
    from: "input.css",
    syntax: less
  })
  .then()
  .catch(err => console.error(err.stack))
```

The same pattern can be used to lint SCSS or [SugarSS](https://github.com/postcss/sugarss) syntax.

同样的模式可以被用来检测 SCSS 或 [SugarSS](https://github.com/postcss/sugarss) 语法。

### Example B

A combined lint and build task where the plugin is used via the PostCSS JS API, but within [`postcss-import`](https://github.com/postcss/postcss-import) (using the its `plugins` option) so that the source files are linted before any transformations.

一个融合了检测和构建任务的样例，插件调用 PostCSS JS API，结合 [`postcss-import`](https://github.com/postcss/postcss-import)使用(使用它的 `plugins` 选项)，因此，源文件在转换之前就进行了检测。

```js
var fs = require("fs")
var postcss = require("postcss")
var stylelint = require("stylelint")

// CSS to be processed
var css = fs.readFileSync("lib/app.css", "utf8")

postcss(
  processors: [
    require("postcss-import")({
      plugins: [
        require("stylelint")({ /* your options */ })
      ]
    }),
    require("postcss-cssnext")
    require("postcss-reporter")({ clearMessages: true })
  ]
)
  .process(css, { from: 'lib/app.css', to: 'app.css' })
  .then(function (result) {
    fs.writeFileSync('app.css', result.css);
    if ( result.map ) fs.writeFileSync('app.css.map', result.map);
  })
  .catch(err => console.error(err.stack))
```
