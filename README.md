# Whats this

This is my learning project for sveltekit where I try to solve a real-world problem. It is based on [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
PS: see also Docs/Info.odt for more problem-solving solutions 

I try to create my own Image-Gallery with certain functionallity:
^1: not implemented
^2: partial implemented
^3: implemented
- directory-mode: browse directorys and display list of thumbnails (^3)
- tag-search-mode: enter tags to search for and display list of thumbnails (^2)
- when clicking on a thumbnail, display the full image in viewmode. (^3)
- for viewmode a separate page is opened or reusing the same page if its already open (^3)
- in browsemode you can: open a page for tag-editor, mark image for deletion, rename image (^2)
- tag-editor: this lets you create/delete/edit tags and add/remove tags to images (^2)

My understanding of tags:
- tags are single words or short groups of words like "forest", "autum", "red_leaves"
- a tag can be associated to multiple tag groups. This is useful to restict listing of available tags by tag-group: 
  - f.e. ["rainy", "snowstorm"] -> "weather" 
- tags are unique, there cannot be 2 tags of "light" with different meaning
- tags can be assigned a color-scheme. The color is used for styling their appearance.

There is a database to manage tags and images. SQLite is used.  
The root-directory of the images can be outside of the svelte-project. Images are served dynamically, not statically as svelte-resources!

# Dependencys
 - For UI-components https://carbon-components-svelte.onrender.com/
 - For UI-icons https://carbon-icons-svelte.onrender.com/
 - for database better-sqlite3; sqlite3 uses require which is not supported by vite
 - for Image resizing on server: sharp

# How to run the release
- download the repo and run build2.cmd (build.cmd is from the sveletkit-source but doesnt seem to work), this should download the required node modules and compiled files into build directory
- you might need to edit build/.env to set server-location, image location and database
- run runServer.cmd to start the server, your webbrowser should then be able to open the server-location like 127.0.0.1:3000
- an empty database is created automatically if it doesnt exist

# How to run the debug
- execute runServer_debug.cmd and connect your browser to the shown server-location
- in VSCode workspace goto Run and debug and select attach workspace
- you might have to edit .env

# ToDo
- Tag-Color is limited by carbon-svelte, howto mod this?
- add options for image-scaling in viewmode: original, fit-to-screen
- slideshow-mode?
- database support for mongoDB, mySQL
- possibility to add comments to pictures?
- prettify design