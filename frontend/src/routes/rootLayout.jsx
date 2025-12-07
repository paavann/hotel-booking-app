import { Outlet } from "react-router"
import PageHeader from "../components/pageHeader"

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <PageHeader title="HOTEL BOOKING APP" />
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    )
}