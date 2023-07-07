export const formatContent = (content) => {
  let modifiedContent = content;

  modifiedContent = modifiedContent.replace(/</g, '&lt;')
  modifiedContent = modifiedContent.replace(/>/g, '&gt;')
  modifiedContent = modifiedContent.replace(/\#\#(.*?)\#\#/g, '<mark>$1</mark>')
  modifiedContent = modifiedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  modifiedContent = modifiedContent.replace(/\@green\@(.*?)\@\@/g, '<span class="text-terminal-green">$1</span>')

  return modifiedContent;
};
