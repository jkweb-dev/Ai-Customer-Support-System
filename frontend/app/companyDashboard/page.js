"use client";

import ProtectedRoute from "@/components/Auth/Protetected";

export default function CompanyDashboard() {

    return (

        <ProtectedRoute allowedRole="company">

            <h1>Company Dashboard</h1>

        </ProtectedRoute>

    );

}