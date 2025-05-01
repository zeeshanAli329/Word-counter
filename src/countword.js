// countword.js
export default function countWord() {
  const text = document.getElementById("text").value.trim();

  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  const charCount = text.length;
  const charCountNoSpace = text.replace(/\s/g, "").length;

  document.getElementById("wordCount").innerText = wordCount;
  document.getElementById("charCount").innerText = charCount;
  document.getElementById("charCountNoSpace").innerText = charCountNoSpace;
}
