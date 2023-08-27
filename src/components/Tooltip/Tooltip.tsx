import { FC } from "react"
import dayjs from "dayjs"

import s from "./Tooltip.module.scss"

interface TooltipProps {
    date?: string | Date,
    contributionCount?: string,
    visibility: boolean,
    className?: string,
    description?: string,
}

const Tooltip: FC<TooltipProps> = ({ date, contributionCount, visibility, className, description }) => {
    dayjs.locale("ru")
    return (
        <div className={`${s.tooltip} ${visibility ? s.tooltip__visible : s.tooltip__hidden} ${className && className}`}>
            <div className={s.tooltip__content}>
                {description ? <h3 className={`${s.contributions__count} ${s.tooltip__description}`}>{description}</h3>: ""}
                {contributionCount ? <h3 className={s.contributions__count}>{contributionCount}</h3> : ""}
                {date && dayjs(date).isValid() ? <h3 className={s.contributions__date}>{dayjs(date).format('dddd, MMMM D, YYYY')}</h3> : ""}
            </div>
        </div>
    )
}

export default Tooltip
