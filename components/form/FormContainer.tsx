"use client";

import { useFormState } from "react-dom";
import { ReactNode, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";

interface FormContainerProps {
  action: actionFunction;
  children: ReactNode;
  title:string
}

const initialState = {
  message: "",
};

export const FormContainer = ({ action, children, title }: FormContainerProps) => {
    const [state, formAction] = useFormState(action, initialState);
    const { toast } = useToast();
    useEffect(() => {
      if (state.message) {
        toast({ title, description: state.message });
      }
    }, [state, title, toast]);
    return <form action={formAction}>{children}</form>;
};
