const client = require('contentful').createClient({
  space: '51z40k4w913r',
  accessToken: 'vT4ek6GFjHCWfdy9xOErEa-EOjOgbLq_bH9XQuaasdk',
});

export async function getContentfulData() {
  const { items } = await client.getEntries();

  const workList = items
    .sort((a, b) => {
      if (a.fields.index > b.fields.index) return 1;
      if (a.fields.index < b.fields.index) return -1;
      return 0;
    })
    .map((item, i) => {
      const {
        title,
        index,
        category,
        type,
        origin,
        material,
        size,
        weight,
        description,
        price,
      } = item.fields;
      const imgList = item.fields.image.map((image) => ({
        imgUrl: image.fields.file,
      }));
      return {
        index,
        title,
        category,
        type,
        origin,
        material,
        size,
        weight,
        description,
        imgList,
        price,
      };
    });

  return {
    workList,
  };
}
