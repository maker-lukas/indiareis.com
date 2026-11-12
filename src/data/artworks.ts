import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';

export interface Artwork {
    title: string;
    image: string;
    thumb: string;
    width: number;
    height: number;
    alt: string;
    category: string;
    categoryLabel: string;
    year: number;
    description: string;
}

const entries = (await getCollection('artworks')).sort(
    (a, b) => b.data.year - a.data.year || b.id.localeCompare(a.id),
);
const styleLabels = new Map(
    (await getCollection('styles')).map(({ id, data }) => [id, data.title]),
);

export const artworks: Artwork[] = await Promise.all(
    entries.map(async ({ data }) => {
        const full = await getImage({ src: data.image, width: Math.min(data.image.width, 2400) });
        const thumb = await getImage({ src: data.image, width: Math.min(data.image.width, 800) });
        const title = data.title ?? 'Untitled';

        return {
            title,
            image: full.src,
            thumb: thumb.src,
            width: data.image.width,
            height: data.image.height,
            alt: title,
            category: data.category,
            categoryLabel:
                styleLabels.get(data.category) ??
                (data.category === 'uncategorized' ? 'Uncategorized' : data.category),
            year: data.year,
            description: data.description ?? 'Original artwork from the collection.',
        };
    }),
);