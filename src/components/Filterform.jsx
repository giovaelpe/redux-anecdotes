import { useDispatch } from "react-redux";
import { filter } from "../reducers/filterReducer";

export function Filterform(){
    
    const dispatch = useDispatch();
    const handleFilter = ({target}) => {
        dispatch(filter(target.value));
    }
    return(
        <form>
            <span>Filter :</span>
            <input onChange={handleFilter} />
        </form>
    );
}