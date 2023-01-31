import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface props {
  title: string;
  data: string;
  subTitles: any[];
}

export default function MenuComponent({title, subTitles}: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="span" sx={{ flexGrow: 1 }}>
      <Typography textAlign="center" variant="subtitle1" onClick={handleClick}>
        {title}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{pt: 1.5, pb: 1.5}}
      >
        {subTitles.map((sub) => (
          <MenuItem sx={{width: '10vw', pt: 1.5, pb: 1.5}} onClick={handleClose}>{sub.subTitle}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
}