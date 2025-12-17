import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.willavila.com.br'
    const lastMod = '2024-12-17'

    return [
        {
            url: baseUrl,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#portfolio`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}
