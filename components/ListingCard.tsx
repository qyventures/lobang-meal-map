import type { MealListing } from '@/lib/types';

export function ListingCard({ listing }: { listing: MealListing }) {
  return (
    <article className="rounded-3xl border border-orange-100 bg-white p-4 shadow-card">
      <div className="flex gap-4">
        <img src={listing.photoUrl} alt="Hawker meal illustration" className="h-20 w-20 rounded-2xl bg-orange-50 object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-kopi">{listing.stallName}</h3>
              <p className="text-sm text-stone-600">{listing.foodItem}</p>
            </div>
            <p className="rounded-full bg-pandan px-3 py-1 text-sm font-bold text-white">S${listing.price.toFixed(2)}</p>
          </div>
          <p className="mt-2 text-sm font-medium text-chilli">{listing.area} · {listing.nearestMrt} MRT</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-stone-700">{listing.valueNote}</p>
      <dl className="mt-3 space-y-1 text-xs text-stone-500">
        <div><dt className="inline font-semibold text-stone-700">Address: </dt><dd className="inline">{listing.address}</dd></div>
        <div><dt className="inline font-semibold text-stone-700">Hours: </dt><dd className="inline">{listing.openingHours}</dd></div>
        <div><dt className="inline font-semibold text-stone-700">Verified: </dt><dd className="inline">{listing.verifiedDate}</dd></div>
      </dl>
      <div className="mt-3 flex flex-wrap gap-2">
        {listing.tags.map((tag) => <span key={tag} className="rounded-full bg-kaya/50 px-3 py-1 text-xs font-semibold text-kopi">{tag}</span>)}
      </div>
      <a href={listing.googleMapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full justify-center rounded-2xl bg-kopi px-4 py-3 text-sm font-bold text-white">Open in Google Maps</a>
    </article>
  );
}
