"use client";
import { Result, Button } from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NotFound() {
  const searchParams = useSearchParams();
  const message =
    searchParams.get("message") ||
    "Sorry, the page you visited does not exist.";
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Result
        status="404"
        title="404"
        subTitle={message}
        extra={
          <Link href="/">
            <Button type="primary">Back to Home</Button>
          </Link>
        }
      />
    </div>
  );
}
