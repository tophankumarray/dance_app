import React from "react";

const Gallery = () => {
  const place = [
    {
      image:
        "https://i0.wp.com/wildvoyager.com/wp-content/uploads/2019/10/odissi-dance-300x268.jpg?resize=424%2C379&ssl=1",
      text: "Odissi, Odisha",
    },
    {
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/4048039772_4a3629ce62_o_20170927125955.jpg",
      text: "Kuchipudi, Andhra Pradesh",
    },
    {
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/449px-Kathakalidancer_20170926204612.jpg",
      text: "Kathakali, Kerala",
    },
    {
      image:
        "https://i0.wp.com/wildvoyager.com/wp-content/uploads/2019/10/Bharatnatyam-247x300.jpg?resize=328%2C398&ssl=1",
      text: "Bharatnatyam, Tamil Nadu",
    },
    {
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Garba_20180310125915.jpg",
      text: "Garba, Gujarat",
    },
    {
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Rauff_20180310130603.jpg",
      text: "Rouf, Kashmir",
    },
    {
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Mohiniyattam_20180314221713.png",
      text: "Mohiniyattam, Kerala",
    },
  ];
  return (
    <div
      name="gallery"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-auto sm:h-screen "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 ">Dance</p>
        </div>
        <div className="px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {place.map((data) => (
            <div className="flex-col">
              <img src={data.image} className="h-64 w-96 object-cover" />
              <div className="py-3 px-1.5 text-center">{data.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
