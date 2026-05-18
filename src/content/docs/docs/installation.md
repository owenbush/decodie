---
title: Installation
description: How to install Decodie for VS Code or the local UI.
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

## Choose your setup

<Tabs>
  <TabItem label="VS Code Extension">
    Install from the VS Code Marketplace:

    1. Open VS Code
    2. Go to Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`)
    3. Search for **Decodie**
    4. Click **Install**

    Or install from the command line:

    ```bash
    code --install-extension owenbush.decodie
    ```

    Next: [Configure a provider](/docs/provider-setup), then see the [VS Code guide](/docs/guides/vscode).
  </TabItem>

  <TabItem label="Local UI">
    Install the CLI globally via npm:

    ```bash
    npm install -g @owenbush/decodie-ui
    ```

    Then start the server in any project that has a `.decodie/` directory:

    ```bash
    decodie serve
    ```

    This opens a web dashboard at `http://localhost:3000` showing your learning entries.

    Next: [Configure a provider](/docs/provider-setup) to enable Q&A, then see the [Local UI guide](/docs/guides/local-ui).
  </TabItem>
</Tabs>
