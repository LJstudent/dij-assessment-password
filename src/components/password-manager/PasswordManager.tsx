import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface IFormInputs {
    title: string;
    password: string;
    select: string;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    password: Yup.string().required("Password is required"),
    select: Yup.string().required("Select an option"),
});

export default function PasswordManager() {
    const initialValues: IFormInputs = {
        title: "",
        password: "",
        select: "",
    };

    const handleSubmit = (values: IFormInputs) => {
        console.log(values);
    };
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            label="Title"
                            name="title"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            error={touched.title && Boolean(errors.title)}
                            helperText={touched.title && errors.title}
                        />

                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />

                        <Field
                            as={TextField}
                            select
                            label="Select"
                            name="select"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            error={touched.select && Boolean(errors.select)}
                            helperText={touched.select && errors.select}
                        >
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Field>

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}