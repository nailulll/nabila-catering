import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description/Intro',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation Time (minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'cookTime',
      title: 'Cooking Time (minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'servings',
      title: 'Servings',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Ingredient Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
            },
          ],
          preview: {
            select: {
              name: 'name',
              quantity: 'quantity',
              unit: 'unit',
            },
            prepare({ name, quantity, unit }) {
              return {
                title: name,
                subtitle: `${quantity}${unit ? ` ${unit}` : ''}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'instruction',
              title: 'Instruction',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              step: 'step',
              instruction: 'instruction',
            },
            prepare({ step, instruction }) {
              return {
                title: `Step ${step}`,
                subtitle: instruction,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'nutritionalInfo',
      title: 'Nutritional Information',
      type: 'object',
      fields: [
        {
          name: 'calories',
          title: 'Calories',
          type: 'number',
        },
        {
          name: 'protein',
          title: 'Protein (g)',
          type: 'number',
        },
        {
          name: 'carbohydrates',
          title: 'Carbohydrates (g)',
          type: 'number',
        },
        {
          name: 'fat',
          title: 'Fat (g)',
          type: 'number',
        },
        {
          name: 'fiber',
          title: 'Fiber (g)',
          type: 'number',
        },
        {
          name: 'sugar',
          title: 'Sugar (g)',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
