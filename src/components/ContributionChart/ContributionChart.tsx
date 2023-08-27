import { FC, useEffect, useState } from "react"
import dayjs from "dayjs"
import Contribution from "../Contribution/Contribution"
import s from "./ContributionChart.module.scss"
import { getContributions } from "../../api/api"

const ContributionChart: FC = () => {
    const [contributionApiData, setcontributionApiData] = useState(null)
    const [contributionsList, setContributionsList] = useState<
        (string | number)[][]
    >([])

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
        ;(async function getData() {
            const response = await getContributions()
            setcontributionApiData(response.data)
            console.log(response.data)
        })()
    }, [])

    // console.log(generateContribution('May 31, 2022', 13, 0))

    useEffect(() => {
        if (contributionApiData) {
            const newArr = []
            for (let i = 0; i < 357; i++) {
                const contributionListElement = generateContribution(i)
                newArr.push(contributionListElement)
            }
            setContributionsList(newArr)
        }
    }, [contributionApiData])

    return (
        <div className={s.contribution__chart}>
            <div className={s.contributions__grid}>
                {contributionsList.length && contributionsList.reverse().map((contribution: (string | number)[])=>{return <Contribution date={contribution[0].toString()} contributionCount={Number(contribution[1])}/>})}
            </div>
        </div>
    )
}

export default ContributionChart
