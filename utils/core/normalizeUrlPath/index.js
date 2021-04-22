export default function normalizeUrlPath(path) {
  let stripped = path
    .replace(/^\/+/, '') // leading slash
    .replace(/\/$/, '') // trailing slash

  if (stripped.endsWith('html') || stripped.endsWith('html')) {
    return stripped
  } else {
    return stripped + '/'
  }
}
