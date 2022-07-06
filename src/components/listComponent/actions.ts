import { actionTypes } from './../../utils/actionTypes';
import { getListItemsService } from './list.service';


const getItemList = (dispatch) => getListItemsService()
.then(response => {
	let multipliedResponse = []
	for (let i = 0; i < 30; i++) {		
		multipliedResponse = multipliedResponse.concat(response);
	}
	return dispatch({
	  type: actionTypes.SAVE_DOWNLOADED_LIST,
	  payload: multipliedResponse
	});
  })
  .catch(exception => {
  })

export {
	getItemList
};
