const spotsReducerDefaultState = []


export default (state = spotsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SPOT':
            return [
                ...state.filter(({ id }) => id !== action.spot.id),
                action.spot
            ];
        case 'REMOVE_SPOT':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_SPOTS':
            return action.spots
        default:
            return state;
    }
};
