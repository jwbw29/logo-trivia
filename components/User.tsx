import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserInfo({ username }: { username: string }) {
  return (
    <Card className="w-full" aria-label="login component">
      <CardHeader>
        <CardTitle className="text-2xl">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h2 aria-label="username heading" className="text-sm text-primary">
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
  );
}
