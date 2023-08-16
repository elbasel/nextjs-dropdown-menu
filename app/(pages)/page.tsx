import { getServerSideValue } from "@actions";
import { getCategory, getDefaultId, getMainOptions } from "@store";
import { Select } from "@ui";

const Home = async () => {
  const mainOptions = getMainOptions();
  const defaultId = getDefaultId();

  let mainId = await getServerSideValue<number>("selectedMainCategory");
  if (!mainId) mainId = defaultId;
  const mainCategory = getCategory(mainId);
  const subCategories = mainCategory?.children ?? [];
  // * Or if we want the sub-categories to be empty on the initial render;
  // const subCategories =
  //   mainId === defaultId && !mainId ? [] : mainCategory?.children;

  return (
    <div className="flex flex-col gap-2">
      <Select
        storeKey="selectedMainCategory"
        initialValue={mainCategory?.name}
        options={mainOptions}
      />
      <Select
        storeKey="selectedSubCategory"
        options={subCategories?.map(({ id, name }) => ({ id, name }))}
      />
    </div>
  );
};

export default Home;
