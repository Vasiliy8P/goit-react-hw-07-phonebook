
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

const Filter = () => {
    const filterValue = useSelector(getFilterValue);
    const dispatch = useDispatch();
    
    const handleChangeFilter = (evt) => {
        dispatch(setFilter(evt.target.value))
    };

    return (
        <label>
            Find contacts by name
            <br />
            <input type="text" value={filterValue} onChange={handleChangeFilter} />
        </label>
    )
}

export default Filter;
