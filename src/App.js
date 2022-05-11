import React, { useState } from "react";
import UserCard from "./Components/UserCard/UserCard";
import TimeCards from "./Components/TimeCards/TimeCards";
import FilterCard from "./Components/FilterCard/FilterCard";
import DarkModeSwitch from "./Components/DarkModeSwitch/DarkModeSwitch";
import Style from "./Layout.module.css";

const App = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState("daily");
  const [sidebarState, setSidebarState] = useState("closed");

  const filterOptions = ["daily", "weekly", "monthly"];

  return (
    <main>
      <header className={Style.header}>
        <DarkModeSwitch />
      </header>
      <aside className={`${Style.sidebar} ${sidebarState}`}>
        <UserCard
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
        />
        <FilterCard
          filterOptions={filterOptions}
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
        />
      </aside>
      <TimeCards selectedFilterOption={selectedFilterOption} />
    </main>
  );
};

export default App;
