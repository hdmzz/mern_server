import sharp from "sharp";
import {writeFileSync, mkdir, rmSync, unlink, unlinkSync} from "fs"
async function resizer(req, res, next) {
    console.log('imageprocesseur');
    console.log(req.file);

    const src = `${req.file.path}`;
    const dest = `resizedImage/${req.file.filename}`;
    const {filename: name} = req.file;
    await sharp(req.file.path).resize(500).jpeg({quality: 80, mozjpeg: true}).toFile(dest)
    unlinkSync(src)
    next()
}
export default resizer;