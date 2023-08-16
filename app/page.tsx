import { getValue } from "@store/getValue";
import { getMainCategories } from "./actions/getMainCategories";
import { Select } from "@ui/Select";
import { getCategoryName } from "@util/getCategoryName";

const Home = async () => {
  const mainCategories = getMainCategories();

  const selectedCategoryId = await getValue<number>("selectedMainCategory");

  // const selectedCategoryName = getCategoryName(selectedCategoryId);

  return (
    <>
      <Select
        initialValue={selectedCategoryId}
        options={mainCategories.map((c) => c.name)}
      />
      <div>server-side value (category id): '{selectedCategoryId}'</div>
    </>
  );
};

export default Home;
