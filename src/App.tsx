import dayjs from "dayjs";
import Tooltip from "./components/Tooltip/Tooltip";
import Contribution from "./components/Contribution/Contribution";
require("dayjs/locale/ru");

function App() {
  dayjs.locale('ru')
  return (
      <div className="App">
        <Contribution date={"2023-05-19"} contributionCount={29}/>
      </div>
  )
}

export default App;
