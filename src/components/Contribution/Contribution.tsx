import { FC } from 'react';
import s from "./Contribution.module.scss"

interface ContributionProps {
    date: string | Date,
    contributionCount: number,
}

const Contribution: FC<ContributionProps> = ({date, contributionCount}) => {
    return (
        <div className={`${s.contribution} ${contributionCount < 1 ? s.contribution__none : (contributionCount >= 1 && contributionCount <= 9) ? s.contribution__low : (contributionCount >= 10 && contributionCount <= 19) ? s.contribution__normal : (contributionCount >= 20 && contributionCount <= 29) ? s.contribution__high : (contributionCount >= 30) ? s.contribution__veryhigh : ""}`}>
            
        </div>
    );
};

export default Contribution;