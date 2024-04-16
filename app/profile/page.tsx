import Login from "@/components/Login";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Profile() {
  let user = true;
  let username = "jwbw29";

  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      {user ? (
        <div className="flex justify-center items-center mt-20">
          <Card className="w-full" aria-label="login component">
            <CardHeader>
              <CardTitle className="text-2xl">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h2
                    aria-label="username heading"
                    className="text-sm text-primary"
                  >
                    Username:
                  </h2>
                  <h3 aria-label="username value" className="text-2xl">
                    {username}
                  </h3>
                </div>
                <div className="flex">
                  <Button
                    aria-label="logout button"
                    variant="default"
                    size="default"
                    className="text-base tracking-[.2rem] w-full mt-20"
                  >
                    LOGOUT{" "}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20">
          <Login />
        </div>
      )}
    </main>
  );
}
