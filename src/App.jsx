import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import "./styles/App.scss";
import MultTable from "./pages/multTable";

// Can replace <a> with <Link> to go to url without reloading page. If used, href= must be replaced with to=
// This makes changes faster as well

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Can replace index with --- path="/" ---. This will make it function as default page as well (base url or base url + /) */}
      <Routes>
        <Route index element={<MultTable />} />
      </Routes>
    </>
  );
}

export default App;
