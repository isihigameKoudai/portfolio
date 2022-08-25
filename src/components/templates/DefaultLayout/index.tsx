import React from "react";

import { useMouseAnimation } from "../../../utils/useMouse";
import style from './style';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, className }) => {
  const { mouse, $cursor, $follower } = useMouseAnimation();
  
  return (
    <div className={className}>
      {
        children
      }
      <div ref={$cursor} className={style.mouseCursor} style={{
        left: mouse.x,
        top: mouse.y
      }} />
      <div ref={$follower} className={style.mouseFollower} />
    </div>
  );
};

export default DefaultLayout;
