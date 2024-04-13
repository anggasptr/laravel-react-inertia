import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Head } from "@inertiajs/react";

export default function Todo() {
    return (
        <AdminLayout>
            <Head title="Todo" />
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-4xl my-8 text-center">
                    Todo App
                </h2>
                <form>
                    <div className="flex gap-4 items-center mb-6">
                        <input
                            type="text"
                            placeholder="Enter todo here"
                            className="px-4 py-2 rounded-md grow"
                        />
                        <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                            Save
                        </button>
                    </div>
                </form>
                <div className="flex-col flex gap-4">
                    <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <div className="">Edit | Hapus</div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <div className="">Edit | Hapus</div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-red-400 rounded-md">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <div className="">Edit | Hapus</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}