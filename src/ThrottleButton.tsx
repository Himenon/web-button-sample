import Button from "@mui/material/Button";
import { useCallback, useRef } from "react";

export interface ThrottleButtonProps {
  text: string;
  onClick?: () => void;
  timeoutMs: number;
}

export const ThrottleButton: React.FC<ThrottleButtonProps> = (props) => {
  const cancel = useRef<() => void>(() => undefined);
  const throttleCallback = useCallback(() => {
    cancel.current();
    const timer = window.setTimeout(() => {
      props.onClick?.();
    }, props.timeoutMs);
    cancel.current = () => window.clearTimeout(timer);
  }, [props.onClick, props.timeoutMs]);
  return <Button  variant="outlined" onClick={throttleCallback}>{props.text}</Button>;
};
