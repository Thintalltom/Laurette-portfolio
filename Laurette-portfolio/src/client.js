import {createClient} from '@sanity/client';

const client = createClient({
    projectId: 'qcqvl705',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-12-12'
});

export default client;