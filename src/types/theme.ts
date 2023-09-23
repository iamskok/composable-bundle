/**
 * Theme type definition that follows tailwindcss's color naming convention.
 */
export type Theme = {
  colors: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
