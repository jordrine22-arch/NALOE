/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Collection, Testimonial } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'ankara',
    name: 'Ankara Fabrics',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200',
    description: 'Vibrant, authentic wax prints from the heart of Africa.'
  },
  {
    id: 'bridal',
    name: 'Bridal Materials',
    image: 'https://images.unsplash.com/photo-1518131394553-c3501cff318d?auto=format&fit=crop&q=80&w=1200',
    description: 'Exquisite laces and silks for your most special day.'
  },
  {
    id: 'lace',
    name: 'Lace Collections',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=1200',
    description: 'Intricate embroidery and delicate textures for luxury tailoring.'
  },
  {
    id: 'rtw',
    name: 'Ready-to-Wear',
    image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern Afro-urban silhouettes, ready for the global stage.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Sahara Ankara',
    price: 85,
    category: 'Ankara Fabrics',
    image: 'https://images.unsplash.com/photo-1592892111425-15e04305f961?auto=format&fit=crop&q=80&w=800',
    description: 'Premium quality 6-yard wax print with gold-threaded accents.',
    isTrending: true,
    materialDetails: '100% Fine Cotton, Wax Print'
  },
  {
    id: '2',
    name: 'Ivory Royal Lace',
    price: 150,
    category: 'Bridal Materials',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=800',
    description: 'Breathtaking 3D floral lace with hand-sewn pearls.',
    isNewArrival: true,
    materialDetails: 'Polyester Silk, Pearl Beads'
  },
  {
    id: '3',
    name: 'Midnight Silk Kaftan',
    price: 220,
    category: 'Ready-to-Wear',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant floor-length silk kaftan with traditional embroidery.',
    isTrending: true,
    materialDetails: '100% Mulberry Silk'
  },
  {
    id: '4',
    name: 'Sunset Orange Brocade',
    price: 95,
    category: 'Luxury Cotton',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
    description: 'Rich damask fabric with a high-shine finish.',
    materialDetails: 'Luxury Cotton Brocade'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Okonkwo',
    role: 'Creative Director, Okonkwo Couture',
    text: 'NALOE fabrics are unmatched in quality. The richness of the colors and the durability of the textiles make them my first choice for every collection.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=400'
  }
];
