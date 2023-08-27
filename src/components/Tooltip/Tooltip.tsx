import { FC } from "react"
import dayjs from "dayjs"

import s from "./Tooltip.module.scss"

interface TooltipProps {
    date: string | Date,
    contributionCount: number
}

const Tooltip: FC<TooltipProps> = ({ date, contributionCount }) => {
    dayjs.locale("ru")
    return (
        <div className={s.tooltip}>
            <div className={s.tooltip__content}>
                <h3 className={s.contributions__count}>
                    {`${contributionCount ? contributionCount : ""} ${contributionCount ? (contributionCount > 1 ? "contributions" : "contribution") : "No contributions"}`}
                </h3>
                <h3 className={s.contributions__date}>{dayjs(date).format('dddd, MMMM D, YYYY')}</h3>
            </div>
        </div>
    )
}

export default Tooltip
