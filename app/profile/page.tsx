import Login from "@/components/Login";
import { HomeNav, ProfileNav } from "@/components/Nav";
import UserInfo from "@/components/User";

export default function Profile() {
  let user = true;
  let username = "jwbw29";

  // TODO if no user, redirect to `/login`

  return (
    <main className="flex flex-col min-h-screen">
      <HomeNav />
      <ProfileNav />
      <div className="flex justify-center items-center mt-20">
        <UserInfo username={username} />
      </div>
    </main>
  );
}
