function displayLikes(names) {
  if (names.length > 3) {
    return `${names[0]}, ${names[1]}, ${names.length} others, likes this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]}, ${names[2]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]}, ${names[1]}} likes this`;
  } else if (names.length === 1) {
    return `${names[0]}} others, likes this`;
  }
}

module.exports = displayLikes;
