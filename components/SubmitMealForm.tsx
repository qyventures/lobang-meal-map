import { foodTypes } from '@/lib/seed-data';

export function SubmitMealForm() {
  return (
    <form className="grid gap-3 rounded-3xl bg-white p-4 shadow-card">
      <div className="rounded-2xl bg-orange-50 p-3 text-sm text-kopi">Submissions are saved as <strong>pending</strong> when wired to Supabase. In fallback mode, this form is a ready UI stub.</div>
      {['Stall/shop name', 'Food item', 'Price', 'Area', 'Nearest MRT', 'Address', 'Opening hours', 'Photo URL', 'Google Maps link', 'Value note'].map((label) => (
        <input key={label} required placeholder={label} className="rounded-2xl border border-orange-100 px-4 py-3" />
      ))}
      <select multiple className="min-h-28 rounded-2xl border border-orange-100 px-4 py-3">
        {foodTypes.map((type) => <option key={type}>{type}</option>)}
      </select>
      <button type="button" className="rounded-2xl bg-pandan px-4 py-3 font-bold text-white">Submit a cheap meal</button>
    </form>
  );
}
