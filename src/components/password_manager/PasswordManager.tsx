import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../state/hooks";

export default function PasswordManager() {
    const dataPasswordManager = useAppSelector((state) => state.passwordManager);
    const [showPasswords, setShowPasswords] = React.useState<boolean[]>(dataPasswordManager.map(() => false));

    const handleClickShowPassword = (index: number) => {
        setShowPasswords((showPasswords) => {
            const newShowPasswords = [...showPasswords];
            newShowPasswords[index] = !newShowPasswords[index];
            return newShowPasswords;
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Stack spacing={2}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">password</TableCell>
                                <TableCell align="center">name client</TableCell>
                                <TableCell align="center">color</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataPasswordManager.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{data.title}</TableCell>
                                    <TableCell align="right">
                                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                            <OutlinedInput
                                                type={showPasswords[index] ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => handleClickShowPassword(index)}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPasswords[index] ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                value={data.password}
                                                readOnly
                                            />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="right">{data.select.name}</TableCell>
                                    <TableCell align="right">
                                        <CircleIcon sx={{ color: data.select.color }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Link style={{ alignSelf: "center" }} to={"/"}>Password form</Link>
            </Stack>
        </Box>
    );
};