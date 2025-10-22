import type { RootState } from "@/app/stores/mainStore";
import { AuthForm } from "@/features/auth/ui";
import { ROUTES } from "@/shared/config";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 border rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Auth</h1>
        <AuthForm />
      </div>
    </div>
  );
};