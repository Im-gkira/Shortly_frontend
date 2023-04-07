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
          .post("https://minirl.onrender.com/minrl/get_mini_url", {
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

  function copyText(url) {
    var text = url;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  var dataArr = outputArr.map(function (data, index) {
    return (
      <div key={index} className="hero--response">
        <h2 className="old--url">{data[0]}</h2>
        <h2 className="new--url">{data[1]}</h2>
        <button className="go--btn" onClick={()=>{copyText(data[1])}}>Copy</button>
      </div>
    );
  });

  console.log(outputArr);

  return (
    <section className="hero">
      <div id="search" className="hero--search">
        <input
          placeholder="Shorten a link here..."
          value={userInput}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>Shorten It!</button>
      </div>
      <div className="hero--result">{dataArr}</div>
    </section>
  );
}
