import React from "react";

const Format = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://i0.wp.com/wildvoyager.com/wp-content/uploads/2019/10/odissi-dance-300x268.jpg?resize=424%2C379&ssl=1",
      name: "Odissi, Odisha",
      price: 200,
    },
    {
      id: 2,
      src: "https://www.holidify.com/images/cmsuploads/compressed/33405125866_02c58f6e8a_b_20170926204513.jpg",
      name: "Kathak, Uttar Pradesh",
      price: 200,
    },
    {
      id: 3,
      src: "https://www.holidify.com/images/cmsuploads/compressed/486352442_28c34cbf1b_b_20170926204726.jpg",
      name: "Manipuri, Manipur",
      price: 200,
    },
    {
      id: 4,
      src: "https://cdn.britannica.com/04/60404-050-77D978DF/Bhangra-folk-dance-region-Punjab-India-Pakistan.jpg",
      name: "Bhangra, Punjab",
      price: 200,
    },
    {
      id: 5,
      src: "https://www.holidify.com/images/cmsuploads/compressed/Bihu_of_Assam_20180314220215.jpg",
      name: "Bihu, Assam",
      price: 200,
    },
  ];

  return (
    <div
      name="style"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-auto sm:h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold ">Famous Dance</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 mt-6">
          {portfolios.map(({ id, src, name, price, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg w-full h-auto"
            >
              <img src={src} alt="" className="rounded-md h-36 w-96" />
              <div className="pt-2 px-2 text-center">
                <p>{name}</p>
                <p>
                  Price - {""}
                  <span className=" text-red-600">${price}</span>
                </p>
              </div>
              <div className="flex justify-center gap-8 mt-4 mb-3">
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xl text-white px-2.5 py-2 rounded-2xl text-center ">
                  <a href={link} target="_blank">
                    Register
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Format;
