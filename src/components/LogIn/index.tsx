import Btn from "@components/Button";
import InputField from "@components/InputField";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import styles from "./styles";
import React, { useState } from "react";
import { useAppSelector } from "@redux/store";
import Link from "next/link";
import { useRouter } from "next/router";

const LogIn = () => {
    const Router = useRouter();
    const persistedData = useAppSelector((state: any) => state.formData);
    console.log(persistedData);
    const [errorMessages, setErrorMessages] = useState({
        name: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };
    const { control } = useForm();
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        const inputData = {
            username: `${uname.value}`,
            password: `${pass.value}`,
        };

        if (inputData) {
            if (persistedData.pass !== inputData.password) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name: unknown) =>
        name === errorMessages.name && <div>{errorMessages.message}</div>;
    const renderForm = (
        <form onSubmit={handleSubmit}>
            <Box sx={styles.form}>
                <InputField control={control} name="uname" label="userName" />
                {renderErrorMessage("uname")}

                <InputField
                    control={control}
                    name="pass"
                    label="password"
                    type="password"
                />
                {renderErrorMessage("pass")}

                <Btn label="Log In" type="submit" />
                <Link href="/register">
                    <Btn label="Register" />
                </Link>
            </Box>
        </form>
    );
    return <>{isSubmitted ? Router.push("/mainPage") : renderForm}</>;
};

export default LogIn;
