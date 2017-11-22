export function addFace(title, url, description){
  return {
    type: "ADD_ITEM",
    title,
    url,
    description
  }
}

export function deleteFace(index){
  return {
    type: "REMOVE_ITEM",
    index
  }
}
