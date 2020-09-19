declare module '*.md' {
  const data: Record<string, unknown>
  const html: string
  export { data }
  export default html
}
