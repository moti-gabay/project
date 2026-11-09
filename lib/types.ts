





export type RegisterValues = { name: string; email: string, password: string; };


export type LoginValues = Omit<RegisterValues, "name">