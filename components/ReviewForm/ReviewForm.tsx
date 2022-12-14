import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";


export const ReviewForm = ({courseId, className, ...props}: ReviewFormProps):JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const onSubmit: SubmitHandler<IReviewForm> = (formData) => {
        
        axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, courseId})
        .then(res => {
            if(res.data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        })
        .catch(err => {
            setError(err.message);
        });     
    };
   
    
    return(
    <form onSubmit={ handleSubmit(onSubmit) }>
        <div className={cn(styles.reviewForm, className, {
        })}
        {...props}>
            <Input 
                {...register("name", { required: { value: true, message: "Заполните имя" } })} 
                placeholder="Имя"
                error={errors.name}/>
            <Input 
                {...register("title", { required: { value: true, message: "Заполните заголовок" } })} 
                className={styles.title} 
                placeholder="Заголовок отзыва"
                error={errors.title}/>
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Controller control={control} 
                            name="rating" 
                            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
                            render={({ field })=>(
                    <Rating isEditable
                            ref={field.ref}    
                            rating={field.value} 
                            setRating={field.onChange}
                            error={errors.rating}/>)}/>
                </div>
            <Textarea 
                {...register("description", { required: { value: true, message: "Заполните описание" } })} 
                className={styles.description} 
                placeholder="Текст отзыва"
                error={errors.description}/>
            <div className={styles.submit}>
                <Button appearance="primary">Отправить</Button>
                <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        { isSuccess && <div className={cn(styles.success, styles.panel)}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>
                Спасибо, ваш отзыв будет опубликован после проверки.
            </div>
            <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
        </div> }
        { error && <div className={cn(styles.error, styles.panel)}>
                Что-то пошло не так, попробуйте обновить
            <CloseIcon className={styles.close} onClick={() => setError('')}/>
        </div> }
    </form>    
    );
};