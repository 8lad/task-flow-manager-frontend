import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Task flow manager dashboard',
  description: 'Here you can manage your work',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
