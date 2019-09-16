# Step to create document for new component

*Reference: https://docusaurus.io/docs/en/site-creation*

## 1. Create component docs
- Create a new ``md`` file in ``docs/components`` folder. For example: ``Label.md``. The new ``md`` file must contain a proper header for Docusaurus.
    - Minimum headers:
        ```
        ---
        id: label
        title: Label
        sidebar_label: Label
        ---
        ```
    - For full list of Docusaurus markdown headers, [follow this link](https://docusaurus.io/docs/en/doc-markdown#documents)
- To add ``Edit on CodeSandbox`` button, add a CodeSandbox snippet id to code snippet. For example
    ```javascript sandbox_kuc-button-js-m4ox583098
    var button = new kintoneUIComponent.Button({
        text: 'Submit', 
        type: "submit"
    });
    var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(button.render());
    ```
- To add live sample, insert a custome fence Javascript snippets and provide a unique id. For example:
    ```KUCComponentRenderer {"id":"btn_render"}
    var component = new kintoneUIComponent.Button({
        text: 'Submit',
        type: 'submit'
    });
    ```
## 2. Update sidebar
- Open ``website/sitebars.json``
- Add path of new document into ``API Reference`` section (identify document file by the ``id`` in document's header section). Sample result:
    ```json
    {
        "docs": {
            "Developer Guide": ["getting-started"],
            "API Reference": ["components/button", "components/label"]
        }
    }
    ```

## 3. Restart docusaurus