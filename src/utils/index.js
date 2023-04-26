const getInitialData = () => [
  {
    id: 1,
    title: "Lorem",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis ex accusantium ipsa facere, aspernatur at nam? Quisquam quam magnam cupiditate laboriosam quia commodi dolores dicta minus, provident voluptate odit.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
