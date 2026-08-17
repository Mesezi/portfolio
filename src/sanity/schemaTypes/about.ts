import { defineType, defineField } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Your professional title, e.g. "Senior Frontend Engineer". This appears prominently on the homepage.',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'A multi-line description about yourself',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutExpansion',
      title: 'About Expansion',
      type: 'text',
      description: 'A short paragraph on how you approach problems — not just a skills list. Optional but recommended.',
    }),
    defineField({
      name: 'currentlyExploring',
      title: 'Currently Exploring',
      type: 'string',
      description: 'What you are actively learning or deepening right now, e.g. "PGD in Computer Science, diving deeper into system design."',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Your contact email address',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Your GitHub profile URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'url',
      description: 'Your Twitter profile URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedIn Link',
      type: 'url',
      description: 'Your LinkedIn profile URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Your profile photo',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
