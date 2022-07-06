import { BASE_URL, POSTS } from '../../utils/urls';
export const getListItemsService = () => {

    return fetch(BASE_URL+POSTS, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => response.json());
}