// src/extension.js
const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Create an output channel
  const outputChannel = vscode.window.createOutputChannel(
    "QuartoFootnoteHighlighter"
  );
  outputChannel.appendLine(
    'Extension "QuartoFootnoteHighlighter" is now active!'
  );

  // Log activation event
  outputChannel.appendLine("Activating extension for Quarto language...");

  // Register a command (if you have any commands)
  let disposable = vscode.commands.registerCommand(
    "quartofn.helloWorld",
    function () {
      outputChannel.appendLine("Hello World command executed.");
      vscode.window.showInformationMessage(
        "Hello World from QuartoFootnoteHighlighter!"
      );
    }
  );

  context.subscriptions.push(disposable);

  /// Log grammar loading
  const grammarPath = context.asAbsolutePath(
    "syntaxes/quartofn.tmLanguage.json"
  );
  outputChannel.appendLine(`Grammar path: ${grammarPath}`);
  const languageConfigPath = context.asAbsolutePath(
    "language-configuration.json"
  );
  outputChannel.appendLine(
    `Language configuration path: ${languageConfigPath}`
  );

  // Add more logging as needed
  outputChannel.appendLine("Loading grammar for Quarto language...");
  // Add a check to see if the file exists
  const fs = require("fs");
  if (fs.existsSync(grammarPath)) {
    outputChannel.appendLine("Grammar file exists.");
  } else {
    outputChannel.appendLine("Grammar file does not exist.");
  }

  if (fs.existsSync(languageConfigPath)) {
    outputChannel.appendLine("Language configuration file exists.");
  } else {
    outputChannel.appendLine("Language configuration file does not exist.");
  }
  // Log the content of the grammar file
  const grammarContent = fs.readFileSync(grammarPath, "utf8");
  outputChannel.appendLine(`Grammar file content: ${grammarContent}`);
  // Log the activation event for the language

  // Log when a Quarto file is opened
  vscode.workspace.onDidOpenTextDocument((document) => {
    if (document.languageId === "quarto") {
      outputChannel.appendLine("Quarto file opened: " + document.fileName);
    }
  });

  // Log when a Quarto file is saved
  vscode.workspace.onDidSaveTextDocument((document) => {
    if (document.languageId === "quarto") {
      outputChannel.appendLine("Quarto file saved: " + document.fileName);
    }
  });
}

function deactivate() {
  // Log deactivation event
  const outputChannel = vscode.window.createOutputChannel(
    "QuartoFootnoteHighlighter"
  );
  outputChannel.appendLine(
    'Extension "QuartoFootnoteHighlighter" is now deactivated.'
  );
}

module.exports = {
  activate,
  deactivate,
};
