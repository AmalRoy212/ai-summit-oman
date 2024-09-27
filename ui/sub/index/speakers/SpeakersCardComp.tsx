import React from "react";

interface CardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const ProfileCard: React.FC<any> = ({ item, index }) => {
  return (
    <div className="md:w-1/4">
      <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-contain"
        />
      
      </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white text-center">{item.name}</h3>
          <p className="text-white font-medium text-center">{item.title}</p>
          <p className="text-white font-light text-center">{item.company}</p>
          <p className="text-white font-light text-center">{item.organization}</p>
        </div>
    </div>
  );
};

export default ProfileCard;
