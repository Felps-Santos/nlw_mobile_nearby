import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        height: 232,
        marginBottom: -32,
        backgroundColor: colors.gray[200],
    },
    header: {
        padding: 24,
        paddingTop: 56,
    },
})