import multer, { diskStorage } from 'multer';
import { mkdir, existsSync,readdirSync ,rmSync } from 'fs';

const MIME_TYPES = {//list of the extensionjs names that we are gonna accept, this list isn't really needed 
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}
const storage = diskStorage({
    destination(req, file, callback) {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {

        const name = file.originalname.split(' ').join('_'); //on split quand il ya des espaces et on rejoin avec un underscore gestion des espaces
        const extension = MIME_TYPES[file.mimetype];//extension sera egal a l'élmnt de notre dictionnaire(MIME_TYPES)qui correspond au mimetype du fichier envoyé [file.mimetype]
        callback(null, name + Date.now()+ '.' + extension);
    }
})
const upload = multer({storage}).single('file');//single fichier unique
export default upload;