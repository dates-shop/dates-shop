import raw from './datesData.json';
export interface DateVariety {
  id: number;
  name: string;
  flavor: string;
  origin: string;
  country: string;
  lattitude: number;
  longitude: number;
  excerpt: string;
  description: string;
  image?: string;
}
export const DATE_VARIETIES: DateVariety[] = raw;

