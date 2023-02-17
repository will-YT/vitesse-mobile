export const getImageUrl = (name: string) => {
  return new URL(`../../imgs/${name}`, import.meta.url).href
}
