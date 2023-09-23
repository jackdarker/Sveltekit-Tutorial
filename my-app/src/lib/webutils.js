
/* a collection of functions used in the client
*/
import { get } from 'svelte/store';
import { viewHandle,settings } from './stores';

/** 
 * fetchs a image and loads it into <img> specified by imgElement
 * see route/api/server.js
 * @param {*} imgElment queryselector f.e. #img1
 * @param {*} file filename
 */
export async function loadImage(imgElement, file) {
    const myImage = document.querySelector(imgElement);
    if(!myImage /*|| file===''*/)return;
    if(file==='') { myImage.src="";return;} //clear image if undefined file
    const url= '/api?op=file&file='+encodeURIComponent(file);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
    } else {
        const blob = await response.blob();
        myImage.src =URL.createObjectURL(blob);
        myImage.onload = () => {
            URL.revokeObjectURL(myImage.src); //should clear blob after loaded by IMG
        };
    }
}
/**
 * returns a json containing files and subdirectories inside directory path
 * see route/api/server.js
 * @param {*} imgElment 
 * @param {*} file 
 */
export async function loadDirectory(path) {
    let data ={};
    const response = await fetch('/api?op=dir&path='+encodeURIComponent(path));
    if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
    } else {
        data = await response.json();
    }
    return(data);
}

export function openWindow(post){
    function onmounted(event){
        //alert(`Received ${event.data} from ${event.origin}`);
        window.removeEventListener('message',onmounted);
        if(event.data==='mounted') { //viewer-eventprocessor gets mounted in onMount!
            handle.postMessage({"settings":get(settings)}, '*');
            handle.postMessage(post, '*'); 
        }
        
    };
    let handle=get(viewHandle);
    if(handle && !handle.closed) {
        handle.postMessage(post, '*');
    } else {
        handle = open('/viewer') 
        window.addEventListener('message', onmounted);
        /*handle.onload = function() {
            //let html = `<div style="font-size:30px">Welcome! ${post.fileName}</div>`;
            //handle.document.body.insertAdjacentHTML('afterbegin', html); 
            handle.postMessage(post, '*');
        };*/
        viewHandle.set(handle);
    }
}