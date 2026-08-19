"use client";

import { useEffect } from "react";

export default function MermaidRenderer() {
  useEffect(() => {
    let cancelled = false;

    async function renderDiagrams() {
      const blocks = Array.from(
        document.querySelectorAll<HTMLElement>(
          "article pre[data-language='mermaid']"
        )
      );

      if (blocks.length === 0) return;

      const { default: mermaid } = await import("mermaid");

      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
      });

      const nodes = blocks.map((block) => {
        const diagram = document.createElement("div");
        diagram.className = "mermaid";
        diagram.textContent = block.textContent ?? "";
        block.replaceWith(diagram);
        return diagram;
      });

      try {
        await mermaid.run({ nodes });
      } catch (error) {
        console.error("Failed to render Mermaid diagram", error);
      }
    }

    void renderDiagrams();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
