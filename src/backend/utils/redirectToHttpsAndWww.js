export default (req, res, next) => {
  if (process.env.NODE_ENV !== "production") return next();

  if (!req.headers.host.match(/^www\..*/i) || req.headers["x-forwarded-proto"] === "http")
    return res.redirect(301, `${process.env.PAGE_URL}${req.url}`);
  return next();
};
