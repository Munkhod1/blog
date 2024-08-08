import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const ArticlesDetail = () => {
  const { query } = useRouter();

  const [articlesDetail, setArticlesDetail] = useState(null);

  const getArticlesById = async (id) => {
    const res = await fetch(`https:/dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticlesDetail(data);
  };
  useEffect(() => {
    getArticlesById(query.id);
  }, []);
  return (
    <div className="mx-auto max-w-2xl mt-8">
      <div>
        <h1 className="text-2xl font-semibold">{articlesDetail?.title}</h1>
        <img
          src={articlesDetail?.cover_image}
          alt=""
          className="rounded-xl border"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: articlesDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticlesDetail;
