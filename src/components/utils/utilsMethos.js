const sentenceCase = (str) => {
  if (!str) return '';
  const wordsArr = str.split(' ');
  const sentenceCaseArr = wordsArr.map(word => {
    if (word.length === 0) return '';
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  const sentenceCasedStr = sentenceCaseArr.join(' ');

  return sentenceCasedStr;
}
export { sentenceCase }