import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import recipe from './recipe'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, recipe, post],
}
