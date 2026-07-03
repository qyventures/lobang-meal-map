import type { FoodType, MealListing } from './types';

export const priceBands = [
  { label: 'Under S$3.50', value: '3.5' },
  { label: 'Under S$5', value: '5' },
  { label: 'Under S$8', value: '8' },
  { label: 'Under S$10', value: '10' }
] as const;

export const foodTypes: FoodType[] = ['cai fan', 'chicken rice', 'noodles', 'prata', 'nasi lemak', 'vegetarian', 'halal', 'other'];

export const seedListings: MealListing[] = [
  {
    id: 'maxwell-chicken-rice-001', stallName: 'Maxwell Value Chicken Rice', foodItem: 'Steamed chicken rice set', price: 4.5, area: 'Chinatown', nearestMrt: 'Maxwell', address: '1 Kadayanallur Street, Maxwell Food Centre, Singapore 069184', openingHours: '10:30am–8:00pm, closed Mon', tags: ['chicken rice'], valueNote: 'Generous rice portion with soup; good CBD lunch lobang.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maxwell+Food+Centre', verifiedDate: '2026-06-20', status: 'approved'
  },
  {
    id: 'tekka-veg-002', stallName: 'Tekka Green Plate', foodItem: 'Vegetarian bee hoon', price: 3.2, area: 'Little India', nearestMrt: 'Little India', address: '665 Buffalo Road, Tekka Centre, Singapore 210665', openingHours: '7:00am–2:30pm daily', tags: ['vegetarian', 'noodles'], valueNote: 'One of the cheapest filling breakfasts near the station.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tekka+Centre', verifiedDate: '2026-06-18', status: 'approved'
  },
  {
    id: 'bedok-cai-fan-003', stallName: 'Bedok Budget Cai Fan', foodItem: '2 veg + 1 meat rice', price: 3.8, area: 'Bedok', nearestMrt: 'Bedok', address: '208B New Upper Changi Road, Singapore 462208', openingHours: '10:00am–9:00pm daily', tags: ['cai fan'], valueNote: 'Clear pricing and auntie gives extra curry if you ask nicely.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bedok+Interchange+Hawker+Centre', verifiedDate: '2026-06-12', status: 'approved'
  },
  {
    id: 'jurong-prata-004', stallName: 'Jurong West Crispy Prata', foodItem: '2 plain prata with curry', price: 2.8, area: 'Jurong West', nearestMrt: 'Boon Lay', address: 'Blk 505 Jurong West Street 52, Singapore 640505', openingHours: '6:00am–11:00pm daily', tags: ['prata', 'halal'], valueNote: 'Late-night option under S$3 for students and shift workers.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jurong+West+505+Food+Centre', verifiedDate: '2026-06-10', status: 'approved'
  },
  {
    id: 'tampines-nasi-lemak-005', stallName: 'Tampines Coconut Rice Corner', foodItem: 'Nasi lemak classic set', price: 3.5, area: 'Tampines', nearestMrt: 'Tampines', address: 'Blk 137 Tampines Street 11, Singapore 521137', openingHours: '6:30am–1:00pm, Tue–Sun', tags: ['nasi lemak', 'halal'], valueNote: 'Crispy ikan bilis and sambal with real kick.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tampines+137+Food+Court', verifiedDate: '2026-06-08', status: 'approved'
  },
  {
    id: 'amk-noodles-006', stallName: 'AMK Old-School Noodles', foodItem: 'Fishball noodles dry', price: 4.0, area: 'Ang Mo Kio', nearestMrt: 'Ang Mo Kio', address: '724 Ang Mo Kio Avenue 6, Singapore 560724', openingHours: '7:30am–3:00pm daily', tags: ['noodles'], valueNote: 'Springy noodles and enough fishballs for a satisfying lunch.', photoUrl: '/hawker.svg', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=724+Ang+Mo+Kio+Market', verifiedDate: '2026-06-05', status: 'approved'
  }
];
