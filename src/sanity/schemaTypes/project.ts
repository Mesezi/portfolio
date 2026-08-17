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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Use this to control project ordering on the site.',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'A multi-line description of your project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleClarity',
      title: 'Role Clarity',
      type: 'string',
      description: 'One line clarifying your specific contribution, e.g. "Led frontend build and integrated Sanity CMS for the editorial workflow."',
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

    // --- Case Study Fields (all optional) ---
    defineField({
      name: 'hasCaseStudy',
      title: 'Has Case Study',
      type: 'boolean',
      description: 'Toggle on to show case study fields. Leave off for simple project entries.',
      initialValue: false,
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'text',
      description: 'What need or gap this project addressed (1-2 sentences).',
      hidden: ({ document }) => !document?.hasCaseStudy,
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'text',
      description: 'What you specifically owned (design, frontend, backend, both).',
      hidden: ({ document }) => !document?.hasCaseStudy,
    }),
    defineField({
      name: 'keyDecisions',
      title: 'Key Decisions',
      type: 'array',
      description: 'Important technical decisions and why you made them.',
      of: [{ type: 'string' }],
      hidden: ({ document }) => !document?.hasCaseStudy,
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
      description: 'Concrete result. Numbers if you have them (concurrent users, latency, drop-off reduction, etc).',
      hidden: ({ document }) => !document?.hasCaseStudy,
    }),
    defineField({
      name: 'retrospective',
      title: "What I'd Do Differently",
      type: 'text',
      description: 'One honest sentence. Signals self-awareness, which reads as senior.',
      hidden: ({ document }) => !document?.hasCaseStudy,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'order',
    },
    prepare({ title, media, order }) {
      return {
        title: order != null ? `${order}. ${title}` : title,
        media,
      };
    },
  },
});
