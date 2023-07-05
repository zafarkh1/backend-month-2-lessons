import {readFileSync, writeFileSync} from 'fs'
import {join} from 'path'

export const readFileCustom = (path) => JSON.parse(readFileSync(join(process.cwd(), 'src', 'model', path)))

export const writeFileCustom = (path, data) => {
	writeFileSync(join(process.cwd(), "src", "model", path), JSON.stringify(data, null, 4));
}