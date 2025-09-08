// Remove specific top-level menus in nbclassic
// Works even if IDs differ across minor versions.
$([Jupyter.events]).on("app_initialized.NotebookApp", function () {
  // Helper: remove a menu by common IDs or by visible text
  function removeMenuByIdOrText(idCandidates, text) {
    // Try known IDs first
    var $li = $();
    idCandidates.forEach(function (id) {
      $li = $li.add($("#menubar li#" + id));
    });
    if ($li.length === 0) {
      // Fallback: match by anchor text
      $li = $("#menubar li > a").filter(function () {
        return $(this).text().trim() === text;
      }).parent("li");
    }
    $li.remove();
  }

  // Remove the "Insert" menu
  removeMenuByIdOrText(
    ["insert_menu", "menu-insert", "insert"], // common ID variants
    "Insert"
  );

  // EXAMPLES: remove other menus too (uncomment as needed)
  // removeMenuByIdOrText(["file_menu", "menu-file", "file"], "File");
  // removeMenuByIdOrText(["edit_menu", "menu-edit", "edit"], "Edit");
  // removeMenuByIdOrText(["view_menu", "menu-view", "view"], "View");
  // removeMenuByIdOrText(["cell_menu", "menu-cell", "cell"], "Cell");
  // removeMenuByIdOrText(["kernel_menu", "menu-kernel", "kernel"], "Kernel");
  // removeMenuByIdOrText(["widget_menu", "menu-widgets", "widgets"], "Widgets");
  // removeMenuByIdOrText(["help_menu", "menu-help", "help"], "Help");
});

// Run after the Notebook app is initialized
$([Jupyter.events]).on("app_initialized.NotebookApp", function () {
    // Remove specific "Download as" entries
    $("#download_html").remove();
    $("#download_markdown").remove();
});
