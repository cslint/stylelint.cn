# The stylelint CLI

## Installation

stylelint is an [npm package](https://www.npmjs.com/package/stylelint). Install it using:

stylelint 是一个 [npm 包](https://www.npmjs.com/package/stylelint)。使用以下命令进行安装：

```console
npm install -g stylelint
```

## Usage

`stylelint --help` prints the CLI documentation.

`stylelint --help` 打印命令行的文档。

The CLI outputs formatted results into `process.stdout`, which you can read with your human eyes or pipe elsewhere (e.g. write the information to a file).

命令行将格式化后的结果输出到 `process.stdout`，你可以自行阅读或输出到其他地方（如，将信息写到一个文件）

### Examples

Looking for `.stylelintrc` and linting all `.css` files in the `foo` directory:  

查找 `.stylelintrc`，检测 `foo` 目录下的所有的 `.css` 文件：

```shell
stylelint "foo/*.css"
```

Looking for `.stylelintrc` and linting `stdin`:

查找 `.stylelintrc`，检测 `stdin`：

```shell
echo "a { color: pink; }" | stylelint
```

Using `bar/mySpecialConfig.json` as config to lint all `.css` files in the `foo` directory, then writing the output to `myTestReport.txt`:

使用 `bar/mySpecialConfig.json` 配置，检测 `foo` 目录下的所有的 `.css` 文件，然后写入到 `myTestReport.txt`：

```shell
stylelint "foo/*.css" --config bar/mySpecialConfig.json > myTestReport.txt
```

Using `bar/mySpecialConfig.json` as config, with quiet mode on, to lint all `.css` files in the `foo` directory and any of its subdirectories and also all `.css` files in the `bar directory`, then writing the JSON-formatted output to `myJsonReport.json`:

使用 `bar/mySpecialConfig.json` 配置，启用安静模式，检测 `foo` 目录及其子目录下的所有的 `.css` 文件，`bar directory`下的 `.css` 文件，然后以 JSON 格式输出到 `myJsonReport.json`：

```shell
stylelint "foo/**/*.css bar/*.css" -q -f json --config bar/mySpecialConfig.json > myJsonReport.json
```

Linting all the `.scss` files in the `foo` directory, using the `syntax` option:

使用 `syntax` 选项，检测 `foo` 目录下的所有 `.scss` 文件：

```shell
stylelint "foo/**/*.scss" --syntax scss
```

In addition to `--syntax scss`, stylelint supports `--syntax less` and `--syntax sugarss` by default. If you're using one of the default syntaxes, you may not need to provide a `--syntax` option: non-standard syntaxes can be automatically inferred from the following file extensions: `.less`, `.scss`, and `.sss`.

除了 `--syntax scss`，默认情况下，stylelint 也支持 `--syntax less` 和 `--syntax sugarss`。如果你使用了其中的一个，你可以不提供 `--syntax` 选项：非标准的远方可以根据 `.less`，`.scss` 和 `.sss`的扩展名推断出来是哪种语法。

Additionally, stylelint can accept a custom [PostCSS-compatible syntax](https://github.com/postcss/postcss#syntaxes). To use a custom syntax, supply a syntax module name or path to the syntax file: `--custom-syntax custom-syntax` or `--custom-syntax ./path/to/custom-syntax`.

此外，stylelint 可以接受一个自定义的 [PostCSS 兼容语法](https://github.com/postcss/postcss#syntaxes)。为了使用自定 语法，需要提供一个语法的模块名或语法文件的路径：`--custom-syntax custom-syntax` 或 `--custom-syntax ./path/to/custom-syntax`。

Note, however, that stylelint can provide no guarantee that core rules will work with syntaxes other than the defaults listed above.

但是请注意，stylelint 对核心规则与非默认的语法是否可以正常工作不提供任何保证。

## Syntax errors

The CLI informs you about syntax errors in your CSS.
It uses the same format as it uses for linting warnings.
The error name is `CssSyntaxError`.

命令行会通知你 CSS 文件中的语法错误。它使用同检测警告同样的格式。错误名称是 `CssSyntaxError`。

## Exit codes

The CLI can exit the process with the following exit codes:

命令行退出进程使用以下退出码：

-   1: Something unknown went wrong.
-   1：未知错误。
-   2: At least one rule with an "error"-level severity triggered at least one warning.
-   2：至少一个 "error" 严重级别的规则被触发，至少以一个警告。
-   78: There was some problem with the configuration file.
-   78：配置文件有问题。
-   80: A file glob was passed, but it found no files.
-   80：传入了文件 glob，但没有找到任何文件。
