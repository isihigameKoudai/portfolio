import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

type DefaultFollower = {
  width: number;
  delay: number;
};

const defaultFollower: Readonly<DefaultFollower> = {
  width: 44,
  delay: 100,
};

export const useMouseAnimation = (follower = defaultFollower) => {
  const $cursor = useRef<HTMLDivElement>(null);
  const $follower = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to($follower.current, {
      width: follower.width,
      height: follower.width,
      top: mouse.y,
      left: mouse.x,
    });
  }, [mouse]);

  return {
    $cursor,
    $follower,
    mouse,
  };
};
