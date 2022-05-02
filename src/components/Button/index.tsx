import Button, { ButtonProps } from "@material-ui/core/Button";
import React from "react";

type BtnProps = ButtonProps & {
    label: string;
    onclick?: any;
};
const Btn = ({ label, onclick, type, ...rest }: BtnProps) => {
    return (
        <>
            <Button
                onClick={onclick}
                variant="contained"
                type={type}
                fullWidth
                {...rest}
            >
                {label}
            </Button>
        </>
    );
};

export default Btn;
