import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Raiting = ({isEditable = false, raiting, setRating, ...props}: RaitingProps):JSX.Element => {
    const [raitingArray , setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(()=> {
        constructRaiting(raiting);
    }, [raiting]);
    
    const constructRaiting = (currentRaiting: number) => {
        const updatedArray = raitingArray.map((r: JSX.Element, i:number) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i <currentRaiting,
                })}/>
            );
        });
        setRatingArray(updatedArray);
    };
    
    return(
        <div {...props}>
            {raitingArray.map((r , i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};