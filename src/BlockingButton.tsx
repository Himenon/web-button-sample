import { useCallback, useRef } from "react";

export interface BlockingButtonProps {
  text: string;
  onClick?: () => Promise<void>;
}

export const BlockingButton: React.FC<BlockingButtonProps> = (props) => {
  const block = useRef<boolean>(false);
  const blockCallback = useCallback(() => {
    if (block.current) {
      return;
    }
    block.current = true;
    props
      .onClick?.()
      .then(() => {
        block.current = false;
      })
      .catch(() => {
        block.current = false;
      });
  }, [props.onClick]);
  return (
    <button disabled={block.current} onClick={blockCallback}>
      {props.text}
    </button>
  );
};
