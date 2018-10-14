const initState = {
    posts: [
        {id: '1', title: 'How CareerDevs changed my life', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'},
        {id: '2', title: 'Code, Code, Code!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'},
        {id: '3', title: 'My vacation in Bora Bora', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum feugiat enim non bibendum. Quisque eget hendrerit felis, eu sollicitudin enim.'}
        ]
};
//deletes the post when clicked on and return the new posts
    const rootReducer = (state = initState, action) => {
        if (action.type === 'DELETE_POST') {
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id;
            });
            return {
                ...state,
                posts: newPosts
            }
        }
    return state; //redirecting the user to the home page after it's updated will happen on the handleClick in post.js
};

export default rootReducer;