import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <div className="min-h-screen bg-purple-500 p-4">
        <header className="mb-8">
          {}
        </header>
        <main>{children}</main>
      </div>
    </AuthContextProvider>
  );
}
