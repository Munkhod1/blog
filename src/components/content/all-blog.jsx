import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { SearchContext } from "@/provider/search-provider";

const AllBlog = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles/?pages=1&per_page=12"
    );
    const data = await response.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticlesData();
  }, []);
  return (
    <>
      <div className="font-bold mx-20 my-20">
        <p className="object-contain top-20 relative">
          All Blog Post-{searchValue}
        </p>
      </div>
      <div className="flex justify-between items-center mx-20 mt-4">
        <ul className="flex justify-center gap-5">
          <li className="text-orange-400">All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <div class="">
          <div class="container flex justify-center items-center px-2 font-bold text-sm">
            <p>View All</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={"/blog/" + article.id}>
            <div
              key={article.id}
              className=" bg-[#F2F2F2] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110 h-[476px]"
            >
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-[360px] h-60 object-cover rounded-xl border border-gray-200 mx-auto mt-2"
              />
              <button className="text-[#4B6BFB] text-sm mb-2 w-150 font-work-sans rounded-md   mt-8 bg-[#4B6BFB0D] border-2 ml-6 px-4 py-1">
                Description
              </button>
              <div className="px-4  mx-2 my-2 rounded-xl flex flex-col">
                <h2 className="text-2xl font-semibold">{article.title}</h2>
                <div className=" text-[#97989F] text-sm font-work-sans py-4">
                  {article.readable_publish_date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="border-2 rounded-md p-1 px-4 font-thin text-xs my-10">
          Load More
        </button>
      </div>
    </>
  );
};
export default AllBlog;
