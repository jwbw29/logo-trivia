import { HomeNav } from "@/components/Nav";
import UserInfo from "@/components/User";

export default function Profile() {
  let username = "jwbw29";

  // TODO if no user, redirect to `/login`

  return (
    <main className="flex flex-col min-h-screen">
      <HomeNav />
      <div className="flex justify-center items-center mt-20">
        <UserInfo username={username} />
      </div>
    </main>
  );
}
