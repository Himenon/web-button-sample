import Button from "@mui/material/Button";
import { useCallback, useState } from "react";

export interface BlockingButtonProps {
  text: string;
  onClick?: () => Promise<void>;
}

export const BlockingButton: React.FC<BlockingButtonProps> = (props) => {
  const [disabled, updateDisabled] = useState(false);
  const blockCallback = useCallback(() => {
    if (disabled) {
      return;
    }
    updateDisabled(true);
    props
      .onClick?.()
      .then(() => {
        updateDisabled(false);
      })
      .catch(() => {
        updateDisabled(false);
      });
  }, [props.onClick]);
  return (
    <Button  variant="outlined" disabled={disabled} onClick={blockCallback}>
      {props.text}
    </Button>
  );
};
