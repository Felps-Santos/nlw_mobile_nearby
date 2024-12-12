import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import { s } from "./styles";
import { colors, fontFamily } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
    isLoading? :boolean
}

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={s.container} activeOpacity={0.8} disabled={isLoading} {...rest}>
            {isLoading ? (
                    <ActivityIndicator size="small" color={colors.gray[100]}/>
                ) : (
                    children
                )}
        </TouchableOpacity>
    )
}
function Title({ children }: TextProps) {
    return <Text style={s.title}>{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
    return <Icon size={24} color={colors.gray[100]}/>
}

Button.Title = Title
Button.Icon = Icon

export { Button }