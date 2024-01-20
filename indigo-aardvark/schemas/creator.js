//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'opportunity',
    type: 'document',
    title: 'opportunity',
    fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
            name: 'Description',
            title: 'description',
            type: 'string',
          }),
          defineField({
            name: 'publishedAt',
            title: 'Opportunity Date',
            type: 'datetime',
          }),
          defineField({
            name: 'Link',
            title: 'opportunityurl',
            type: 'url',
          }),
    ]
})