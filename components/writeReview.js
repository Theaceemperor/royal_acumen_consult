
import React from "react";
import { Button, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from 'yup';
import { ReviewAlert } from "./alert";

const validationRules = yup.object().shape({
    name:yup.string().required('Please enter your name!'),
    review:yup.string().required('Please state your review/feedback!'),
})

export default function WriteReviews() {
    const [value, setValue] = React.useState(3);
    const [ openReviewDialog,setOpenReviewDialog ] = React.useState(false);

    const handleReviewSubmit = () => {
        setOpenReviewDialog(true);
        setTimeout(() => {
            setOpenReviewDialog(false);
        }, 10000);
    };

    const handleCloseReviewDialog = () => {
        setOpenReviewDialog(false);
    }

    const { handleBlur,handleChange,handleSubmit,errors,values,touched } = useFormik({
        initialValues: { name: '', review:'' },
        onSubmit: values => {
            handleReviewSubmit();
            values.name = '';
            values.review = '';
            setValue(3);
        },
        validationSchema:validationRules
    });
        
    return (
        <section>
            <div id="write-review" className="p-2 my-5 flex flex-col gap-2 items-center justify-center shadow-md shadow-[tan] w-[fit-content] mx-2 rounded-md text-[tan]">
                <h3 className="font-bold text-lg"><Link href={'#write-review'}>Write a review</Link></h3>
                <form className="flex flex-col gap-5 rounded-lg items-center justify-center p-5 w-[fit-content]" onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row md:flex-row w-full gap-5">
                        <TextField 
                        id="name"
                        variant="filled"
                        label={"Your name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        color="secondary"
                        style={{backgroundColor:'tan',borderRadius:'5px'}}
                        />
                         
                        {errors.name && touched.name
                        ? <span className="text-[tan]">{errors.name}</span> : null}
                      
                        <TextField 
                        id="review"
                        variant="filled"
                        label={"Your review"}
                        multiline={true}
                        value={values.review}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        color="secondary"
                        style={{backgroundColor:'tan',borderRadius:'5px'}}
                        /> 

                        {errors.review && touched.review
                            ? <span className="text-[tan]">{errors.review}</span> : null}
                          
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <strong className="text-center">Your rating</strong>
                        <Rating
                            style={{
                                color:'#252324',backgroundColor:'tan',opacity:0.9,
                            }}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            className="rounded-md py-1 px-2"
                        />
                    </div>
                    <Button
                    type="submit" 
                    style={{
                        color:'#26282A', background:'tan'
                    }}>Post</Button>
                </form>
            </div>
            {
                openReviewDialog
                ?
                <ReviewAlert close={handleCloseReviewDialog} />
                :
                null
            }
        </section>
    )
}