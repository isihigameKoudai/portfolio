// import { css } from "@emotion/react";
import { css } from "@emotion/css";

export const mouseCursor = css`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: none;
  pointer-events: none;

  width: 8px;
  height: 8px;
  background-color: #222;
  z-index: 1001;
  transform: translate(-50%, -50%);
`;

export const mouseFollower = css`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: none;
  pointer-events: none;

  width: 40px;
  height: 40px;
  background-color: transparent;
  border: solid 1px #222;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

export default {
  mouseCursor,
  mouseFollower,
};
