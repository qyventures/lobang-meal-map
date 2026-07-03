export type FoodType = 'cai fan' | 'chicken rice' | 'noodles' | 'prata' | 'nasi lemak' | 'vegetarian' | 'halal' | 'other';
export type ListingStatus = 'approved' | 'pending' | 'rejected';
export type PriceBand = '3.5' | '5' | '8' | '10';

export interface MealListing {
  id: string;
  stallName: string;
  foodItem: string;
  price: number;
  area: string;
  nearestMrt: string;
  address: string;
  openingHours: string;
  tags: FoodType[];
  valueNote: string;
  photoUrl: string;
  googleMapsUrl: string;
  verifiedDate: string;
  status: ListingStatus;
}

export interface MealSubmission extends Omit<MealListing, 'id' | 'verifiedDate' | 'status'> {
  submittedBy?: string;
}
