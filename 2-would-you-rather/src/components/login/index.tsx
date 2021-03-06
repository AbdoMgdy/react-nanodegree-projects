import { Typography, Select, Button, Card } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth";

const { Option } = Select;
const { Title } = Typography;
const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const [loginList, setLoginList] = useState(Object.entries(users));
  useEffect(() => {
    if (loginList.length === 0) setLoginList(Object.entries(users));
  }, [loginList, users]);
  const loginUser = (user: string) => {
    dispatch(login(users[user]));
  };
  return (
    <div style={{ padding: "5rem" }}>
      <Card
        title="Welcome to Would you Rather ?"
        type="inner"
        style={{ margin: "0 auto", width: 500, textAlign: "center" }}
      >
        <img src="./images/animals.png" width="250" alt="none" />
        <Title level={3} style={{ marginTop: "1rem", color: "#1890ff" }}>
          Sign In
        </Title>
        <Select
          style={{ width: "100%" }}
          onChange={(user: string) => {
            loginUser(user);
          }}
        >
          {loginList.map((u: any) => (
            <Option key={u[1].id} value={u[1].id}>
              <img src={u[1].avatarURL} style={{ width: "25px" }} alt="" />{" "}
              {"  "}
              {u[1].name}
            </Option>
          ))}
        </Select>
        <Button type="primary" style={{ marginTop: "1rem", width: "100%" }}>
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Login;
