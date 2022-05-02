import Card from "@components/Card";
import { LogIn } from "@components/Home";
import Register from "@components/Register";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
const Home = () => {
    const {
        handleSubmit,
        watch,
        formState: { errors },
        control,
    } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Box>
            <Card>
                <LogIn />
                {/* <Register /> */}
            </Card>
        </Box>
    );
};

export default Home;
