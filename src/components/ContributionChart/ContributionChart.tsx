import { FC, useEffect, useState } from "react"
import dayjs from "dayjs"
import Contribution from "../Contribution/Contribution"
import s from "./ContributionChart.module.scss"
import { getContributions } from "../../api/api"

const ContributionChart: FC = () => {
    const [contributionApiData, setcontributionApiData] = useState(null)
    const [contributionsList, setContributionsList] = useState<(string | number)[][]>([])
    const [monthList, setMonthList] = useState<string[]>([]) 
    const dowList = ['Пн', 'Ср', 'Пт'] // dow = день недели (day of the week)

    const generateContribution = (index: number) => {
        const newDate = dayjs(new Date())
            .subtract(index, "day")
            .format("YYYY-MM-DD")
        if (contributionApiData && contributionApiData[newDate]) {
            return [newDate, contributionApiData[newDate]]
        }
        const newContributionCount = 0
        const newContribution = [newDate, newContributionCount]
        return newContribution
    }

    useEffect(() => {
        (async function getData() {
            const response = await getContributions()
            setcontributionApiData(response.data)
            console.log(response.data)
        })()
    }, [])

    useEffect(()=> {
        let monthsArr: string[] = []
        for (let i = 0; i < 12; i++) {
            monthsArr = [dayjs(new Date()).subtract(i, "month").format("MMM"), ...monthsArr]
        }
        setMonthList(monthsArr)
    },[])

    useEffect(() => {
        if (contributionApiData) {
            let newArr: (string|number)[][] = []
            for (let i = 0; i < 357; i++) {
                const contributionListElement = generateContribution(i)
                newArr.push(contributionListElement)
            }
            setContributionsList(newArr)
        }
    }, [contributionApiData])


    return (
        <div className={s.contribution__chart}>
            <div className={s.chart__months}>
                {monthList.length ? monthList.map((month: string) => {return <h4 className={s.chart__month}>{month}</h4>}) : ""}
            </div>
                <div className={s.contributions__grid}>
                    {contributionsList.length ? contributionsList.reverse().map((contribution: (string | number)[])=>{return <Contribution key={contribution[0].toString()} type={"default"} date={contribution[0].toString()} contributionCount={Number(contribution[1])}/>}) : null}
                    <div className={s.chart__dows}> 
                        {dowList.length ? dowList.map((dow: string)=>{return <h4 className={s.chart__dow}>{dow}</h4>}) : ""}
                    </div> 
                </div>

            <div className={s.chart__color_info}>
                <span className={s.info__more_less}>Меньше</span>
                <div className={s.info__container}>
                    <Contribution type="descriptive" date={new Date()} contributionCount={0}/>
                    <Contribution type="descriptive" date={new Date()} contributionCount={1}/>
                    <Contribution type="descriptive" date={new Date()} contributionCount={11}/>
                    <Contribution type="descriptive" date={new Date()} contributionCount={21}/>
                    <Contribution type="descriptive" date={new Date()} contributionCount={30}/>
                </div>
                <span className={s.info__more_less}>Больше</span>
            </div>
        </div>
    )
}

export default ContributionChart
