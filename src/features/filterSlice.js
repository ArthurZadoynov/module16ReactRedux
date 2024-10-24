import { createSlice } from '@reduxjs/toolkit';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } from '../redux/actionTypes';

const filterSlice = createSlice({
  name: 'activeFilter',
 
  initialState: {filterValue: FILTER_ALL},

  reducers: {
      setFilter: (state, action) => {
        switch (action.payload) {
            case FILTER_ALL:
              state.filterValue = FILTER_ALL;
            break;
            case FILTER_COMPLETED:
              state.filterValue = FILTER_COMPLETED;
            break;
            case FILTER_INCOMPLETE:
              state.filterValue = FILTER_INCOMPLETE;
            break;
            default: {
                return state;
            }
        }
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
