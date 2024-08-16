import React, {
  useState,
  ReactNode,
  createContext,
  useContext,
  useCallback,
} from "react";
import { renderToString } from "react-dom/server";
import clsx from "clsx";

// Create the Namespace context
const NamespaceContext = createContext<string>("");

// Create a provider component for the Namespace context
interface NamespaceProviderProps {
  namespace: string;
  children?: ReactNode;
}

export function NamespaceProvider({
  namespace,
  children,
}: NamespaceProviderProps) {
  return (
    <NamespaceContext.Provider value={namespace}>
      {children}
    </NamespaceContext.Provider>
  );
}

interface StringableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

function StringableCard({
  children,
  className,
  ...props
}: StringableCardProps) {
  const [showString, setShowString] = useState(false);
  const [copied, setCopied] = useState(false);
  const namespace = useContext(NamespaceContext);

  const toggleShowString = () => setShowString((prev) => !prev);

  const stringified = renderToString(<>{children}</>);
  const namespacedString = namespace
    ? `${namespace}:\n${stringified}`
    : stringified;

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(namespacedString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  }, [namespacedString]);

  return (
    <div
      className={clsx("bg-white px-4 py-8 rounded shadow relative", className)}
      {...props}
    >
      <button
        onClick={toggleShowString}
        className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
      >
        {showString ? "Hide" : "Show"}
      </button>
      {children}
      {showString && (
        <div className="relative">
          <pre
            className="mt-4 p-2 bg-gray-100 rounded overflow-auto cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={copyToClipboard}
          >
            {namespacedString}
          </pre>
          {copied && (
            <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-green-500 text-white text-sm rounded">
              Copied!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StringableCard;
