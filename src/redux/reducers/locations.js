// const locationsReducerDefaultState = [];

const locationsReducerDefaultState = []

 
export default (state = locationsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [
                ...state.filter(({ id }) => id !== action.location.id),
                action.location
            ];
        case 'REMOVE_LOCATION':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_LOCATIONS':
            console.log('setting locations', action.locations)
            return action.locations
        default:
            return state;
    }
};