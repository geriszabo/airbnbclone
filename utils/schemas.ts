import * as z from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, {message: "first name must be at least 2 characters long"}),
  lastName: z.string().min(2, {message: "last name must be at least 2 characters long"}),
  username: z.string().min(2, {message: "username must be at least 2 characters long"}),
});

export function validateWithZodSchema<T>(schema:z.ZodSchema<T>, data:unknown):T {
    const result = schema.safeParse(data);
    if(!result.success) {
        const errors = result.error.errors.map((error) => error.message)
        throw new Error(errors.join(", "))
    }
    return result.data
}