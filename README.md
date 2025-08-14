# Markdown Editor

A full-featured WYSIWYG editor for markdown, now with multi-language support.

![demo](./demo.gif)

## Features

This extension builds upon the work of several contributors.

### Core Features (by zaaack)

*   **What You See Is What You Get (WYSIWYG)** editing for Markdown.
*   **Multiple Editing Modes:** Instant Rendering (Typora-like), WYSIWYG, and Split-Screen View.
*   **Auto Sync:** Changes are automatically synced between the VS Code editor and the webview.
*   **Image Handling:** Upload, paste, or drag-and-drop images, which are automatically saved to the `assets` folder.
*   **Markdown Extensions:** Support for a wide range of Markdown extensions.
*   **Diagrams and Graphs:** Includes support for KaTeX, Mermaid, Graphviz, ECharts, and more.
*   **Shortcut Keys:** A comprehensive set of shortcut keys for efficient editing.
*   **Multi-theme Support:** Comes with multiple themes to customize the look and feel.

For more details on the original features, please see the [Vditor documentation](https://github.com/Vanessa219/vditor).

### Contributions by aqz236

*   **External CSS Support:** Load external CSS files from URLs or local paths to customize the preview style. See [EXTERNAL_CSS_README.md](./docs/EXTERNAL_CSS_README.md) for details.
*   **Custom Editor Provider:** Set the Markdown Editor as the default for `*.md` files.
*   **UI/UX Improvements:** Added a menu button to open markdown files in a split view and introduced distinct icons for menu buttons.

### New in this version (by Jules)

*   **Internationalization (i18n):** The entire extension is now translatable.
*   **New Languages:** Added full support for English (en), Russian (ru), and Ukrainian (uk). All menu items, messages, and UI elements are translated.

## Usage

You can open a markdown file with the editor in several ways:

1.  **Command Palette:**
    *   Open a markdown file.
    *   Press `Cmd+Shift+P` (or `Ctrl+Shift+P` on Windows) to open the command palette.
    *   Type `markdown-editor: Open with markdown editor` and press Enter.

2.  **Keybinding:**
    *   Open a markdown file.
    *   Press `Ctrl+Shift+Alt+M` on Windows or `Cmd+Shift+Alt+M` on Mac.

3.  **Explorer Context Menu:**
    *   Right-click on a markdown file in the Explorer view.
    *   Select `Open with markdown editor`.

4.  **Editor Title Context Menu:**
    *   Right-click on the tab of an opened markdown file.
    *   Select `Open with markdown editor`.

## Development

This project includes scripts for easy development and packaging:

```bash
# Install dependencies
npm install

# Start the development server
npm run start

# Build and create a VSIX package
npm run package
```

## Credits

*   **Original Author:** [zaaack](https://github.com/zaaack)
*   **Contributor:** [aqz236](https://github.com/aqz236) - Added external CSS support and custom editor features.
*   **Contributor:** Jules - Added comprehensive internationalization support.

This extension is powered by [Vditor](https://github.com/Vanessa219/vditor).

## License

This project is licensed under the MIT License.
