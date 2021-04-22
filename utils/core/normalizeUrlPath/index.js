import { stripSlashes } from '../..'

export default function normalizeUrlPath(path) {
  const stripped = stripSlashes(path)

  if (stripped.endsWith('html') || stripped.endsWith('html')) {
    return stripped
  } else {
    return stripped + '/'
  }
}
