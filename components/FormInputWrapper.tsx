import { ReactNode } from "react";

export default function FormInputWrapper({
  children,
  message,
}: {
  children: ReactNode;
  message: string;
}) {
  return (
    <div className="flex flex-col">
      {children}
      {message.length > 0 ? (
        <p className="mt-1.5 line-clamp-1 text-left text-xs italic text-red-400">
          {message}
        </p>
      ) : null}
    </div>
  );
}
