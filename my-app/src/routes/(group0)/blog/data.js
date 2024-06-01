export const posts = [
	{
		views: 0,
		slug: 'welcome',
		title: 'Whats this',
		content:
			"<p>This is a sveltekit test project to implement a image management tool.</p><p>Click on the Browser-button top left</p><p>You can either browse by directory or search by tags. At the bottom the results are listed, possibly on multiple pages. When you click on a thumbnail, it is shown enlarged in the center.</p>"
	},
	{
		views: 0,
		slug: 'Viewer',
		title: 'About the viewer',
		content:
			'<p>If you click on the center image in the browser, an additional Viewer-page will open and show the image in fullscale. If you open more images, they will be shown on this page too and added to the list to the left. You can switch to different images quickly be using this list.</p>'
	},
	{
		views: 0,
		slug: 'Tagger',
		title: 'About the Tagger',
		content: "<p>To support search by tag, you can edit tags by clicking on the edit tags button below center image in the browser.</p><p>Note that this button is only available if the image was assigned to the database.</p>"
	},
	{
		views: 0,
		slug: 'Assigning to database',
		title: 'Assigning to database',
		content: "<p>The browser can browse images stored in the directorys out of the box. But to be able to assign tags to them, you need to import those images in the database first.</p><p>Just to note, only the image-path is stored in database, not the full file.</p><p>There are these options to import images: First use the directory-mode in browser to navigate to the directory where you want to import images to (target-directory).</p><p>A) Import directory</p><p>First you need to copy images manually to target-directory. Then switch to Tags-View, Import files... and click import Dir.</p><p>B) Import by dragndrop</p><p>Switch to Tags-View, Import files...and dragndrop images either from Windows-Explorer or Internet explorer! They will be copied to the target driectory.</p>"
	}
];
