import { type SchemaTypeDefinition } from 'sanity'
import { about } from './about';
import { project } from './project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, project],
}
