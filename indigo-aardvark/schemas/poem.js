//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'poem',
    type: 'document',
    title: 'poem',
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
          }),
          defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
          }),
          defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
          })
    ]
})