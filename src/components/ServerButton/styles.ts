import styled from 'styled-components';

import { Props } from '.'

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;
    position: relative;

    > img {
        height: 24px;
        width: 24px;
    }

    &::after {
        background: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${props => props.mentions && props.mentions}';
        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }

    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background: var(--white);
        border-radius: 50%;

        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'};
    }

    &.active, &:hover {
        border-radius: 16px;
        background: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`;

