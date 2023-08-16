import { getMainCategories } from "./actions/getMainCategories";

const Home = async () => {
  const mainCategories = getMainCategories();
  return (
    <>
      <select name="main-category" id="main-category">
        {mainCategories.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
    </>
  );
};

export default Home;
