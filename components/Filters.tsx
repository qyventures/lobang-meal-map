import { foodTypes, priceBands } from '@/lib/seed-data';

export function Filters({ areas }: { areas: string[] }) {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-card">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input name="q" placeholder="Search stall, dish, MRT..." className="rounded-2xl border border-orange-100 px-4 py-3 outline-none focus:border-chilli" />
        <select name="price" className="rounded-2xl border border-orange-100 px-4 py-3">
          <option value="">Any price</option>
          {priceBands.map((band) => <option key={band.value} value={band.value}>{band.label}</option>)}
        </select>
        <select name="area" className="rounded-2xl border border-orange-100 px-4 py-3">
          <option value="">Any area / MRT</option>
          {areas.map((area) => <option key={area} value={area}>{area}</option>)}
        </select>
        <select name="type" className="rounded-2xl border border-orange-100 px-4 py-3">
          <option value="">Any food type</option>
          {foodTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
      <button className="mt-3 w-full rounded-2xl bg-chilli px-4 py-3 font-bold text-white sm:w-auto">Find lobangs</button>
    </section>
  );
}
