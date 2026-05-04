import { redirect } from "next/navigation";

export default function Home() {
  redirect('/auth/login')
}

// add redirection logic based on users context
