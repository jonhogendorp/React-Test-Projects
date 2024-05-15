import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
