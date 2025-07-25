"use client"
import { useAuthStore } from "../../store/authstore.js";
import { useEffect } from "react"
export default function AuthChecker() {
    const { checkAuth } = useAuthStore();
    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
  
    return null;
  }
  