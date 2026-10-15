import { type SchemaTypeDefinition } from 'sanity'
import { about } from './about';
import { project } from './project';
import { experience } from '../schemas/experience';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, project, experience],
}
