function makeFriendsList(friends) {
  const list = document.createElement('ul');
  for (let item of friends) {
    const friendLists = document.createElement('li');
    friendLists.innerHTML = ` ${ item.firstName }, ${item.lastName}`
    list.appendChild(friendLists)
  }
  return list;
}
