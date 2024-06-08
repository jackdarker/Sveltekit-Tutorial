//import { DATABASE as db_file, IMGDIR as imgdir } from '$env/static/private'; //settings imported from .env file
import { env } from '$env/dynamic/private'; //settings imported from .env file


export const IMGDIR=env.IMGDIR;
export const DATABASE=env.DATABASE;
export const FILEEXTFILTER=[ "jpg","png","gif","webp","bmp","emf","tiff","wmf","jpeg","svg"]; //what fileextions should be listed

