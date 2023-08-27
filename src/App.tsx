import dayjs from "dayjs"
import Contribution from "./components/Contribution/Contribution"
import s from "./App.module.scss"

require("dayjs/locale/ru")
function App() {
    dayjs.locale("ru")
    return (
        <div className="App">
            <section className={s.main}>
                <Contribution date={"2023-05-19"} contributionCount={29} />
                <Contribution date={"2023-05-19"} contributionCount={29} />
                <Contribution date={"2010-05-69"} contributionCount={12} />
                <Contribution date={"2023-05-19"} contributionCount={0} />
                <Contribution date={"2022-05-19"} contributionCount={29} />
                <Contribution date={"2023-06-19"} contributionCount={2} />
            </section>
        </div>
    )
}

export default App
