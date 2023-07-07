export const formatContent = (content) => {
  let modifiedContent = content;

  modifiedContent = modifiedContent.replace(/</g, '&lt;')
  modifiedContent = modifiedContent.replace(/>/g, '&gt;')
  modifiedContent = modifiedContent.replace(/\#\#(.*?)\#\#/g, '<mark>$1</mark>') // ##Mark##
  modifiedContent = modifiedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **Strong**
  modifiedContent = modifiedContent.replace(/\@green\@(.*?)\@\@/g, '<span class="text-terminal-green">$1</span>') // @@color@@
  modifiedContent = modifiedContent.replace(/\@blue\@(.*?)\@\@/g, '<span class="text-terminal-blue">$1</span>')

  return modifiedContent;
};
