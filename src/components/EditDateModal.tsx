'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { DateVariety } from '@/data/datesData';
import worldCountries from 'world-countries';

interface Props {
  date: Partial<DateVariety>;
  onClose: () => void;
  onSave: (date: Partial<DateVariety>) => void;
}

export default function EditDateModal({ date, onClose, onSave }: Props) {
  const originalImage = date.image;
  const [form, setForm] = useState<Partial<DateVariety>>({ ...date });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(date.image || '');
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // build a sorted list of { country, latitude, longitude }
  const countryOptions = useMemo(() => {
    return worldCountries
      .map(c => ({
        country: c.name.common,
        latitude: c.latlng[0],
        longitude: c.latlng[1],
      }))
      .sort((a, b) => a.country.localeCompare(b.country));
  }, []);

  // generate a blob‐URL preview when a new file is picked
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    const coords = countryOptions.find(c => c.country === country)!;
    setForm(prev => ({
      ...prev,
      country,
      lattitude: coords.latitude,
      longitude: coords.longitude,
    }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      setFile(dropped);
      setForm(prev => ({ ...prev, image: undefined }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files?.[0];
    if (chosen) {
      setFile(chosen);
      setForm(prev => ({ ...prev, image: undefined }));
    }
  };

  const removeImage = async () => {
    if (originalImage && !file) {
      try {
        await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: date.id, imagePath: originalImage }),
        });
      } catch (err) {
        console.error('Could not delete image on server', err);
      }
    }
    setFile(null);
    setPreview('');
    setForm(prev => ({ ...prev, image: undefined }));
  };

  const validate = () => {
    const errs: string[] = [];
    const lat = form.lattitude, lng = form.longitude;
    if (lat == null || isNaN(lat) || lat < -90 || lat > 90)
      errs.push('Latitude must be between -90 and 90');
    if (lng == null || isNaN(lng) || lng < -180 || lng > 180)
      errs.push('Longitude must be between -180 and 180');
    setErrors(errs);
    return errs.length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    let imagePath = form.image;
    if (file) {
      const data = new FormData();
      data.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: data });
      const json = await res.json();
      imagePath = json.path;
    }
    onSave({ ...form, image: imagePath });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl mb-4">
          {date.id ? `Edit ${form.name}` : 'Create New Date'}
        </h2>

        {errors.length > 0 && (
          <ul className="mb-4 text-red-600">
            {errors.map((err, i) => <li key={i}>{err}</li>)}
          </ul>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-2">
            <label className="block font-medium">Name</label>
            <input
              name="name"
              value={form.name || ''}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* Flavor */}
          <div>
            <label className="block font-medium">Flavor</label>
            <input
              name="flavor"
              value={form.flavor || ''}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* Origin */}
          <div>
            <label className="block font-medium">Origin</label>
            <input
              name="origin"
              value={form.origin || ''}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* Country dropdown */}
          <div className="col-span-2">
            <label className="block font-medium">Country</label>
            <select
              value={form.country || ''}
              onChange={handleCountryChange}
              className="w-full border rounded px-2 py-1"
            >
              <option value="" disabled>
                Select a country
              </option>
              {countryOptions.map(c => (
                <option key={c.country} value={c.country}>
                  {c.country}
                </option>
              ))}
            </select>
          </div>

          {/* Excerpt */}
          <div className="col-span-2">
            <label className="block font-medium">Excerpt</label>
            <input
              name="excerpt"
              value={form.excerpt || ''}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={form.description || ''}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* Image Upload / Preview */}
          <div className="col-span-2">
            <label className="block font-medium mb-2">Image</label>
            {preview ? (
              <div className="relative inline-block mb-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="
                    absolute -top-2 -right-2
                    bg-white border border-gray-300 rounded-full
                    w-6 h-6 flex items-center justify-center
                    text-gray-600 hover:bg-gray-100
                  "
                >
                  &times;
                </button>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={e => e.preventDefault()}
                  onDrop={handleDrop}
                  className="
                    w-full h-32 border-dashed border-2 border-gray-300
                    flex items-center justify-center text-gray-500
                    cursor-pointer rounded
                  "
                >
                  Drag & drop image here or click to browse
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[var(--orange-primary)] text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

