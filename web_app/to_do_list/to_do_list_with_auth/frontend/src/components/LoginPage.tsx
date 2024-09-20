import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your username and password to access your account
          </CardDescription>
          <form
            onSubmit={() => console.log("form submitted")}
            className="pt-10"
          >
            <CardContent className="space-y-4 p-0">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 p-0 pt-12">
              <Button type="submit" className="w-full">
                Log In
              </Button>
              <div className="flex items-center justify-center w-full">
                <span className="text-sm text-gray-500">
                  Don't have an account?
                </span>
                <Button
                  type="button"
                  variant="link"
                  className="text-sm"
                  onClick={() => console.log("handles signup")}
                >
                  Sign Up
                </Button>
              </div>
            </CardFooter>
          </form>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LoginPage;
