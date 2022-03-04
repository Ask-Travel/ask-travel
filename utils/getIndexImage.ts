export default function getIndexImage(num: number) {
  return `back${num === 3 ? 0 : num + 1}.png`;
}
