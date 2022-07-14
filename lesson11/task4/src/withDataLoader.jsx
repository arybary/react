import React, { useState, useEffect } from "react";

const withDataLoader = url => Comp => {
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setData(data.json()));
  }, []);
  return <Comp data={data} />;
};

export default withDataLoader;