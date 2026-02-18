import { useEffect } from "react";

export const useSourceProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block DevTools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+C (Inspect element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return;
      }
      // Ctrl+U (View source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return;
      }
      // Cmd variants for Mac
      if (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) {
        e.preventDefault();
        return;
      }
      if (e.metaKey && e.key === "u") {
        e.preventDefault();
        return;
      }
    };

    // Disable text selection via selectstart
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);

    // CSS-based protections
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    };
  }, []);
};
