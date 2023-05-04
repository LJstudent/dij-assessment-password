import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Data } from "../../model/data/Data";
import { IPasswordForm } from "../../model/interfaces/IPasswordForm";
import { addPasswordToManager } from "../../state/slices/PasswordManager.Slice";

interface PasswordFormValues {
    title: string,
    password: string,
    select: string
};

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    password: Yup.string().required("Password is required"),
    select: Yup.string().required("Select an option"),
});

export default function PasswordForm() {
    // API gives cors notification
    //const { data, error, isLoading } = useGetClientsQuery('');
    const dispatch = useDispatch();
    const initialValues: PasswordFormValues = {
        title: "",
        password: "",
        select: ""
    };

    const handleSubmit = (values: PasswordFormValues, { resetForm }: { resetForm: () => void }) => {
        const newPasswordForm: IPasswordForm = {
            title: values.title,
            password: values.password,
            select: {
                name: values.select,
                color: Data?.find(obj => obj.name === values.select)?.color || ''
            }
        };

        dispatch(addPasswordToManager(newPasswordForm));
        resetForm(); // Reset the form on submit
        alert("Password saved");
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Stack spacing={2}>
                <Typography variant="h6">Password form</Typography>
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
                                {Data.map((client, index) => (
                                    <MenuItem key={index} value={client.name}>
                                        {client.name}
                                    </MenuItem>
                                ))}
                                {/* {error ? (
                                <MenuItem value="">Oh no, there was an error</MenuItem>
                            ) : isLoading ? (
                                <MenuItem value="">Loading...</MenuItem>
                            ) : data ? (
                                data.map((client) => (
                                    <MenuItem key={client.name} value={client.name}>
                                        {client.name}
                                    </MenuItem>
                                ))
                            ) : null} */}
                            </Field>

                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Link style={{ alignSelf: "center" }} to={"password-manager"}>Password manager</Link>
            </Stack>
        </Box>
    );
};