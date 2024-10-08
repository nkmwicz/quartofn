# QuartoFN

This is a simple plugin that provides basic syntax recognition for inline footnotes in Quarto and markdown files.

## Features

It will tokenize any string that starts with `^[` and ends with `]` as a meta.footnote.inline.quarto token.

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

### 0.0.2

Update package.json to add activateOnLanguage

### 0.0.3

Remove markdown support (interacts poorly with markdown syntax highlighting).

### 0.0.4

It is now operational. The extension will now tokenize any string that starts with `^[` and ends with `]` as a meta.footnote.inline.quarto token. Many thanks to RedCMD for their help in stack Overflow for getting this operational.
