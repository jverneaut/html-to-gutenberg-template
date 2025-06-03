![Node LTS](https://img.shields.io/node/v-lts/@jverneaut/html-to-gutenberg-template)

# Create Block HTML To Gutenberg template

This is a template for [`@wordpress/create-block`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/create-block/README.md) that allows creating blocks powered by [HTML To Gutenberg](https://html-to-gutenberg.com).


## Usage

This block template can be used by running the following command:

```bash
npx @wordpress/create-block --template html-to-gutenberg-template
```

After generating your block with this tool, `cd` into the newly created plugin folder and run:

```bash
npm run start # To build the block in watch mode
npm run build # To build the block for production
```

After activating the generated extension, you can now use your block inside the editor.
