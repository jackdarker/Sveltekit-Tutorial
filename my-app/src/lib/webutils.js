/**
 * see route/api/server.js
 * @param {*} imgElment queryselector f.e. #img1
 * @param {*} file filename
 */
export async function loadImage(imgElment, file) {
    const myImage = document.querySelector(imgElment);
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