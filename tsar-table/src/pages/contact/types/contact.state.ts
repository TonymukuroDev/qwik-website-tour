import * as v from 'valibot';

export const contactFormSchema = v.object({
  name: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Full Name is required')
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Email Address is required'),
    v.email('Invalid email address')
  ),
  inquiry: v.union([
    v.literal('reservation'),
    v.literal('private'),
    v.literal('feedback'),
    v.literal('press'),
    v.literal('other')
  ], 'Please select a valid inquiry type'),
  message: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Your message cannot be empty')
  )
});

// Тип для использования в TypeScript приложениях
export type ContactFormDataType = v.InferOutput<typeof contactFormSchema>;
