import {Route, Routes } from "@solidjs/router";
import {TodoList} from "./todo-list";

export const Routing =() => <Routes>
  <Route path="/todo" element={TodoList} />
  <Route path="/about" element={<div>This site was made with Solid</div>} />
</Routes>
