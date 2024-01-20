//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'publications',
    type: 'document',
    title: 'publications',
    fields: [
        defineField({
          name: 'Title',
          title: 'title',
          type: 'string',
        }),
          defineField({
            name: 'Publication Url',
            title: 'publicationurl',
            type: 'url',
          }),
        
    ]
})