import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";

export default function Todo() {
    const { flash } = usePage().props;

    const { data, setData } = useForm({
        name: "",
    });

    const storeTodo = (e) => {
        e.preventDefault();
        router.post("/todo", data, {
            onSuccess: () => {
                setData("name", "");
            },
        });
    };

    console.log(flash);

    return (
        <AdminLayout>
            <Head title="Todo" />
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-4xl my-8 text-center">
                    Todo App
                </h2>
                {flash.message && (
                    <div className="py-2 px-4 rounded-md bg-green-300 text-center mb-6">
                        {flash.message}
                    </div>
                )}
                <form onSubmit={storeTodo}>
                    <div className="flex gap-4 items-center mb-6">
                        <input
                            type="text"
                            placeholder="Enter todo here"
                            className="px-4 py-2 rounded-md grow"
                            onChange={(e) => setData("name", e.target.value)}
                            value={data.name}
                        />
                        <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                            Save
                        </button>
                    </div>
                </form>
                <div className="flex-col flex gap-4">
                    <div className="flex justify-between items-center py-3 px-6 bg-green-100 rounded-md">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <div className="">Edit | Hapus</div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-green-100 rounded-md">
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
