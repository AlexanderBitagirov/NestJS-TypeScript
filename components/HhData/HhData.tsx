import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg";
import { priceRu } from "../../helpers/helpers";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.hhData}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.count}>{count}</div>
      </Card>
      <Card className={styles.salaryData}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salary}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salary}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salary}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
