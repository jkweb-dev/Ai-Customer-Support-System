"use client";
import ProtectedRoute from "@/components/Auth/Protetected";
export default function CustomerDashboard() {

    return (

        <ProtectedRoute allowedRole="customer">

            <h1>Customer Dashboard</h1>

        </ProtectedRoute>

    );

}