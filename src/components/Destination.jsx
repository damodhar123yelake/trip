import React from "react";
import "./DestinationStyles.css";
import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
      inside a-lake inside an island. If you fancy a closer look, the hike
      up to the crater is a mere 45 minutes, and is easy enough for
      beginners. Guides will assist you most of the way, and you'll see
      the peculiar environment found on an active volcano, including
      volcanic rocks and steam vents. The hike can be dusty and hot, so
      plan for an early morning trip, and then unwind with some bulalo
      before heading back home!"
        img1={mountain1}
        img2={mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Paris"
        text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
        img1={mountain3}
        img2={mountain4}
      />
      <DestinationData
        className="first-des"

        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still
        good for a beginner mountaineer, check out Mt. Daguldul in San
        Juan, Batangas. You'll start your hike from the beach and pass
        through tropical forest, different rock formations, and small
        streams. There's a small store halfway up the trail where you can
        take a break and drink buko juice, and though the summit itself
        may not have the best view, the breeze is fantastic. Once you've
        made it back down, head straight to the beach for a refreshing,
        well-deserved swim."
        img1={mountain2}
        img2={mountain1}
      />
    </div>
  );
};

export default Destination;
