import Button from "@mui/material/Button";
import { useCallback, useRef } from "react";

export interface DebounceButtonProps {
  text: string;
  onClick?: () => void;
  timeoutMs: number;
}

export const DebounceButton: React.FC<DebounceButtonProps> = (props) => {
  const processing = useRef<boolean>(false);
  const debounceCallback = useCallback(() => {
    if (processing.current) {
      return;
    }
    processing.current = true;
    window.setTimeout(() => {
      props.onClick?.();
      processing.current = false;
    }, props.timeoutMs);
  }, [props.onClick, props.timeoutMs]);
  return <Button variant="outlined" onClick={debounceCallback}>{props.text}</Button>;
};
