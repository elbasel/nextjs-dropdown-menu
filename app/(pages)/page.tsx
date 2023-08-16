import { getServerSideValue } from "@actions";
import { getCategory, getDefaultId, getMainOptions } from "@store";
import { Select } from "@ui";

const Home = async () => {
  const mainOptions = getMainOptions();

  let mainId = await getServerSideValue<number>("selectedMainCategory");
  if (!mainId) mainId = getDefaultId();
  const mainCategory = getCategory(mainId);
  const subCategories = mainCategory?.children;

  return (
    <div className="flex flex-col gap-2">
      <Select
        storeKey="selectedMainCategory"
        initialValue={mainCategory?.name}
        options={mainOptions}
      />
      <Select
        storeKey="selectedSubCategory"
        options={subCategories?.map(({ id, name }) => ({ id, name })) ?? []}
      />
    </div>
  );
};

export default Home;
