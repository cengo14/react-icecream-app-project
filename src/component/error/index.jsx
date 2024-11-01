import React from "react";

const Error = ({ info }) => {
  return (
    <div className="text-center my-20 text-lg flex flex-col gap-5">
      <p>Bir sorun oluştu </p>
      <p>{info}</p>
    </div>
  );
};

export default Error;
