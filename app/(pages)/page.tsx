import { getMainOptions, getSubOptions } from "@actions";
import { Select } from "@ui";

const Home = async () => {
  const mainOptions = await getMainOptions();
  const subOptions = await getSubOptions();

  return (
    <div className="flex flex-col gap-2">
      <Select storeKey="mainCatId" options={mainOptions} />
      <Select options={subOptions} />
    </div>
  );
};

export default Home;

// * Or we can use a route handler.
// const allTheCats = await fetch("http://localhost:3000/categories").then((cats) =>
//   cats.json()
// );
// const mainOptions = ...
