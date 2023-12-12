//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'opportunities',
    type: 'document',
    title: 'opportunities',
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
            name: 'body',
            title: 'Body',
            type: 'text',
          })
    ]
})