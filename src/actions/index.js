export function selectBook(book) {
    // selectBook is ActionCreator, it needs to return an action,
    // an object with a type propery.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}