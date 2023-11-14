import fs from 'fs';
import path from 'path';

const projectDirectory = path.join(process.cwd(), 'src', 'assets', 'Project.ifc');

export const getBuffer = () => {
    const ifcData = fs.readFileSync(projectDirectory);
    const buffer = Buffer.from(ifcData); // Convert to Node.js Buffer

    return buffer;
}