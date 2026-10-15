import { defineType, defineField } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'startDate', title: 'Start date', type: 'date', options: { dateFormat: 'MMM YYYY' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'endDate', title: 'End date', type: 'date', options: { dateFormat: 'MMM YYYY' }, description: 'Leave empty for a current position.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first.', initialValue: 0 }),
  ],
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }, { field: 'startDate', direction: 'desc' }] }],
});
