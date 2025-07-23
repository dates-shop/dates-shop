import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { DateVariety } from '@/data/datesData';

const dataPath = path.join(process.cwd(), 'src', 'data', 'datesData.json');

type Incoming = Partial<Omit<DateVariety, 'id'>> & { id?: number };

export async function GET() {
  try {
    const json = await fs.readFile(dataPath, 'utf8');
    const data: DateVariety[] = JSON.parse(json);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(request: Request) {
  const updated: Incoming = await request.json();
  const json = await fs.readFile(dataPath, 'utf8');
  const data: DateVariety[] = JSON.parse(json);
  if (updated.id != null) {
    const idx = data.findIndex(d => d.id === updated.id);
    if (idx !== -1) data[idx] = { ...data[idx], ...updated };
  } else {
    const ids = data.map(d => d.id).sort((a, b) => a - b);
    let newId = 1;
    for (const id of ids) {
      if (id === newId) newId++;
      else if (id > newId) break;
    }
    data.push({ id: newId, ...updated } as DateVariety);
  }
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { id }: { id: number } = await request.json();
  const json = await fs.readFile(dataPath, 'utf8');
  const data: DateVariety[] = JSON.parse(json);
  const filtered = data.filter(d => d.id !== id);
  await fs.writeFile(dataPath, JSON.stringify(filtered, null, 2), 'utf8');
  return NextResponse.json(filtered);
}
