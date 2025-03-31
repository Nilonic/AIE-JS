# Anti Inspect Element JavaScript Utility

## Overview
The **Anti Inspect Element JavaScript Utility (AIE-JS)** is a simple script designed to help prevent users from accessing developer tools through commonly known shortcuts, such as:
- `Ctrl+Shift+I`
- `F12`
- Right-click context menu

This utility is lightweight and customizable, offering an additional layer of deterrence for users attempting to inspect or modify your web application.

> **Disclaimer**: While AIE-JS adds a layer of deterrence, it is not a foolproof method to protect your code or assets. Advanced users can still bypass these protections. Always follow best practices, such as server-side validation, for securing sensitive data.

---

## Features
- Blocks `Ctrl+Shift+I` and `F12` shortcuts used to open developer tools.
- Disables the right-click context menu when enabled.
- Customizable behavior via DOM configuration.
- Lightweight and easy to integrate.

---

## Installation
### Step 1: Include the Script
You can include the script in your project by adding the following `<script>` tag to your HTML file:

#### Full Version:
```html
<script src="https://raw.githubusercontent.com/Nilonic/AIE-JS/refs/heads/main/hook.js"></script>
```

#### Minified Version:
```html
<script src="https://raw.githubusercontent.com/Nilonic/AIE-JS/refs/heads/main/hook.min.js"></script>
```

### Step 2: Configure the Behavior
Add a DOM element with the ID `AISE-CONFIG` to your HTML and configure its attributes:

```html
<div id="AISE-CONFIG" kd="1" rc="1"></div>
```

#### Configuration Attributes:
- `kd` (Keydown): Set to `1` to block developer tool shortcuts (`Ctrl+Shift+I` and `F12`).
- `rc` (Right Click): Set to `1` to disable the right-click context menu.

The configuration element will be automatically removed by the script after reading its values.

---

## How It Works
The utility listens for specific events and prevents their default behavior based on your configuration:

- **Keydown Blocking:**
  - Prevents `Ctrl+Shift+I` and `F12` key combinations when the `kd` attribute is set to `1`.
- **Context Menu Blocking:**
  - Prevents the right-click context menu from appearing when the `rc` attribute is set to `1`.

The script dynamically detects changes in configuration and applies them during runtime.

---

## Example
Here is a full example of how to integrate AIE-JS into a web page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anti Inspect Element Demo</title>
    <!-- Include the script -->
    <script src="https://github.com/nilonic/AIE-JS/blob/main/hook.min.js"></script>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>Right-click and developer tools shortcuts are disabled!</p>

    <!-- Configuration -->
    <div id="AISE-CONFIG" kd="1" rc="1"></div>
</body>
</html>
```

---

## Repository
- Full Version: [hook.js](https://github.com/nilonic/AIE-JS/blob/main/hook.js)
- Minified Version: [hook.min.js](https://github.com/nilonic/AIE-JS/blob/main/hook.min.js)

---

## Notes
1. This utility is not intended to replace proper web security practices.
2. The obfuscation of the script and the events it targets can be modified to suit your specific needs.

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Thank you for using **AIE-JS**! If you have any suggestions or encounter issues, feel free to open an issue on the [GitHub repository](https://github.com/nilonic/AIE-JS).

