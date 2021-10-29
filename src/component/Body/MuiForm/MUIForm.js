import React from 'react';

import { useForm, Controller } from "react-hook-form";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';


const MUIForm = props => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <Container maxWidth='xl' sx={{ my:10}}>
            <Grid container >
                <Grid item xs={12} sm={12} md={10} lg={8} sx={{ m:'auto' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            {...register("name", { required: "First Name is required." })}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}

                        />


                        <FormControl
                            error={Boolean(errors.rating)}
                            style={{ marginTop: "17px" }}
                           
                            fullWidth
                        >
                            <InputLabel>Rating</InputLabel>
                            <Controller

                                render={({ field }) => (
                                    <Select {...field}>
                                        <MenuItem value='1'>One</MenuItem>
                                        <MenuItem value='2'>Two</MenuItem>
                                        <MenuItem value='3'>Three</MenuItem>
                                        <MenuItem value='4'>Four</MenuItem>
                                        <MenuItem value='5'>Five</MenuItem>
                                    </Select>
                                )}

                                name="rating"
                                control={control}
                                defaultValue=''
                                rules={{
                                    required: "Rating is required !"
                                }}
                            />
                            <FormHelperText style={{ color: '#d32f2f' }}>{errors.rating?.message}</FormHelperText>
                        </FormControl>


                        <FormControl
                            error={Boolean(errors.notify)}
                            style={{ display: "block", marginTop: "17px" }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...register("notify", { required: "You have to Enable Notification" })}
                                    />
                                }
                                label="Turn on to send an offer !"
                            />
                            <FormHelperText style={{ color: '#d32f2f' }}>{errors.notify?.message}</FormHelperText>
                        </FormControl>


                        <TextField
                            fullWidth
                            label="comment"
                            variant="outlined"
                            {...register("comment", { required: "Comment is required" })}
                            error={Boolean(errors.comment)}
                            helperText={errors.comment?.message}
                        />

                        <Button
                            type='submit'
                            variant="outlined"
                            color="primary">
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </Container>
    )
}

export default MUIForm
