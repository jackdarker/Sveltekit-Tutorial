//import { DATABASE as db_file, IMGDIR as imgdir } from '$env/static/private'; //settings imported from .env file
import { env } from '$env/dynamic/private'; //settings imported from .env file


export const IMGDIR=env.IMGDIR;
export const DATABASE=env.DATABASE;

