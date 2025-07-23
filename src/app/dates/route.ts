// app/api/dates/route.ts
import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { DateVariety } from '@/data/datesData'

const DATA_FILE = path.join(process.cwd(), 'data', 'dates.json')

async function readDates(): Promise<DateVariety[]> {
  return JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'))
}

async function writeDates(dates: DateVariety[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(dates, null, 2))
}

export async function GET() {
  const dates = await readDates()
  return NextResponse.json(dates)
}

export async function PUT(request: Request) {
  const updated = await request.json() as Partial<DateVariety>
  let dates = await readDates()

  if (updated.id) {
    dates = dates.map(d => d.id === updated.id ? { ...d, ...updated } as DateVariety : d)
  } else {
    const nextId = dates.length ? Math.max(...dates.map(d => d.id)) + 1 : 1
    dates.push({ ...(updated as DateVariety), id: nextId })
  }

  await writeDates(dates)
  return NextResponse.json(dates)
}

export async function DELETE(request: Request) {
  const { id } = await request.json() as { id: number }
  let dates = await readDates()
  dates = dates.filter(d => d.id !== id)
  await writeDates(dates)
  return NextResponse.json(dates)
}

