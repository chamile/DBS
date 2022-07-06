import { actionTypes } from '../../utils/actionTypes';


const updateSearchString = (dispatch, keyword) => {
	return dispatch({
		type: actionTypes.UPDATE_SEARCH_STRING,
		payload: keyword
	  });
}

export {
	updateSearchString
};
