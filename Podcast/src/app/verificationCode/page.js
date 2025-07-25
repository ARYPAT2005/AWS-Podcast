"use client"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "../../store/authstore.js"
import { Label } from "@/components/ui/label"

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  code: Yup.string()
    .matches(/^\d{6}$/, "Verification code must be 6 digits")
    .required("Verification code is required"),
})

export default function VerificationCode() {
  const { verifyCode } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [resendSuccess, setResendSuccess] = useState("")
  const router = useRouter()
  const inputRefs = useRef([])

  const handleSubmit = async (values) => {
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const result = await verifyCode({ username: values.username, code: values.code })
      if (result.statusCode === 200) {
        setSuccess("Email verified successfully!")
        setTimeout(() => {
          router.push("/login")
        }, 1500)
      } else {
        let errorMsg = "Verification failed. Please try again."
        if (typeof result.body === "string") {
          try {
            const parsed = JSON.parse(result.body)
            errorMsg = parsed.message || errorMsg
          } catch {}
        } else if (result.body && result.body.message) {
          errorMsg = result.body.message
        }
        setError(errorMsg)
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Verification failed. Please try again."
      setError(errorMessage)
      console.error("Verification error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    setError("")
    setResendSuccess("")

    try {
      const result = await resendVerificationCode()
      if (result.statusCode === 200) {
        setResendSuccess("Verification code sent successfully!")
      } else {
        setError("Failed to resend code. Please try again.")
      }
    } catch (error) {
      setError("Failed to resend code. Please try again.")
      console.error("Resend error:", error)
    } finally {
      setIsResending(false)
    }
  }

  const handleInputChange = (index, value, setFieldValue, values) => {
    const digit = value.replace(/\D/g, "").slice(-1)
    const newCode = values.code.split("")
    newCode[index] = digit
    const updatedCode = newCode.join("")

    setFieldValue("code", updatedCode)
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e, setFieldValue, values) => {
    if (e.key === "Backspace" && !values.code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === "Backspace" && values.code[index]) {
      const newCode = values.code.split("")
      newCode[index] = ""
      setFieldValue("code", newCode.join(""))
    }
  }

  const handlePaste = (e, setFieldValue) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    setFieldValue("code", pastedData.padEnd(6, ""))
    const nextIndex = Math.min(pastedData.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Verify your email</CardTitle>
          <CardDescription>Enter the 6-digit verification code sent to your email</CardDescription>
        </CardHeader>
        <Formik initialValues={{ username: "", code: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ setFieldValue, values, errors, touched }) => (
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
                {resendSuccess && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-600">{resendSuccess}</p>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      value={values.username}
                      onChange={(e) => setFieldValue("username", e.target.value)}
                      disabled={isLoading}
                    />
                    {touched.username && errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="code">Verification Code</Label>
                    <div className="flex justify-center gap-2">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <Input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          className="w-12 h-12 text-center text-lg font-semibold"
                          value={values.code[index] || ""}
                          onChange={(e) => handleInputChange(index, e.target.value, setFieldValue, values)}
                          onKeyDown={(e) => handleKeyDown(index, e, setFieldValue, values)}
                          onPaste={(e) => handlePaste(e, setFieldValue)}
                          disabled={isLoading}
                          autoComplete="off"
                        />
                      ))}
                    </div>
                    {touched.code && errors.code && <p className="text-sm text-red-500 text-center">{errors.code}</p>}
                  </div>

                 
   
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full mt-8"
                  disabled={isLoading || values.code.length !== 6 || !values.username.trim()}
                >
                  {isLoading ? "Verifying..." : "Verify Email"}
                </Button>

                <div className="text-center text-sm">
                  <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                    Back to registration
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
