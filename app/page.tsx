import { Filters } from '@/components/Filters';
import { ListingCard } from '@/components/ListingCard';
import { SubmitMealForm } from '@/components/SubmitMealForm';
import { seedListings } from '@/lib/seed-data';
import type { FoodType } from '@/lib/types';

export default function Home({ searchParams }: { searchParams?: { q?: string; price?: string; area?: string; type?: FoodType } }) {
  const q = searchParams?.q?.toLowerCase().trim() ?? '';
  const maxPrice = searchParams?.price ? Number(searchParams.price) : Infinity;
  const area = searchParams?.area ?? '';
  const type = searchParams?.type ?? '';
  const areas = Array.from(new Set(seedListings.flatMap((listing) => [listing.area, listing.nearestMrt]))).sort();
  const listings = seedListings.filter((listing) => {
    const matchesSearch = !q || [listing.stallName, listing.foodItem, listing.area, listing.nearestMrt, listing.address].some((field) => field.toLowerCase().includes(q));
    const matchesPrice = listing.price <= maxPrice;
    const matchesArea = !area || listing.area === area || listing.nearestMrt === area;
    const matchesType = !type || listing.tags.includes(type);
    return listing.status === 'approved' && matchesSearch && matchesPrice && matchesArea && matchesType;
  });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="rounded-[2rem] bg-gradient-to-br from-kaya via-orange-100 to-white p-6 shadow-card sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-chilli">Singapore cheap eats</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-kopi sm:text-6xl">Lobang Meal Map</h1>
        <p className="mt-3 text-xl font-semibold text-stone-800">Find affordable meals near you.</p>
        <p className="text-stone-600">Under $3.50, $5, $8 and $10.</p>
      </header>

      <form className="mt-6"><Filters areas={areas} /></form>

      <section className="mt-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-kopi">Cheap meal listings</h2>
            <p className="text-sm text-stone-600">{listings.length} approved community lobangs found.</p>
          </div>
          <a href="/admin" className="text-sm font-bold text-chilli">Admin</a>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
        </div>
      </section>

      <section className="mt-10" id="submit">
        <h2 className="text-2xl font-black text-kopi">Submit a cheap meal</h2>
        <p className="mb-4 text-sm text-stone-600">Help another neighbour stretch their lunch budget.</p>
        <SubmitMealForm />
      </section>
    </main>
  );
}
