'use client';
import React, { useState, useEffect } from 'react';
import { DateVariety } from '@/data/datesData';
import EditDateModal from '@/components/EditDateModal';
import { MoreVertical, Plus } from 'lucide-react';

export default function DashboardPage() {
  const [dates, setDates] = useState<DateVariety[]>([]);
  const [selected, setSelected] = useState<Partial<DateVariety> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);

  const fetchDates = async () => {
    const res = await fetch('/api/dates');
    const data: DateVariety[] = await res.json();
    setDates(data);
  };

  useEffect(() => { fetchDates(); }, []);

  const onSave = async (updated: Partial<DateVariety>) => {
    const res = await fetch('/api/dates', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setDates(await res.json());
      setIsOpen(false);
      setMenuOpenId(null);
    }
  };

  const onDelete = async (id: number) => {
    const res = await fetch('/api/dates', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setDates(await res.json());
      setMenuOpenId(null);
    }
  };

  const openCreate = () => {
    setSelected({});
    setIsOpen(true);
    setMenuOpenId(null);
  };

  const handleMenuToggle = (id: number) => {
    setMenuOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl pt-40 mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Date Varieties Dashboard</h1>
        <button onClick={openCreate} className="p-2 bg-[var(--orange-primary)] text-white rounded-full">
          <Plus />
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dates.map(d => (
          <li key={d.id} className="relative p-4 border rounded shadow hover:bg-gray-50">
            <div className="absolute top-2 right-2">
              <button onClick={() => handleMenuToggle(d.id)} className="p-1 hover:bg-gray-100 rounded-full">
                <MoreVertical size={20} />
              </button>
              {menuOpenId === d.id && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
                  <button
                    onClick={() => onDelete(d.id)}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            {d.image && <img src={d.image} alt={d.name} className="w-full h-32 object-cover rounded mb-2" />}
            <h2 className="text-xl font-semibold cursor-pointer" onClick={() => { setSelected(d); setIsOpen(true); setMenuOpenId(null); }}>
              {d.name}
            </h2>
            <p className="italic text-gray-600">{d.excerpt}</p>
          </li>
        ))}
      </ul>
      {isOpen && selected && (
        <EditDateModal date={selected} onClose={() => { setIsOpen(false); setMenuOpenId(null); }} onSave={onSave} />
      )}
    </div>
  );
}

