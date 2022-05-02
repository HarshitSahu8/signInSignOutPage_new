import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

const InputField = ({
    disabled = false,
    name,
    autoFocus = false,
    defaultValue = "",
    placeholder = "",
    required = true,
    label,
    type = "text",
    control,
    ...rest
}: any) => {
    return (
        <Controller
            render={({ field }) => (
                <TextField
                    style={{
                        margin: "8px 0px",
                    }}
                    minRows={rest?.minRows}
                    multiline={rest?.multiline}
                    label={label}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    fullWidth
                    autoFocus={autoFocus}
                    id={name}
                    type={type}
                    value={field.value}
                    onChange={field.onChange}
                />
            )}
            defaultValue={defaultValue}
            name={name}
            control={control}
        />
    );
};

export default InputField;
