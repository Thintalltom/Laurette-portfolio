import {createClient} from '@sanity/client';

const client = createClient({
    projectId: 'qcqvl705',
    dataset: 'production',
    useCdn: false
});

export default client;