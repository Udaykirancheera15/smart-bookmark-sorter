document.getElementById('organize').addEventListener('click', async () => {
  const bookmarks = await browser.bookmarks.getTree();
  const status = await organizeBookmarks(bookmarks);
  document.getElementById('status').textContent = status;
});

async function organizeBookmarks(bookmarks) {
  try {
    for (const node of bookmarks) {
      await processBookmarkNode(node);
    }
    return "Bookmarks organized successfully!";
  } catch (error) {
    console.error("Error organizing bookmarks:", error);
    return "Failed to organize bookmarks.";
  }
}

async function processBookmarkNode(node) {
  if (node.children) {
    for (const child of node.children) {
      await processBookmarkNode(child);
    }
  } else if (node.url) {
    const domain = (new URL(node.url)).hostname;
    await moveToFolder(node, domain);
  }
}

async function moveToFolder(bookmark, folderName) {
  const folders = await browser.bookmarks.search({ title: folderName });
  let folder = folders.find(item => item.type === "folder");

  if (!folder) {
    folder = await browser.bookmarks.create({ title: folderName });
  }
  await browser.bookmarks.move(bookmark.id, { parentId: folder.id });
}

