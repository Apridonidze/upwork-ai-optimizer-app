import { redirect } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  redirect('/auth/login')
}

// add redirection logic based on users context
