import { forwardRef } from "react";
import styled from "styled-components";
const ForwardedDiv = forwardRef((props, ref: any) => <div ref={ref} {...props} />);

ForwardedDiv.displayName = 'StyledCursor';

export const StyledCursor = styled(ForwardedDiv)`
  width: 1.75rem;
  height: 1.75rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  position: fixed;
  z-index: 50;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: none;
  transition: all 75ms;
`;
