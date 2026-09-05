/**
 * NOTE FOR INTEGRATION: the design system documents `mx-auto max-w-6xl px-6`
 * as the standard section container (Section E). If the codebase already has
 * a shared <Container> component, use that instead and delete this file.
 */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
  );
}
