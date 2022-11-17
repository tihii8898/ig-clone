import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";

export const LeftNav = () => {
  return (
    <div className="w-[244px] p-4">
      <a href="/" className="w-full">
        <Image
          src={Logo}
          alt="ig-logo"
          width={103}
          height={92}
          className="m-4"
        />
      </a>
      <div>Home</div>
      <div>Search</div>
      <div>Explore</div>
      <div>Messages</div>
      <div>Notifications</div>
      <div>Create</div>
      <div>Profile</div>
      <div>More</div>
    </div>
  );
};
