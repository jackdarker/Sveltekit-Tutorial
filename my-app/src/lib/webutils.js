/** 
 * fetchs a image and loads it into <img> specified by imgElement
 * see route/api/server.js
 * @param {*} imgElment queryselector f.e. #img1
 * @param {*} file filename
 */
export async function loadImage(imgElement, file) {
    const myImage = document.querySelector(imgElement);
    if(!myImage)return;
    const response = await fetch('/api?op=file&file='+encodeURIComponent(file));
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
