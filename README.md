# QuartoFN

This is a simple plugin that provides basic syntax recognition for inline footnotes in Quarto and markdown files.

## Features

It will tokenize any string that starts with `[^` and ends with `]` as a meta.footnote.inline.quarto token.

You can change the color of these tokens in your settings.json file by adding the following:

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": "meta.footnote.inline.quarto",
            "settings": {
                "foreground": "#a18a2a" // a burnt orange, but you can change this to whatever color you want
            }
        }
    ]
}
```

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

First Release

## To Download

Right now the theme is only available as a `.vsix` file. It is available on GitHub.
