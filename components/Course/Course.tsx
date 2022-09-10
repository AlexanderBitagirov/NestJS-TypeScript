import { CourseProps } from "./Course.props";
import styles from "./Course.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { delOfNum, priceRu } from "../../helpers/helpers";
import { Devider } from "../Devider/Devider";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';

export const Course = motion(forwardRef(({ course, className, ...props }: CourseProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
     
     const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
     const reviewRef = useRef<HTMLDivElement>(null);

     const variants = {
          visible: {
               opacity: 1,
               height: 'auto'
          },
          hidden: {
               opacity: 0,
               height: 0
          }
     };


     const scrollToRevire = () => {
          setIsReviewOpened(true);
          
          reviewRef.current?.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
     });
   }; 

     return(
     <div className={className} {...props} ref={ref}>
        <Card className={styles.course}>
           <div className={styles.logo}>
                <Image src={process.env.NEXT_PUBLIC_DOMAIN + course.image}
                        alt={course.title}
                        width={70}
                        height={70}/>
           </div>
           <div className={styles.title}>
                {course.title}
           </div>
           <div className={styles.price}>
                {priceRu(course.price)}
                {course.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(course.price - course.oldPrice)}</Tag>}
           </div> 
           <div className={styles.credit}>
                {priceRu(course.credit)}/<span className={styles.month}>мес</span>
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
              <a href='#href' onClick={scrollToRevire}>
               {course.reviewCount} {delOfNum(course.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
              </a>
           </div>
           <div className={styles.description}>
                {course.description} 
           </div>
           <Devider className={cn(styles.hr, styles.hr2)}/>
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
                    <Button appearance="ghost" 
                            arrow={isReviewOpened ?"right" : "down"} 
                            className={styles.reviewButton}
                            onClick={()=> setIsReviewOpened(!isReviewOpened)}>Читать отзывы</Button>
            </div>
        </Card>
        <motion.div animate={isReviewOpened ? "visible" : "hidden"} 
                    variants={variants} 
                    initial="hidden">
          <Card color='blue' 
               className={styles.review}
               ref={reviewRef}>
               {course.reviews.map(r => (
                    <div key={r._id}>
                    <Review review={r}/>
                    <Devider/>
                    </div> 
               ))}
               <ReviewForm courseId={course._id}/>
          </Card>
        </motion.div>
     </div>
    );
}));