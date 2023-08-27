import dayjs from "dayjs"
import s from "./App.module.scss"
import ContributionChart from "./components/ContributionChart/ContributionChart"

require("dayjs/locale/ru")
function App() {
    dayjs.locale("ru")
    return (
        <div className="App">
            <section className={s.main}>
                <ContributionChart/>
            </section>
        </div>
    )
}

export default App
