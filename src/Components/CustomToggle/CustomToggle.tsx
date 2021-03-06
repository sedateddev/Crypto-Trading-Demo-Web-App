import React, {useState} from 'react';
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite/no-important';

// THEME IMPORT
import * as theme from '../../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../../Utils/globalStyle.css';

// PROP TYPE DEF
interface Props {
    selectedIndex: number;
    data: toggle[] | null;
    className?: string;
    containerStyle?: StyleDeclarationValue;
    contentContainterStyle?: StyleDeclarationValue;
    selectedContainerStyle?: StyleDeclarationValue;
    selectedLabelStyle?: StyleDeclarationValue;
    nonSelectedContainerStyle?: StyleDeclarationValue;
    nonSelectedLabelStyle?: StyleDeclarationValue;
}

// TYPE DEF
type toggle = {
    label: string;
    className?: {
        container?: string;
        label?: string;
    };
    style?: {
        container?: StyleDeclarationValue;
        label?: StyleDeclarationValue;
    };
};

// COMPONENTS
const CustomToggle: React.FC<Props> = ({
    selectedIndex,
    data,
    className,
    containerStyle,
    contentContainterStyle,
    selectedContainerStyle,
    selectedLabelStyle,
    nonSelectedContainerStyle,
    nonSelectedLabelStyle,
}): JSX.Element => {
    // STATE
    const [selected, setSelected] = useState<number>(selectedIndex);

    return (
        <div className={`${css(globalStyles.rowContainer, globalStyles.alignItemsCenter, containerStyle)} ${className}`}>
            {data &&
                data.map((item: toggle, index: number) => {
                    return (
                        <div
                            key={index.toString()}
                            className={`${css(
                                index === 0 ? styles.leftMostContainer : null,
                                index === data.length - 1 ? styles.rightMostContainer : null,
                                selected === index ? styles.selectedContainer : styles.nonSelectedContainer,
                                selected === index ? selectedContainerStyle : nonSelectedContainerStyle,
                                globalStyles.totalCenter,
                                globalStyles.hover,
                                contentContainterStyle,
                                item.style?.container,
                            )} ${item.className?.container}`}
                            onClick={() => setSelected(index)}>
                            <span
                                className={`${css(
                                    selected === index ? styles.selectedLabel : styles.nonSelectedLabel,
                                    selected === index ? selectedLabelStyle : nonSelectedLabelStyle,
                                    theme.fonts.robotoMed,
                                    item.style?.label,
                                )} ${item.className?.label}`}>
                                {item.label}
                            </span>
                        </div>
                    );
                })}
        </div>
    );
};

const styles = StyleSheet.create({
    leftMostContainer: {
        borderTopLeftRadius: '0.25rem',
        borderBottomLeftRadius: '0.25rem',
    },
    rightMostContainer: {
        borderTopRightRadius: '0.25rem',
        borderBottomRightRadius: '0.25rem',
    },
    nonSelectedContainer: {
        border: `1px ${theme.colors.ui.green} solid`,
        padding: '0.12rem 0.85rem',
    },
    nonSelectedLabel: {
        color: theme.colors.ui.green,
        fontSize: '13px',
    },
    selectedContainer: {
        backgroundColor: theme.colors.ui.green,
        padding: '0.18rem 0.85rem',
    },
    selectedLabel: {
        color: 'black',
        fontSize: '13px',
    },
});

export default CustomToggle;
