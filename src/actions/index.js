export const showListTopList = list => ({
  type: 'SHOW_LIST',
  list
})

export const searchMovie = text => ({
  type: 'SEARCH_LIST',
  text
})

// необязательно
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}