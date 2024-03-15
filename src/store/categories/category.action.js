import { createAction } from "../../utils/reducers/reducer.utils"
import { CATEGORIES_INITIAL_STATE } from "./category.reducer"
import { CATEGORIS_ACTION_TYPES } from "./category.types";



export const setCategoriesMap = (categoriesMap) => {
    createAction(CATEGORIS_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
}