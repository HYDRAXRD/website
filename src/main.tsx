import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

class ErrorBoundary extends (await import("react")).Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: "#fff", background: "#0a0a0a", padding: "2rem", fontFamily: "monospace", minHeight: "100vh" }}>
          <h2 style={{ color: "#f87171" }}>❌ Erro ao carregar o site</h2>
          <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap", fontSize: "0.85rem", color: "#fca5a5" }}>
            {this.state.error.message}
            {"\n"}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const { default: React } = await import("react");

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
