import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { addSnackbar } from "../slices";

export default function () : JSX.Element
{
    const dispatch = useDispatch();
    return (
        <>
            <Button onClick={() => dispatch(addSnackbar({message: 'Success message', status: 'success'}))}>Success</Button>
            <Button onClick={() => dispatch(addSnackbar({message: 'Error message', status: 'error'}))}>Error</Button>
            <Button onClick={() => dispatch(addSnackbar({message: 'Processing message', status: 'processing'}))}>Loading</Button>
        </>
    )
}