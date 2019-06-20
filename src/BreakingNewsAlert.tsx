import React from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle, css } from "styled-components";

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

export default function BreakingNewsAlert(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle} className={`fd-breaking-news-alert${props.className ? ` ${props.className}` : ''}`}>
                <TypoGraphy textStyle="card-h" className="fd-breaking-news-alert-h"><h3>{props.title ? props.title : 'Breaking nieuws alert'}</h3></TypoGraphy>
                <div className="content">
                    <span className="description">{props.description ? props.description : 'Ontvang een e-mail alert bij belangrijk FD Nieuws'}</span>
                    <label className="switch breaking-alert" data-addurl={props.subscribeUrl ? props.subscribeUrl : "/add-breaking-alert"} data-deleteurl={props.unsubscribeUrl ? props.unsubscribeUrl : "/delete-breaking-alert"}>
                        <input type="checkbox" className="switch-input" onChange={props.onChange} checked={props.checked}/>
                        <span className="switch-label"><i className="icon-check"/><i className="icon-times"/></span>
                        <span className="switch-handle"/>
                    </label>
                </div>
            </Card>
        </>
    );
}

const styles = css`
.fd-breaking-news-alert {
    .content,
    .card-h.fd-breaking-news-alert-h {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    .content {
        display: flex;
        align-items: center;
        border-top: 1px solid rgba(0,0,0,0.1);
        font-family: 'ProximaNovaRegular', sans-serif;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }

        .description {
            flex: 1 1 auto;
        }

        .switch {
            position: relative;
            display: inline-block;
            vertical-align: top;
            min-width: 76px;
            width: 76px;
            height: 40px;
            margin: 0 auto;
            cursor: pointer;
        }
        .switch-input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }
        .switch-label {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: inherit;
            font-size: 10px;
            text-transform: uppercase;
            background: #677381;
            border-radius: 28px;
            transition: opacity .15s ease-out, background .15s ease-out;
            .icon-check, .icon-times {
                color: #ffffff;
                font-size: 1.5rem;
                transition: visibility .1s ease-out;
            }
            .icon-check {
                visibility: hidden;
                margin-left: .5rem;
            }
            .icon-times {
                margin-right: .8rem;
            }
        }
        .switch-input:checked ~ .switch-label {
            background: #49a4a2;
            .icon-check {
                visibility: visible;
            }
            .icon-times {
                visibility: hidden;
            }
        }
        .switch-handle {
            position: absolute;
            top: 4px;
            left: 4px;
            width: 32px;
            height: 32px;
            background: #ffeadb;
            border-radius: 16px;
            transition: left .15s ease-out;
        }
        .switch-input:checked ~ .switch-handle {
            left: 40px;
        }
    }

    &.persoonlijk {
        .switch-handle {
            background: #ffffff;
        }
    }
}
`;

export const BreakingNewsAlertStyle = css`
${getAllCardStyles()}
${getAllTextStyles(['card-h'])}
${styles}
`;

const GlobalStyle = createGlobalStyle`${BreakingNewsAlertStyle}`;
