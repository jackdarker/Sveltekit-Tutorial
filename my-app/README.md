# Whats this

This is my learning project for sveltekit where I try to solve a real-world problem.
PS: see also Docs/Info.odt for more problem-solving solutions 

I try to create my own Image-Gallery with certain functionallity:
^1: not implemented
^2: partial implemented
^3: implemented
- directory-mode: browse directorys and display list of thumbnails (^2)
- tag-search-mode: enter tags to search for and display list of thumbnails (^1)
- when clicking on a thumbnail, display the full image in edit-mode. (^2)
- for editmode a separate page is opened or reusing the same page if its already open (^2)
- in editmode you can: add/remove tags, mark image for deletion, rename image (^1)
- tag-editor: this lets you create/delete/edit tags (^1)

My understanding of tags:
- tags are single words or short groups of words like "forest", "autum", "red_leaves"
- a tag can be associated to multiple tag groups. This is useful to restict listing of available tags by tag-group: 
  - f.e. ["rainy", "snowstorm"] -> "weather" 
- tags are unique, there cannot be 2 tags of "light" with different meaning
- tags can be assigned a color-scheme. The color is used for display in tag-search mode (text-foreground color)

# Dependencys

 - For UI-components https://carbon-components-svelte.onrender.com/
 - for database better-sqlite3; sqlite3 uses require which is not supported by vite


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
