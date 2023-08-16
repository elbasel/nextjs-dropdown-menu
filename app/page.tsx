import { getValue } from "@store/getValue";
import { Select } from "@ui/Select";
import { getMainCategories } from "@actions/getMainCategories";
import { getSubCategories } from "@actions/getSubCategories";
import { getCategoryName } from "@util/getCategoryName";

const Home = async () => {
  const mainCategories = getMainCategories();
  
  const selectedMainId = await getValue<number>("selectedMainCategory");
  const selectedMain = mainCategories.find((c) => c.id === selectedMainId);
  
  const subCategories = getSubCategories(selectedMainId);


  return (
    <div className="flex flex-col gap-2">
      <Select
        storeKey="selectedMainCategory"
        initialValue={getCategoryName(selectedMainId)}
        options={mainCategories.map(({ id, name }) => ({ id, name }))}
      />
      {/* <Select
        storeKey="selectedSubCategory"
        // initialValue=""
        // options={subCategories.map((s) => s.name)}
      /> */}
      {/* <div>server-side value (category id): {selectedCategoryId}</div> */}
    </div>
  );
};

export default Home;
