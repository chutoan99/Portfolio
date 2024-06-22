import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  z-index: 0;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Canvas = styled(motion.canvas)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;
