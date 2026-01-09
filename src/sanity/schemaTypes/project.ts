import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'The name of your project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'A multi-line description of your project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Link to the project repository',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
      description: 'Link to the live demo or deployed project',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'stack',
      title: 'Technology Stack',
      type: 'array',
      description: 'List of technologies used in this project',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      description: 'Screenshot or preview image of your project',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
