import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param {...ClassValue[]} inputs - An array of class values which could be strings, arrays, or objects.
 * @return {string} - A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
