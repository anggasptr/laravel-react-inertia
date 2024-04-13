import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AdminLayout>
            <Head title="Dashboard" />
            Dashboard
        </AdminLayout>
    );
}
