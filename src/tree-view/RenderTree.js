export default props => {
  const { options } = props;
  const map = {};
  for (let i = 0; i < options.length; i++) {
    const parts = options[i].split("/");
    const root = parts.shift();
    const option = parts.join("/");
    if (!map[root]) {
      map[root] = {
        name: root,
        path: `${props.parent}${root}`,
        children: []
      };
    }
    if (option !== "") {
      map[root].children.push(option);
    }
  }
  const children = Object.keys(map).map(key => map[key]);
  return props.children(
    children.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
  );
};
