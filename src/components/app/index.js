import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";

import Headers from "../container-header";
import Characters from "../container-characters";
import Gender from "../container-filters";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [data, setData] = React.useState("");
  const [data1, setData1] = React.useState("");

  const getCharacters = (values) => {
    setData(values);
  };

  const getFilterCharacters = (values) => {
    setData1(values);
  };

  return (
    <div>
      <Layout
        style={{
          height: "100%",
          width: "100%",
          background: "#fff",
        }}
      >
        <Header
          style={{
            height: "100%",
            width: "100%",
            background: "#fff",
          }}
        >
          <Headers getHeaderSearch={getCharacters} />
        </Header>
        <Content
          style={{
            padding: "0 50px",
            background: "#fff",
          }}
        >
          <Layout
            style={{
              padding: "24px 0",
              background: "#fff",
            }}
          >
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              width={250}
              style={{
                height: "100%",
                width: "100%",
                background: "#fff",
              }}
            >
              <Gender getFilterSearch={getFilterCharacters} />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
                background: "#fff",
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Characters
                      getCharacters={data}
                      getFilterCharacters={data1}
                    />
                  }
                ></Route>
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center", background: "#fff" }}>
          <h3>Sefihuom ©2022 (slck-bsk)</h3>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
