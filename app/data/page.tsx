import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: leagues } = await supabase.from("leagues").select();

  return <pre>{JSON.stringify(leagues, null, 2)}</pre>;
}
