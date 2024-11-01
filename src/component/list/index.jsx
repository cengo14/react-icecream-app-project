import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import TrendButton from "./TrendButton";
import Loader from "./../loader/index";
import Error from "./../error/index";

import Card from "./../card/index";
import Cart from "./../cart/index";

const List = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api
      .get("/iceCreams")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="mt-[30px] lg:mt-[120px]">
      <Cart />
      <TrendButton />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="grid xl:grid-cols-2 gap-[15px] lg:gap-[30px] mt-10">
          {data && data.map((i) => <Card key={i.id} item={i} />)}
        </div>
      )}
    </div>
  );
};

export default List;
