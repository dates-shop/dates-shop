import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export async function DELETE(request: Request) {
  try {
    const { id, imagePath } = await request.json();
    if (!id || !imagePath) {
      return NextResponse.json(
        { error: 'Missing id or imagePath' },
        { status: 400 }
      );
    }

    // 1) Remove reference from your JSON data file
    const dataFile = path.join(
      process.cwd(),
      'src',
      'data',
      'datesData.json'
    );
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf8');
      const items = JSON.parse(raw) as any[];
      const updated = items.map(item =>
        item.id === id ? { ...item, image: undefined } : item
      );
      fs.writeFileSync(
        dataFile,
        JSON.stringify(updated, null, 2),
        'utf8'
      );
    }

    // 2) Delete the actual file from /public/uploads
    const fullPath = path.join(process.cwd(), 'public', imagePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }

    return NextResponse.json({ message: 'Image deleted' });
  } catch (err) {
    console.error('DELETE /api/delete-image error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

