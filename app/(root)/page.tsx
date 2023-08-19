import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    // <p>Hello Admin Dashboard</p>
    <div className="p-4">
      {/* <Button variant="outline" size="default">Click me</Button> */}

        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage;
