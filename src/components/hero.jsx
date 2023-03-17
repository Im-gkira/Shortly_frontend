import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Hero() {
  const [userInput, setUserInput] = useState("");
  const [reqUrl, setReqUrl] = useState("");

  const [outputArr, setOutputArr] = useState([]);

  function changeHandler(event) {
    setUserInput(event.target.value);
  }

  function clickHandler() {
    setReqUrl(userInput);
  }

  useEffect(
    function () {
      if (reqUrl) {
        axios
          .post("http://localhost:5000/minrl/get_mini_url", {
            original_url: reqUrl,
          })
          .then(function (response) {
            if (response.status === 200) {
              setOutputArr(function (prevArr) {
                let arr = [...prevArr];
                if (arr.length == 10) arr.pop();
                arr.unshift([reqUrl, response.data.url]);
                return arr;
              });
            }
          });
      }
    },
    [reqUrl]
  );

  var dataArr = outputArr.map(function (data, index) {
    return (
      <div key={index}>
        <h2>{data[0]}</h2>
        <h2>{data[1]}</h2>
        <button>Go</button>
      </div>
    );
  });

  console.log(outputArr);

  return (
    <div>
      <div>
        <input
          placeholder="Shorten a link here..."
          value={userInput}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>Shorten It!</button>
      </div>
      <hr></hr>
      <div>{dataArr}</div>
    </div>
  );
}
