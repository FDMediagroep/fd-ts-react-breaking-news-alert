import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
export interface Props {
    cardStyle: CardTypes;
    checked?: boolean;
    className?: string;
    description?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    subscribeUrl?: string;
    title?: string;
    unsubscribeUrl?: string;
}
export default class BreakingNewsAlert extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare const BreakingNewsAlertStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
