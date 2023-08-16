import { getServerSideValue } from "@actions";
import { getCategory, getDefaultId, getMainOptions } from "@store";
import { Select } from "@ui";

const Home = async () => {
  // * Or we can use a route handler.
  // const allTheCats = await fetch("http://localhost:3000/categories").then((cats) =>
  //   cats.json()
  // );
  // const mainOptions = ...

  const mainOptions = getMainOptions();
  const defaultId = getDefaultId();

  let mainId = await getServerSideValue<number>("selectedMainCategory");
  if (!mainId) mainId = defaultId;
  const mainCategory = getCategory(mainId);
  const subCategories = mainCategory?.children ?? [];

  return (
    <div className="flex flex-col gap-2">
      <Select
        storeKey="selectedMainCategory"
        initialValue={mainCategory?.name}
        options={mainOptions}
      />
      <Select
        storeKey="selectedSubCategory"
        initialValue={"hello"}
        options={subCategories?.map(({ id, name }) => ({ id, name }))}
      />
    </div>
  );
};

export default Home;
