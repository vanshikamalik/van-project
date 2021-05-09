import ActionConstant from '../Constant';

const getUsers = () => ({
    type: ActionConstant.GET_USERS,
});
const getUserDetails = () => ({
    type: ActionConstant.GET_USER_DETAILS,
});
export {
    getUsers,
    getUserDetails
}
