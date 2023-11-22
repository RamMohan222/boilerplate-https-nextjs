export default function Template({ children }: { children: React.ReactNode }) {
  console.log("Template is loading...");
  return <div>{children}</div>;
}
