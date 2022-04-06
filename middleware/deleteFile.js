import { readdir, rm} from "fs";
const delFile = async () => {
    console.log('req bien recu');
await readdir('images').forEach(f => rm(`images/${f}`));
}

export default delFile;