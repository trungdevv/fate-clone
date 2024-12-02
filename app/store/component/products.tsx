import ProductFilter from "./product-filter";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer JVWaSufjDGNwrawm9DUHAdsoMUmA6itv9HxqfcXymR84vGWDaGXyxopqzICyRuJY",
  },
};
export default async function Products() {
  const dataProduct = await fetch("https://dev.sellix.io/v1/products", options);
  const resultProduct = await dataProduct.json();
  const dataCategories = await fetch(
    "https://dev.sellix.io/v1/categories",
    options
  );
  const resultCategories = await dataCategories.json();
  console.log(resultProduct.data.products);
  const categories = Array.from(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Set(resultCategories.data.categories.map((item : any) => item.title))
  );
  return (
    <>
      <ProductFilter
        products={resultProduct.data.products}
        categories={categories}
      />
    </>
  );
}
