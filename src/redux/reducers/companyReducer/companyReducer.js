import {
    FETCH_COMPANIES,
    ADD_COMPANY,
    UPDATE_COMPANY,
    DELETE_COMPANY,
    FETCH_COMPANY_BY_ID
} from '../reducerExports/reducerExports';

const initialState = {
    items: [],
    itemCount: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    currentCompany: null
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
                pageCount: action.payload.pageCount,
                loading: false,
            };
        case ADD_COMPANY:
            return {
                ...state,
                items: [...state.items, action.payload],
                itemCount: state.itemCount + 1,
                loading: false,
            };
        case UPDATE_COMPANY:
            return {
                ...state,
                items: state.items.map((company) =>
                    company.companyId === action.payload.companyId ? action.payload : company
                ),
                loading: false,
            };
        case DELETE_COMPANY:
            return {
                ...state,
                items: state.items.filter((company) => company.companyId !== action.payload),
                itemCount: state.itemCount - 1,
                loading: false,
            };
        case FETCH_COMPANY_BY_ID:
            return {
                ...state,
                currentCompany: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default companyReducer;
