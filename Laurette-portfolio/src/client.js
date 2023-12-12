import {createClient} from '@sanity/client';

const client = createClient({
    projectId: 'buw9cvdi',
    dataset: 'production',
    useCdn: false
});

export default client;