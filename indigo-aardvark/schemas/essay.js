//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'essay',
    type: 'document',
    title: 'essay',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
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