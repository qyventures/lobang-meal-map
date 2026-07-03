import { seedListings } from '@/lib/seed-data';

const pending = [{ ...seedListings[0], id: 'pending-demo', stallName: 'Pending Kopitiam Rice', status: 'pending' as const, price: 3.3 }];

export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6">
      <a href="/" className="text-sm font-bold text-chilli">← Back to map</a>
      <h1 className="mt-4 text-4xl font-black text-kopi">Admin review</h1>
      <p className="mt-2 text-stone-600">Approve, reject, or edit submitted cheap meal listings. Supabase can persist these actions when configured.</p>
      <div className="mt-6 grid gap-4">
        {pending.map((listing) => (
          <article key={listing.id} className="rounded-3xl bg-white p-4 shadow-card">
            <div className="flex items-start justify-between gap-3">
              <div><h2 className="text-xl font-bold text-kopi">{listing.stallName}</h2><p>{listing.foodItem} · S${listing.price.toFixed(2)}</p><p className="text-sm text-stone-500">{listing.address}</p></div>
              <span className="rounded-full bg-kaya px-3 py-1 text-xs font-bold text-kopi">pending</span>
            </div>
            <textarea defaultValue={listing.valueNote} className="mt-4 min-h-24 w-full rounded-2xl border border-orange-100 p-3" />
            <div className="mt-3 grid grid-cols-3 gap-2 text-sm font-bold text-white">
              <button className="rounded-2xl bg-pandan py-3">Approve</button><button className="rounded-2xl bg-chilli py-3">Reject</button><button className="rounded-2xl bg-kopi py-3">Save edit</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
