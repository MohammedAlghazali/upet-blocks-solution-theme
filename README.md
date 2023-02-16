# Shopify reusable blocks

You can read the article that talking about the implementation [Section/Block Schema In A Separate File. It is possible](https://share-docs.clickup.com/14282782/p/h/dkw0y-10187/d3a845381ed311b/dkw0y-10187)

## Project setup instructions

> **Note**
> This setup is for the development only, so you can use the development features we created like having reusable blocks.

### 1. Install Shopify CLI

- [Install Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install) based on your operating system

    Verify the installation

    ```bash
    shopify version
    ```

* Run the theme locally [Check the commands here](https://shopify.dev/docs/themes/tools/cli/commands#command-overview)

    > **Note**
    > This step need access to the uPet store

    ```bash
    shopify theme dev --store=upetco.myshopify.com
    ```


### 2. Install Node.js into your machine

Install Node.js instructions [here](https://nodejs.org/en/download/)

### 3. Install the project dependencies on the root folder

> **Note**
> Use `npm` as `yarn` is bad for local installation

```bash
npm install
```

### 4. Start the project

```bash
npm start
```

<br />

---
<br />


## Development Workflow

> **Warn**
> You shouldn't update the files in sections folder in the root directory, to be able to use reusable blocks schema you should always update the files inside src/sections folder.

### Supported block shape

```
    {
      "type": text,
      "properties": object,
      "removePropertiesById": array of text
    }
```

#### type
The type value can be one of the exported object in `src/blocks/index.ts`

Example:

```
"type": "uPetTextBlock"
```

#### properties
An object that accepts values to override some properties of the block, like if we need to use the same blocks twice in the same section, they should be with different name. these properties achieve this.

Example:

```
"properties": {
  "type": "price",
  "name": "price"
}
```

#### removePropertiesById
An array of texts, it accepts the id of the property to be removed

Example:

```
"removePropertiesById": ["text", "text_size_desktop", "text_color"]
```

### Use existing block schema

1- Go to src/blocks folder and get the variable name of the block schema you want to use

2- Go to the section you want to add the block schema to inside src/sections

3- Go to the `schema` then `blocks` array and copy the block name you got from step 1 (make sure you added the render of this block)

Example:

How to use `uPetTextBlock` block inside a schema in a liquid file

```js
{% schema %}
{
    "name": "t:sections.rich-text.name",
    "tag": "section",
    "class": "section",
    "settings": [...],
    "blocks": [
        {
            "type": "uPetTextBlock",
            "properties": {
                "type": "price",
                "name": "price"
            },
            "removePropertiesById": ["text", "text_size_desktop", "text_color"]
        }
    ]
}
```

4- open the shopify editor and you should be able to see the block settings same as the one in the sc/blocks

### Create a new block schema

1- Go to src/blocks folder

2- Create a new file start with the `upet-` to make it unique `EX: upet-text`

3- Create an exported variable with the same name but with camel case `EX: uPetText`

4- import and export this variable in `src/blocks/index.ts` so we can use it

Example:

```js
import { uPetIconTextBlock } from './upet-icon-text';
import { uPetTextBlock } from './upet-text';

export const blocks = { uPetTextBlock, uPetIconTextBlock };
```

Now you can use the block as we explain in `Use existing block schema` section