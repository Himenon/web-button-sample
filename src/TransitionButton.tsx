import { useCallback, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export interface TransitionButtonProps {
  text: string;
  onClick?: () => void;
}

export const TransitionButton: React.FC<TransitionButtonProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOnClick = useCallback(() => {
    setOpen(true);
  }, [props.onClick]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOk = useCallback(() => {
    setOpen(false);
    props.onClick?.();
  }, [props.onClick, setOpen]);

  return (
    <div>
      <Button variant="outlined" onClick={handleOnClick}>
        {props.text}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            May I confirm the operation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
