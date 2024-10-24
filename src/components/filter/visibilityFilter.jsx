import './visibilityFilter.css'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } from '../../redux/actionTypes'
import { setFilter } from '../../features/filterSlice'

function VisibilityFilter() {
    const {filterValue} = useSelector((state) => state.activeFilter)
    const dispatch = useDispatch()

    return (
        <div className='filterBTn'>
        <button style={filterValue === FILTER_ALL? {backgroundColor: 'red'}:null} onClick={() => dispatch(setFilter(FILTER_ALL))}>Все задачи</button>
        <button style={filterValue === FILTER_COMPLETED? {backgroundColor: 'red'}:null} onClick={() => dispatch(setFilter(FILTER_COMPLETED))}>Выполнено</button>
        <button style={filterValue === FILTER_INCOMPLETE? {backgroundColor: 'red'}:null} onClick={() => dispatch(setFilter(FILTER_INCOMPLETE))}>Необходимо выполнить</button>
        </div>
    )
}

export default VisibilityFilter;