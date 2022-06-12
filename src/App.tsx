import { useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { BlockingButton } from "./BlockingButton";
import { ThrottleButton } from "./ThrottleButton";
import { DebounceButton } from "./DebounceButton";
import { LinearProgressWithLabel } from "./LinearWithValueLabel";
import { useShowButton } from "./useShowButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const App = () => {
  const [value, updateCount] = useState(0);
  const { kind } = useShowButton();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3} style={{ minWidth: "256px" }}>
        <Card>
          <CardContent>
            <Box>
              <LinearProgressWithLabel value={value} />
            </Box>
            <ButtonGroup
              size="small"
              variant="outlined"
              aria-label="outlined button group"
            >
              {["all", "default"].includes(kind) && (
                <DefaultButton
                  onClick={() => {
                    updateCount((prev) => prev + 1);
                  }}
                  text="Default"
                />
              )}
              {["all", "block"].includes(kind) && (
                <BlockingButton
                  text="Block"
                  onClick={async () => {
                    await wait(1000);
                    updateCount((prev) => prev + 1);
                  }}
                />
              )}
              {["all", "throttle"].includes(kind) && (
                <ThrottleButton
                  text="Throttle"
                  onClick={() => {
                    updateCount((prev) => prev + 1);
                  }}
                  timeoutMs={1000}
                />
              )}
              {["all", "debounce"].includes(kind) && (
                <DebounceButton
                  text="Debounce"
                  onClick={() => {
                    updateCount((prev) => prev + 1);
                  }}
                  timeoutMs={1000}
                />
              )}
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
