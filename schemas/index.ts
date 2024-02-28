import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

export const checkoutSchema = z.object({
  firstName: z.string().min(5, {
    message: 'Firstname is required',
  }),
  lastName: z.string().min(5, {
    message: 'lastname is required',
  }),
  email: z.string().email({
    message: 'Email is required',
  }),
  phone: z.number().min(11, {
    message: 'Phone number is required',
  }),
  address: z.string().min(5, {
    message: 'address is required',
  }),
  country: z.string().min(5, {
    message: 'country is required',
  }),
  state: z.string().min(5, {
    message: 'state is required',
  }),
  city: z.string().min(5, {
    message: 'city is required',
  }),
  info: z.string().min(10, {
    message: 'additional info is required',
  }),
  coupon: z.string(),
})

export const signupSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  phone: z.number().min(11, {
    message: 'Phone number is required',
  }),
})

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

export type TCheckoutValidator = z.infer<typeof checkoutSchema>
export type TSignUpValidator = z.infer<typeof signupSchema>
export type TLoginValidator = z.infer<typeof loginSchema>
