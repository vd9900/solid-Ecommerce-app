class ApiFeatures {
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
  }
  search() {
    const keyword = this.queryStr.s
      ? {
          name: {
            $regex: this.queryStr.s,
            $options: "i",
          },
        }
      : {};
    // console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
  category() {
    const keyword = this.queryStr.category
      ? {
          category: {
            $regex: this.queryStr.category,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });

    return this;
  }
  filter() {
    const newQuery = { ...this.queryStr };
    console.log(newQuery);

    const removeQuerys = ["s", "page", "limit"];

    removeQuerys.forEach((key) => {
      delete newQuery[key];
    });

    //filter for price and rating
    // console.log(newQuery);

    let queryStr = JSON.stringify(newQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // console.log(queryStr);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}
module.exports = ApiFeatures;
