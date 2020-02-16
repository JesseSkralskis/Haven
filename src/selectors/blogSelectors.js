import moment from "moment";

export default (blogs, { text, sortBy, startDate, endDate }) => {
  return (
    blogs
      .filter(blog => {
        const createdAtMoment = moment(blog.createdAt);
        const startDateMatch = startDate
          ? startDate.isSameOrBefore(createdAtMoment, "day")
          : true;
        const endDateMatch = endDate
          ? endDate.isSameOrAfter(createdAtMoment, "day")
          : true;
        const titleMatch = blog.title
          .toLowerCase()
          .includes(text.toLowerCase());

        const blogMatch = blog.blog.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && (titleMatch || blogMatch);
      })
      // eslint-disable-next-line array-callback-return
      .sort((a, b) => {
        if (sortBy === "recent") {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "oldest") {
          return a.createdAt > b.createdAt ? 1 : -1;
        }
      })
  );
};
