export interface Artwork {
    title: string;
    image: string;
    width: number;
    height: number;
    alt: string;
    category: string;
    year: number;
    description: string;
}

export const artworks: Artwork[] = [
    {
        title: 'test artwork',
        image: '/artworks/test-artwork.png',
        width: 1200,
        height: 630,
        alt: 'test artwork',
        category: 'test category',
        year: 2026,
        description: 'This is a test artwork'
    },
    {
        title: 'test artwork 2',
        image: '/artworks/test-artwork-2.png',
        width: 1200,
        height: 900,
        alt: 'test artwork 2',
        category: 'test category 2',
        year: 2026,
        description: 'This is another test artwork'
    },
    {
        title: 'test artwork 3',
        image: '/artworks/test-artwork-3.png',
        width: 1200,
        height: 1200,
        alt: 'test artwork 3',
        category: 'test category 3',
        year: 2026,
        description: 'This is another test artwork'
    },
    {
        title: 'test artwork 4',
        image: '/artworks/test-artwork-4.png',
        width: 1200,
        height: 2133,
        alt: 'test artwork 4',
        category: 'test category 4',
        year: 2026,
        description: 'This is another test artwork'
    },
    {
        title: 'test artwork 5',
        image: '/artworks/test-artwork-5.png',
        width: 1200,
        height: 1800,
        alt: 'test artwork 5',
        category: 'test category 5',
        year: 2026,
        description: 'This is another test artwork'
    },
    ...Array.from({ length: 15 }, (_, index) => {
        const number = String(index + 1).padStart(2, '0');

        return {
            title: `Masonry test photo ${index + 1}`,
            image: `/artworks/masonry-${number}.jpg`,
            width: 900,
            height: [1200, 650, 1400, 900, 1100, 600, 1500, 1000, 700, 1300, 800, 1600, 950, 1250, 750][index] ?? 900,
            alt: `Sample photo ${index + 1} for masonry layout testing`,
            category: 'Masonry test',
            year: 2026,
            description: 'Sample photo with a varied aspect ratio for testing the masonry layout'
        };
    })
];