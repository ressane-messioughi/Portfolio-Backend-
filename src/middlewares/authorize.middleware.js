
  export const authorize= (allowedRoles) => (req, res, next) => {
  
    if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).send("Accès interdit 🚫");
  }
  next();
};

export default authorize