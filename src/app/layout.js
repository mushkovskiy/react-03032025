import { App } from "./app";
import { Layout as SiteLayout } from "../components/layout";
export const metadata = {
  title: "Vite + React",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <App>
          <SiteLayout>{children}</SiteLayout>
        </App>
      </body>
    </html>
  );
};

export default RootLayout;
