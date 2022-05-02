import InputField from "@components/InputField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Btn from "@components/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@redux/store";
import { username, pass } from "@redux/actions";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
    const Router = useRouter();
    const dispatch = useDispatch();
    const persistedData = useAppSelector((state: any) => state.formData);
    const { control } = useForm();
    const handleSubmit = (event: { preventDefault: () => void }) => {
        const { userName, email, password } = document.forms[0];
        console.log(userName.value, email.value, password.value);
        dispatch(username(userName.value));
        dispatch(pass(password.value));
        event.preventDefault();
        setValid(true);
    };
    const [isValid, setValid] = useState(false);
    if (isValid) {
        Router.push("/");
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <InputField
                    control={control}
                    name="userName"
                    label="User Name"
                />
                <InputField
                    control={control}
                    name="email"
                    label="Email"
                    type="email"
                />
                <InputField
                    control={control}
                    name="password"
                    label="Password"
                    type="password"
                />
                <Btn label="Register" type="submit" />
            </form>
        </Box>
    );
};

export default Register;
