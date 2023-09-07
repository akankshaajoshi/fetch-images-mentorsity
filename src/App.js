import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [res, setRes] = useState([]);
  const [text, setText] = useState("");

  const fetchRequest = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const dataJ = await data.json();
    setRes(dataJ);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const handleChange = (e)=>{
    const txt = e.target.value;
    setText(txt);
    if(txt===""){
      fetchRequest();
    }else{
      const filteredRes = res.filter(obj=>
        obj.title.startsWith(txt)
      )
      setRes(filteredRes);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              className="col"
              type="text"
              placeholder="Search Anything..."
              onChange={handleChange}
              value={text}
            />
          </div>
          <div className="col">
  {res.map((val) => {
    return (
        <img
          className="col"
          src={val.thumbnailUrl}
          alt="val.alt_description"
          title={val.title}
          key={val.id}
        />
    )
  })}
</div>
        </div>
      </div>
    </>
  );
};
export default App;
