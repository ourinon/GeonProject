import React, { useEffect, useState } from 'react'

import { styled, alpha } from "@mui/material/styles";
import {Card, CardContent,TextField , CardActions ,Button ,Box , Typography} from '@mui/material';
import axios from 'axios';

export default function UserUpdate() {

  const [user, setUser] = useState<any>(null);
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userAddressDetail, setUserAddressDetail] = useState<string>('');
  const [userKidBirth, setUserKidBirth] = useState<string>('');

  const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJpYXQiOjE2NzQ3MjYzOTIsImV4cCI6MTY3NDcyOTk5Mn0.xJDmb7t_FnCyg3ZqrCDDq5LNlmc7rub4VycpXEgXYwMxHGxJ_GT6CpQQOytrB012PshvVS4kW-sEpCsXfCQhHg";

  const onUpdateHandler = async () => {

    const body = {
      userId,
      userPassword,
      userPasswordCheck,
      userName,
      userEmail,
      userPhone,
      userAddress,
      userAddressDetail,
      userKidBirth
    }

    axios
      .post("http://localhost:4080/api/user/userUpdate", body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data;
        const result = data.result;
        console.log(result);
        if (!result) alert(data.message);
        else {
          setUserId(data.data.userId);
          setUserPassword(data.data.userPassword);
          setUserPasswordCheck(data.data.userPassword);
          setUserName(data.data.userName);
          setUserEmail(data.data.userEmail);
          setUserPhone(data.data.userPhone);
          setUserAddress(data.data.userAddress);
          setUserAddressDetail(data.data.userAddressDetail);
          setUserKidBirth(data.data.userKidBirth);
        }
      })
      .catch((error) => {
        console.log(error)
        alert(error.message);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:4080/api/user/`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      const data = response.data;
      const result = data.result;
      console.log(result);
      if (!result) alert(data.message)
      else {
        setUserId(data.data.userId);
        setUserPassword(data.data.userPassword);
        setUserPasswordCheck(data.data.userPassword);
        setUserName(data.data.userName);
        setUserEmail(data.data.userEmail);
        setUserPhone(data.data.userPhone);
        setUserAddress(data.data.userAddress);
        setUserAddressDetail(data.data.userAddressDetail);
        setUserKidBirth(data.data.userKidBirth);
      }
    })
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Card sx={{ minWidth: 275, maxWidth: "40vw" }}>
        <CardContent>
          <TextField
            fullWidth
            label=""
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="email"
            variant="standard"
          />
          {/* <TextField
            fullWidth
            label="비밀번호"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            variant="standard"
          />
          <TextField
            fullWidth
            label="비밀번호 체크"
            type="password"
            value={userPasswordCheck}
            onChange={(e) => setUserPasswordCheck(e.target.value)}
            variant="standard"
          /> */}
          <TextField
            fullWidth
            label="이름"
            type="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="standard"
          />
          <TextField
            fullWidth
            label="전화번호"
            type="phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            variant="standard"
          />
          <TextField
            fullWidth
            label="이메일"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            variant="standard"
          />
          <TextField
            fullWidth
            label="주소"
            type="address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            variant="standard"
          />
          <TextField
            fullWidth
            label="상세주소"
            type="address"
            value={userAddressDetail}
            onChange={(e) => setUserAddressDetail(e.target.value)}
            variant="standard"
          />
          <TextField
            fullWidth
            label="자녀 생년월일"
            type="kidBirth"
            value={userKidBirth}
            onChange={(e) => setUserKidBirth(e.target.value)}
            variant="standard"
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => onUpdateHandler()} variant="contained">
            정보 수정
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
