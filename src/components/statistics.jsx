import React from "react";
import Card from "./card";
export default function Statistic() {
  return (
    <section className="statistics">
      <Card
        img=""
        title="Advanced Statistics"
        data="Track how your links are performing across the web with our 
  advanced statistics dashboard."
      />
      <Card
        img=""
        title="Brand Recognition"
        data="Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content."
      />
      <Card
      img=""
      title="Detailed Records"
      data="Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions."
    />
    </section>
  );
}
