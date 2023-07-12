export const formatContent = (content) => {
  let modifiedContent = content;

  modifiedContent = modifiedContent.replace(/</g, '&lt;')
  modifiedContent = modifiedContent.replace(/>/g, '&gt;')
  modifiedContent = modifiedContent.replace(/\#\#(.*?)\#\#/g, '<mark class="inline-block">$1</mark>') // ##Mark##
  modifiedContent = modifiedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **Strong**
  modifiedContent = modifiedContent.replace(/\@red\@(.*?)\@\@/g, '<span class="text-terminal-red">$1</span>') // @@color@@
  modifiedContent = modifiedContent.replace(/\@primary\@(.*?)\@\@/g, '<span class="text-primary">$1</span>') // @@color@@
  modifiedContent = modifiedContent.replace(/\@secondary\@(.*?)\@\@/g, '<span class="text-secondary">$1</span>')

  return modifiedContent;
};
