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
            name: 'Link',
            title: 'publicationurl',
            type: 'url',
          }),
          defineField({
            name: 'Publisher',
            title: 'publisher',
            type: 'string',
          }),
        
    ]
})