import React, { useEffect, useState } from "react";
import { apiData } from "../assets/db";
import "../components/contentBottom.css";

const ContentBottom = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(apiData);
  }, []);

  return (
    <div>
      <div className="classes">
        <h3 className="titl">Classes</h3>
        <div className="class-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque
            ex repellat quo beatae quas dignissimos nobis molestias
          </p>
        </div>
      </div>

      <div className="data">
        {data?.map((e) => {
          return (
            <div key={e.id} className="data-ele">
              <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="Image"/>
              <h3 className="txt">{e.Name}</h3>
              <p className="txt">{e.ShortDesc}</p>
              <button className="view-btn">View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBottom;
