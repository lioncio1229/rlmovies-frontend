import Snackbar from "./Snackbar"
import { useSelector, useDispatch } from "react-redux"
import { selectSnackbars } from "../selectors"
import { useEffect } from "react";
import { popSnackbar, removeSnackbarById } from "../slices";

import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { createRef } from "react";
import { Snackbar as SnackbarShape } from "../types";

const SnackbarManager = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 1rem;

    & .item-exit{
        transform: translateX(-100%);
        opacity: 0;
        transition: all 0.5s;
    }

    & .item-processing-exit-active{
        visibility: hidden;
        position: fixed;
    }
`;

export default function () : JSX.Element
{
    const dispatch = useDispatch();
    const snackbars = useSelector(selectSnackbars);

    useEffect(() => {
        const interval = setInterval(() => dispatch(popSnackbar()), 3000);

        if(snackbars.length <= 0) clearInterval(interval);

        return () => {
            clearInterval(interval);
        }
    }, [snackbars]);


    const handleClose = (id: string | undefined) => {
        id && dispatch(removeSnackbarById(id));
    }

    return (
        <SnackbarManager>
            <TransitionGroup>
                {
                    snackbars && snackbars.map((snackbar : SnackbarShape) => {
                        const ref = createRef<HTMLDivElement>();

                        return (
                        <CSSTransition key={snackbar.id} timeout={700} classNames={snackbar.status !== 'processing' ? 'item' : 'item-processing'} nodeRef={ref}>
                            <Snackbar key={snackbar.id} ref={ref} id={snackbar.id} status={snackbar.status} message={snackbar.message} onClose={handleClose}/>
                        </CSSTransition>)
                })
                }
            </TransitionGroup>
        </SnackbarManager>
    )
}