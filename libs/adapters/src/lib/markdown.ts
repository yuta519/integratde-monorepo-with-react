import { micromark } from 'micromark';

export function md2html(text: string): string {
  const html = micromark(text);
  console.log(micromark('## Hello, *world*!'));
  return html;
}
