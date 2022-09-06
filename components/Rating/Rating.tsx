import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Rating = forwardRef(({isEditable = false, rating, setRating, ...props}: RatingProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
    const [ratingArray , setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(()=> {
        constructRating(rating);
    }, [rating]);
    
    const constructRating = (currentRaiting: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < currentRaiting,
                    [styles.editable]: isEditable
                })}
                    onMouseEnter = {() => changeDisplay(i+1)}
                    onMouseLeave = {() => changeDisplay(rating)}
                    onClick = {() => changeRating(i+1)}>
                    <StarIcon 
                        tabIndex = {isEditable ? 0 : -1}
                        onKeyDown = {(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i+1 , e)}
                    />
                </span>
                
            );
        });
        setRatingArray(updatedArray);
    };


    const changeDisplay = (i:number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    };

    const changeRating = (i:number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };
    
    const handleSpace = (i:number, event: KeyboardEvent<SVGElement>) => {
        if(event.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };


    return(
        <div {...props} ref={ref}>
            {ratingArray.map((r , i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
});