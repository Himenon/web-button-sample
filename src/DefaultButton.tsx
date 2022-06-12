import Button from "@mui/material/Button";

export interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return (
    <Button variant="outlined" onClick={props.onClick} children={props.text} />
  );
};
