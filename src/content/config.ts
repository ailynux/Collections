import {defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
            author: z.string(),
            categories: z.array(z.string()),
            date: z.string(),
            featured: z.string(),
            image: z.string(),
            title: z.string(),
        }),
})

export const collections = {
    posts: postsCollection,
}