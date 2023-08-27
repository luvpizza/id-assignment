import { FC, useState } from 'react';
import s from "./Contribution.module.scss"
import Tooltip from '../Tooltip/Tooltip';

interface ContributionProps {
    type: "default" | "descriptive",
    date: string | Date,
    contributionCount: number,
}

const Contribution: FC<ContributionProps> = ({type, date, contributionCount}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div
            onClick={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
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
            {type === "default" ? (
                <Tooltip
                    visibility={showTooltip}
                    className={s.contribution__tooltip}
                    date={date}
                    contributionCount={`${
                        contributionCount ? contributionCount : ""
                    } ${
                        contributionCount
                            ? contributionCount > 1
                                ? "contributions"
                                : "contribution"
                            : "No contributions"
                    }`}
                />
            ) : type === "descriptive" ? (
                <Tooltip
                    visibility={showTooltip}
                    className={`${s.contribution__tooltip} ${s.contribution__tooltip_descriptive}`}
                    description={`${
                        contributionCount < 1
                            ? "No contributions"
                            : contributionCount >= 1 && contributionCount <= 9
                            ? "1 - 9 contributions"
                            : contributionCount >= 10 && contributionCount <= 19
                            ? "10 - 19 contributions"
                            : contributionCount >= 20 && contributionCount <= 29
                            ? "20 - 29 contributions"
                            : contributionCount >= 30
                            ? "30+ contributions"
                            : ""
                    }`}
                />
            ) : (
                ""
            )}
        </div>
    )
};

export default Contribution;