const client = require('contentful').createClient({
  space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getContentfulData() {
  const { items } = await client.getEntries();

  const workList = items.map((item, i) => {
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
