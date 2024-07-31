import {clsx} from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps, TextProps } from "react-native";

type Variants = "primary" | "secondary"

type ButtonProps =
    TouchableOpacityProps & {
        variant?: Variants
        isLoading?: boolean
    }


function Button({ variant = "primary", isLoading, children, ...rest }: ButtonProps) {
    return <TouchableOpacity {...rest} className={clsx("w-full h-11 flex-row items-center justify-center rounded-lg gap-2", {
        "bg-lime-300": variant === "primary",
        "bg-zinc-800": variant === "secondary"

    })}>{children}</TouchableOpacity>
}

function Title({ children }: TextProps) {
    return <Text>{children}</Text>
}


Button.Title = Title

export { Button }