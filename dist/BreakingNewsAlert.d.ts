import React from "react";
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
export default function BreakingNewsAlert(props: Props): JSX.Element;
export declare const BreakingNewsAlertStyle: import("styled-components").FlattenSimpleInterpolation;
