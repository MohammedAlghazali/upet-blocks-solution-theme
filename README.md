# Shopify reusable blocks

You can read the article that talking about the implementation [Section/Block Schema In A Separate File. It is possible](https://share-docs.clickup.com/14282782/p/h/dkw0y-10187/d3a845381ed311b/dkw0y-10187)

## Project development environment setup

> **Note**
> This setup is for the development only, so you can use the development features we created like having reusable blocks

### 1. Install Node.js into your machine

[Node.js install](https://nodejs.org/en/download/)

### 2. Install the dependencies on the root folder

```bash
npm install
```

### 3. Start the project

```bash
npm start
```

## Instructions

> **Warn**
> You shouldn't update the sections in the root directory, to be able to use reusable blocks schema you should update the files inside src/sections folder

### Use existing block schema

1- Go to src/blocks folder and get the variable name of the block schema you want to use

2- Go to the section you want to add the block schema to inside src/sections

3- Go to the `schema` then `blocks` array and copy the block name you got from step 1 (make sure you added the render of this block)

Example:

```js
{% schema %}
{
    "name": "t:sections.rich-text.name",
    "tag": "section",
    "class": "section",
    "settings": [...],
    "blocks": [
        "uPetTextBlock",
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
import { uPetIconTextBlock } from "./upet-icon-text";
import { uPetTextBlock } from "./upet-text";

export const blocks = { uPetTextBlock, uPetIconTextBlock };
```

Now you can use the block as we explain in `Use existing block schema` section
