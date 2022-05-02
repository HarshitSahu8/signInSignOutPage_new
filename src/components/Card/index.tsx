import { Box } from "@mui/system";
import React from "react";

const Card = ({ children }: any) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    m: "20px",
                    p: "10px",
                    width: "330px",
                    borderRadius: "5px",
                    boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Card;
