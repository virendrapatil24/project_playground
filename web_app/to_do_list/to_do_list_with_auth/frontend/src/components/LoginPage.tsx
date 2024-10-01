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
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ username: string; password: string }>();
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username: data.username,
        password: data.password,
      });
      if (response.status === 200) {
        console.log("all okay 1");
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        navigate("/");
        console.log("all okay 2");
      } else {
        const message = response.data.message || "Something went wrong!";
        alert(message);
      }
    } catch (error) {
      console.error("Logging failed:", error);
      alert("Login failed");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your username and password to access your account
          </CardDescription>
          <form onSubmit={handleSubmit(onSubmit)} className="pt-10">
            <CardContent className="space-y-4 p-0">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-red-600">username is required</span>
                )}
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">password is required</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 p-0 pt-12">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Logging In..." : "Log In"}
              </Button>
              <div className="flex items-center justify-center w-full">
                <span className="text-sm text-gray-500">
                  Don't have an account?
                </span>
                <Button
                  type="button"
                  variant="link"
                  className="text-sm"
                  onClick={handleSignUpClick}
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
