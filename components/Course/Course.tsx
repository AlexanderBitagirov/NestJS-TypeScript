import { CourseProps } from "./Course.props";
import styles from "./Course.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { delOfNum, priceRu } from "../../helpers/helpers";
import { Devider } from "../Devider/Devider";

export const Course = ({course, className, ...props}: CourseProps):JSX.Element => {
    return(
        <Card className={styles.course}>
           <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN + course.image} alt={course.title}/>
           </div>
           <div className={styles.title}>
                {course.title}
           </div>
           <div className={styles.price}>
                {priceRu(course.price)}
                {course.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(course.price - course.oldPrice)}</Tag>}
           </div> 
           <div className={styles.credit}>
                {priceRu(course.credit)}/
                <span className={styles.month}>мес.</span>
           </div>
           <div className={styles.rating}>
                <Rating rating={course.reviewAvg ?? course.initialRating}/>
           </div>
           <div className={styles.tags}>
            {course.categories.map(c =><Tag key={c} className={styles.category} color="ghost">{c}</Tag>)}
           </div>
           <div className={styles.priceTitle}>
                Цена
           </div>
           <div className={styles.creditTitle}>
                Кредит
           </div>
           <div className={styles.rateTitle}>
               {course.reviewCount} {delOfNum(course.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
           </div>
           <div className={styles.description}>
                {course.description} 
           </div>
           <Devider className={styles.hr}/>
           <div className={styles.feature}>
                {course.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}
           </div>
           <div className={styles.advBlock}>
                {course.advantages && <div className={styles.advantages}>
                   <div className={styles.advTitle}>Приемущества</div> 
                    {course.advantages}
                </div>}
                {course.disadvantages && <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div> 
                    {course.disadvantages}
                </div>}
           </div>
           <Devider className={styles.hr}/>
                <div className={styles.actions}>
                    <Button appearance="primary">Узнать подробнее</Button>
                    <Button appearance="ghost" arrow="right" className={styles.reviewButton}>Читать отзывы</Button>
            </div>
        </Card>
    );
};