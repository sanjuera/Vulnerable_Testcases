export { h, render } from 'DATASETS_17_09_XSS/typescript_ds/xss/preact'

export type { FunctionComponent as FC } from 'DATASETS_17_09_XSS/typescript_ds/xss/preact'

export * from 'preact/hooks'

export function setHtml(html: string) {
  return { dangerouslySetInnerHTML: { __html: html } }
}
