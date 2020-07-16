import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// later add explanation text for flags and styling

const flagsOptions = ["g", "i", "m", "s", "u", "y"];

function getFullName(flag: string): string {
    //returns the full name of a given flag shorthand
    switch (flag) {
        case "g":
            return "global";
        case "i":
            return "insensitive";
        case "m":
            return "multiline";
        case "s":
            return "single line";
        case "u":
            return "unicode";
        case "y":
            return "sticky";
        default:
            return "";
    }
}

function getFlagDisplay(flag: string): React.ReactPortal {
    let display: unknown;
    const fullName = getFullName(flag);
    if (flag === "y") {
        display = (
            <div>
                <Typography
                    component="span"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    {fullName.slice(0, fullName.length - 1)}
                </Typography>
                <Typography
                    component="span"
                    color="textSecondary"
                    variant="subtitle2"
                >
                    {flag}
                </Typography>
            </div>
        );
    } else {
        display = (
            <div>
                <Typography
                    component="span"
                    color="textSecondary"
                    variant="subtitle2"
                >
                    {flag}
                </Typography>
                <Typography
                    component="span"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    {fullName.slice(1)}
                </Typography>
            </div>
        );
    }
    return display as React.ReactPortal;
}

function RegexFlags(): JSX.Element {
    const [flags, setFlags] = useState<string[]>(["g", "i"]); //contains only the shorthand letters
    const handleChange = (e: React.ChangeEvent<{ value: unknown }>): void => {
        console.log(e.currentTarget.value);
        setFlags(e.target.value as string[]);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="regex-flags-label">Flags</InputLabel>
            <Select
                labelId="regex-flags-label"
                id="regex-flags-select"
                multiple
                value={flags}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected): React.ReactNode => (
                    <Typography color="secondary" variant="body1">
                        {(selected as string[]).join("")}
                    </Typography>
                )}
                disableUnderline
            >
                {flagsOptions.map((flag) => (
                    <MenuItem key={flag} value={flag}>
                        <Container>{getFlagDisplay(flag)}</Container>
                        <Checkbox checked={flags.includes(flag)} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default RegexFlags;
