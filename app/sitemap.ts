export default async function sitemap() {
  const words = await getAllWords();

  return [
    {
      url: "https://my-dictionary.uz",
      lastModified: new Date(),
    },
    ...words.map((word: number) => {
      url: `https://my-dictionary.uz/word/${word.id}`;
      lastModified: new Date();
    }),
  ];
}
