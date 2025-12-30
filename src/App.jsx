import { useState } from "react";
import ModelForm from "./components/ModelForm";
import Navbar from "./components/Navbar";
import TableList from "./components/Tablelist";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelMode, setModelMode] = useState("Add");

  const handleOpen = (mode) => {
    setModelMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modelMode === "Add") {
      console.log("model mode Add");
    } else {
      console.log("model mode Edit");
    }
  };

  return (
    <div>
      <div className="">
        <Navbar onOpen={() => handleOpen("Add")} />
        <TableList handleOpen={handleOpen} />
        <ModelForm
          isOpen={isOpen}
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modelMode}
        />
      </div>
    </div>
  );
};
export default App;
