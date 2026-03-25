import { Navbar } from '@/components/page-ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white text-slate-900">
            <Navbar />
            {children}
        </div>
    );
}
