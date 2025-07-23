import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  if (!file || !file.name) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  fs.mkdirSync(uploadsDir, { recursive: true });
  const fileName = `${Date.now()}_${file.name}`;
  const filePath = path.join(uploadsDir, fileName);
  fs.writeFileSync(filePath, buffer);
  return NextResponse.json({ path: `/uploads/${fileName}` });
}
