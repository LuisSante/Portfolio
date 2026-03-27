import { Navbar } from '@/components/page-ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-white via-[#f5f9ff] to-[#eef4ff] text-[#0b1d3a]">
            <Navbar />
            {children}
        </div>
    );
}
