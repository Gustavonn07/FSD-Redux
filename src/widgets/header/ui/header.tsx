import { useSelector } from "react-redux";
import { Button } from "@/shared/ui/button";
import { useAuth } from "@/features/auth/model";
import { Link } from "react-router-dom";
import type { RootState } from "@/app/stores/mainStore";

export const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const { logoutUser } = useAuth();

  return (
    <header className="w-full p-4 border-b flex justify-between items-center">
      <h2 className="text-lg font-semibold">📰 Article App</h2>
      {user?.id ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user.email}</span>
          <Button variant="outline" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      ) : (
        <>
          <span className="text-sm text-muted-foreground">
            <Link to={"/auth"}>Auth</Link>
          </span>
        </>
      )}
    </header>
  );
};