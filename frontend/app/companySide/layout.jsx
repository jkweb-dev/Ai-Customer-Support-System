import ProtectedRoute from "@/components/Auth/Protetected";
import CompanyLayout from "@/components/company/CompanyLayout";




export default function Layout({children}){


return (

<ProtectedRoute allowedRole="company">

<CompanyLayout>

{children}

</CompanyLayout>

</ProtectedRoute>

);


}