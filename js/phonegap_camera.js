function getAndSavePhoto() {
    navigator.camera.getPicture(photoSave, onFail, {
        quality:
        50,
        destinationType:
        destinationType.FILE_URI,
        sourceType:
        pictureSource.SAVEDPHOTOALBUM
    });
}
function photoSave(imageURI) {
    // this relies on knowledge of photo file URI - you might want to make this more robust: -)
    var gotFileEntry = function(fileEntry) {
        console.log("got image file entry: " + fileEntry.fullPath);
        var gotFileSystem = function(fileSystem) {
            // copy the file
            fileEntry.copyTo(fileSystem.root, null, copiedFile, fsFail);
        };
        // get file system to copy or move image file to
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem, fsFail);
    };
    //resolve file system for image
    //(image is currently stored in dir off of persistent file system but that may change)
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, fsFail);
}
function copiedFile(fileEntry) {
    console.log("copied file: " + fileEntry.fullPath);
    // !!! assumes you have an img element on page with
    id = largeImage
    var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = fileEntry.toURI() + "?" + (new
    Date()).getTime();
}
// file system fail
function fsFail(error) {
    console.log("failed with error code: " + error.code);
};
// camera fail
function onFail(message) {
    alert('Failed because: ' + message);
}
