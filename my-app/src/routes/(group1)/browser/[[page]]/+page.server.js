import { fail,error } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';
import {IMGDIR} from '$lib/const.js'
import { addPost,importDir,createDir, importDirRecursive } from '$lib/data.js';

export const actions = {
    //upload picture and add to database
    upload: async (event) => {
      let { cookies, request, locals } =event;
      const data = await request.formData();
      const dir = decodeURIComponent(data.get("dir"));
      const file = data.get('file'); // this is a file-stream
      try{
        await writeFile(`${IMGDIR}/${dir}/${file.name}`, file.stream());    
        addPost({name:file.name, fileName:`${dir}/${file.name}`});
      } catch(err) {
        throw new error(422,err.message);
         // return fail(422, {
         //   description: `uploading file to ./${dir}/${file.name}`,
         //   error: error.message
         // });  this only works if form-submit is used but not with fetch?
      }
      return { success: true };
    },
    //import exisiting Directory of images
    import: async (event) => {
      let { cookies, request, locals } =event;
      const data = await request.formData();
      const dir = decodeURIComponent(data.get("dir"));
      let res, params = {recursive: data.get("recursive")|| false}; //TODO get queries only value but not selected?
      try{
        res= await importDirRecursive(`${IMGDIR}/${dir}`); 
      } catch(err) {
        throw new error(422,err.message);
      }
      return { success: true, message: JSON.stringify(res) };
    },
    //create subdirectory
    createDir: async (event) => {
      let { cookies, request, locals } =event;
      const data = await request.formData();
      const dir = decodeURIComponent(data.get("dir"));
      let res, params = {}; 
      try{
        res= await createDir(`${IMGDIR}/${dir}`); 
      } catch(err) {
        throw new error(422,err.message);
      }
      return { success: true, message: JSON.stringify(res) };
    }
    
  };