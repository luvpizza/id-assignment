import { FC, useState } from 'react';
import s from "./Contribution.module.scss"
import Tooltip from '../Tooltip/Tooltip';

interface ContributionProps {
    date: string | Date,
    contributionCount: number,
}

const Contribution: FC<ContributionProps> = ({date, contributionCount}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div
            onMouseOver={()=>setShowTooltip(true)}
            onMouseLeave={()=>setShowTooltip(false)}
            className={`${s.contribution} ${
                contributionCount < 1
                    ? s.contribution__none
                    : contributionCount >= 1 && contributionCount <= 9
                    ? s.contribution__low
                    : contributionCount >= 10 && contributionCount <= 19
                    ? s.contribution__normal
                    : contributionCount >= 20 && contributionCount <= 29
                    ? s.contribution__high
                    : contributionCount >= 30
                    ? s.contribution__veryhigh
                    : ""
            }`}
        >
            <Tooltip
                visibility={showTooltip}
                className={s.contribution__tooltip}
                date={date}
                contributionCount={contributionCount}
            />
        </div>
    )
};

export default Contribution;