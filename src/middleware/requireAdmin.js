function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Akses ditolak. Endpoint ini khusus admin.',
    });
  }
  return next();
}

module.exports = requireAdmin;