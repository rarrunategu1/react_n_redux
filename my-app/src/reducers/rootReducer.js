const initState = {
    posts: [
        {id: '1', title: 'How CareerDevs changed my life', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'},
        {id: '2', title: 'Code, Code, Code!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'},
        {id: '3', title: 'My vacation in Bora Bora', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'}
        ]
};
    const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer;