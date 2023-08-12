import { fail,error } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';
import {IMGDIR} from '$lib/const.js'

export const actions = {
    upload: async (event) => {
      let { cookies, request, locals } =event;
      const data = await request.formData();
      const dir = decodeURIComponent(data.get("dir"));
      const file = data.get('file'); // this is a file-stream
      try{
        await writeFile(`${IMGDIR}/${dir}/${file.name}`, file.stream());    
      } catch(err) {
        throw new error(422,err.message);
         // return fail(422, {
         //   description: `uploading file to ./${dir}/${file.name}`,
         //   error: error.message
         // });  this only works if form-submit is used but not with fetch?
      }
      return { success: true };
    }
  };