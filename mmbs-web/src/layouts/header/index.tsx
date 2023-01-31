import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { useState, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface Prop {
  num: number;
  setNum: any; //void 타입은 함수로 인식
}

export default function Header() {
  const [login, setLogin] = useState<boolean>(true);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, ["right"]: open });
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      pt={4}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display='flex' justifyContent='center'>
        <TagFacesIcon />
        <Typography variant="subtitle1" align="center" ml={1} mb={2}>
          안녕하세요.{" "}
          <Typography variant="subtitle1" component="span" fontWeight={800}>
            박준현
          </Typography>{" "}
          님
        </Typography>
      </Box>
      
      <Divider />
      <Typography variant="subtitle1" m={2}>마이 페이지</Typography>
      <Typography variant="subtitle1" m={2}>주문 내역 조회</Typography>
      <Typography variant="subtitle1" m={2}>장바구니</Typography>
      <Typography variant="subtitle1" m={2}>리뷰 / 문의</Typography>
      <Link to={"/userUpdate"}>
        <Typography variant="subtitle1" m={2}>회원정보수정</Typography>
      </Link>
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        ml="10vw"
        mr="10vw"
        p={2}
      >
        <Box
          flex={1}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography ml={2} mr={2}>
            추천도서
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#000000" }}
          />
          <Typography ml={2} mr={2}>
            신작
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#000000" }}
          />
          <Typography ml={2} mr={2}>
            이벤트
          </Typography>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to={""}>
            <Typography variant="h5">몽몽 책방</Typography>
          </Link>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link to={"/signIn"}>
            <Typography mr={2}>로그인</Typography>
          </Link>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#000000" }}
          />
          <Link to={"/signup"}>
            <Typography ml={2} mr={2} component="span">
              회원가입
            </Typography>
          </Link>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#000000" }}
          />
          {login && (
            <>
              <ShoppingCartOutlinedIcon
                sx={{ color: grey[900], marginRight: 2, marginLeft: 2 }}
              />
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ borderColor: "#000000" }}
              />
              <IconButton onClick={toggleDrawer(true)}>
                <PersonIcon
                  sx={{ color: grey[900], marginRight: 2, marginLeft: 2 }}
                />
              </IconButton>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}