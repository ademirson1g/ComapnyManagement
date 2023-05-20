import { FETCH_COMPANIES, ADD_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from '../reducerExports/reducerExports';

const initialState = {
    items: [],
    itemCount: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    loading: false,
    error: null,
};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES:
            return {
                ...state,
                items: action.payload.items,
                itemCount: action.payload.itemCount,
                pageIndex: action.payload.pageIndex,
                pageSize: action.payload.pageSize,
                pageCount: action.payload.pageCount
            };
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload],
                itemCount: state.itemCount + 1,
            };
        case UPDATE_COMPANY:
            return {
                ...state,
                companies: state.companies.map((company) =>
                    company.companyId === action.payload.companyId ? action.payload : company
                ),
            };
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter((company) => company.companyId !== action.payload),
                itemCount: state.itemCount - 1,
            };
        default:
            return state;
    }
};

export default companyReducer;