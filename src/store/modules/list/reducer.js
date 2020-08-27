export default function list(state = [], action) {
  switch (action.type) {
    case 'SET_LIST':
      return [...action.list];

    default:
      return state;
  }
}
