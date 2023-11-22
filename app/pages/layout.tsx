import SideMenu from "@/app/ui/menu";

export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  console.log("Layout loading...", props);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideMenu />
      <div className="w-full flex-none md:w-64"></div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
