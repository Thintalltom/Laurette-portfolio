//schema / essay.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'fiction',
    type: 'document',
    title: 'fiction',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'file',
            type: 'file',
            title: 'File',
            options: {
              storeOriginalFilename: false, // Set to true if you want to store the original filename.
              showFileKind: true,
            }
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