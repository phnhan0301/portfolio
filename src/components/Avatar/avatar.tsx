import React from "react";
import { AvatarRoot } from "./avater.styled";

interface AvatarProps {
  size?: "small" | "normal" | "large" | "larger";
  src: string;
}

const Avatar = ({ size = "normal", src }: AvatarProps) => {
  const sizeMap = {
    small: {
      width: 50,
      height: 50,
    },
    normal: {
      width: 100,
      height: 100,
    },
    large: {
      width: 250,
      height: 250,
    },
    larger: {
      width: 296,
      height: 296,
    },
  };
  return (
    <AvatarRoot {...sizeMap[size]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="avatar" />
    </AvatarRoot>
  );
};

export default Avatar;
