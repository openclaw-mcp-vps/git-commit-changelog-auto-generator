import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – Generate Changelogs from Git Commits Automatically",
  description: "Connect your GitHub repo, analyze commits with AI, and publish beautiful customer-facing changelogs in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4ab1cacf-e6fb-4b14-90c7-b042a1c8e0cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
