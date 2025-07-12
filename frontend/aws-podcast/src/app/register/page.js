"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "../../store/authstore.js";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

export default function Register() {
  const { signup } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const result = await signup(values);
      if (result.statusCode == 200) {
        setSuccess("Account created successfully! Please check your email for confirmation.");
        router.push("/verificationCode");
      } else {
        let errorMsg = "Registration failed. Please try again.";
        if (typeof result.body === "string") {
          try {
            const parsed = JSON.parse(result.body);
            errorMsg = parsed.message || errorMsg;
          } catch {}
        } else if (result.body && result.body.message) {
          errorMsg = result.body.message;
        }
        setError(errorMsg);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Registration failed. Please try again.";
      setError(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form>
              <CardContent>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
                {success && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-600">{success}</p>
                  </div>
                )}
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      disabled={isLoading}
                    />
                    {touched.username && errors.username && (
                      <p className="text-sm text-red-500">{errors.username}</p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      disabled={isLoading}
                    />
                    {touched.email && errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      disabled={isLoading}
                    />
                    {touched.password && errors.password && (
                      <p className="text-sm text-red-500">{errors.password}</p>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-2 mt-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  )
}
