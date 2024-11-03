import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {

    const categories = useLoaderData()

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>

      {/* Categories Tab */}
      <Categories categories={categories}></Categories>
      
      {/* Dynamic Nested Component */}
      <Outlet></Outlet>

    </div>
  );
};

export default Home;
