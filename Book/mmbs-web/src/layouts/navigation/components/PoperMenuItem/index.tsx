import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { AGE_LIST, CATEGORY_LIST } from "../../../../constants/navigation";

export default function PoperMenuItem() {

  return (
    <Box
      display="flex"
      width={"80vw"}
      sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
    >
      {CATEGORY_LIST.map((category) => (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              mb={2}
              fontWeight={600}
              textAlign="center"
              variant="subtitle1"
              component="div"
            >
              {category.title}
            </Typography>
            {category.subTitles.map((sub) => (
              <Typography pl={2} mb={1} variant="subtitle2" component="div">
                {sub.subTitle}
              </Typography>
            ))}
          </Box>
          <Divider
            style={{ borderColor: "#aaaaaa" }}
            orientation="vertical"
            flexItem
          />
        </>
      ))}
      {AGE_LIST.map((age) => (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              mb={2}
              fontWeight={600}
              textAlign="center"
              variant="subtitle1"
              component="div"
            >
              {age.title}
            </Typography>
            {age.subTitles.map((age) => (
              <Typography pl={2} mb={1} variant="subtitle2" component="div">
                {age.subTitle}
              </Typography>
            ))}
          </Box>
          {age.title !== "4~7세" && (
            <Divider
            style={{ borderColor: "#aaaaaa" }}
            orientation="vertical"
            flexItem
          />
          )}
          
        </>
      ))}
    </Box>
  );
}