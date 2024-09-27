import React from "react";

const ProfileCard: React.FC<any> = ({ item, index }) => {
  return (
    <div className="md:w-1/4" key={index}>
      <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-64 object-contain pt-${item.marginTP}`}
        />
      
      </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white text-center mb-2">{item.name}</h3>
          <p className="text-white font-medium text-center">{item.title}</p>
          <p className="text-white font-medium text-center">{item.company}</p>
        </div>
    </div>
  );
};

export default ProfileCard;
