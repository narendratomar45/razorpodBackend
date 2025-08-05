const cache = new Map();

export const setCache = (key, data, ttl = 300000) => {
  const expiry = Date.now() + ttl;
  cache.set(key, { data, expiry });
};

export const getCache = (key) => {
  const cached = cache.get(key);
  if (!cached) return null;
  if (Date.now() > cached.expiry) {
    cache.delete(key);
    return null;
  }
  return cached.data;
};
