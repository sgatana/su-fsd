'use server'

import fs from 'node:fs';

export type FileStore = {
    createdAt: string | Date;
    filename: string;
}

export async function getFiles() {
    const filePath = process.cwd() + '/assets/data.csv'
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return data;
}
