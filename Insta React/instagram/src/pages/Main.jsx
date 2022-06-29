import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/header";
import { Main } from "../components/Feed/main";
import { Direct } from "../components/Direct/direct";
import { Explorer } from "../components/Explorer/explorer";
import { Profile } from "../components/Profile/profile";
import { Stories } from "../components/Stories/stories";

export function Feed() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Main></Main>}></Route>
        <Route path="direct" element={<Direct></Direct>}></Route>
        <Route path="explorer" element={<Explorer></Explorer>}></Route>
        <Route path="my-profile" element={<Profile></Profile>}></Route>
        <Route path="stories" element={<Stories></Stories>}></Route>
      </Routes>
    </Router>
  );
}
