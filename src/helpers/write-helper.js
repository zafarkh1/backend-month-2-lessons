import { writeFileSync } from "fs";
import { join } from "path";

export const writeFileCustom = (path, data) => {
  writeFileSync(
    join(process.cwd(), "src", "data", `${path}.json`),
    JSON.stringify(data, null, 4)
  );
};