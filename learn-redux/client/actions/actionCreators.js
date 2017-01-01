//increment
export const increment = (index) => {
    return {type: 'INCREMENT', index}
};

//add comment
export const addComment = (postId, author, comment) => {
    return {type: 'ADD_COMMENR', postId, author, comment}
};


//remove comment
export const removeComment = (postId, i) => {
    return {type: 'REMOVE_COMMENR', postId, i}
};

