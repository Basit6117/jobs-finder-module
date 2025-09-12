import React from 'react'

const ErrorMsg = ({message}) => {
  return (
    <div
      style={{
        backgroundColor: "#ffe6e6",
        color: "#d9534f",
        padding: "12px 16px",
        borderRadius: "6px",
        margin: "12px 0",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      {message || "Something went wrong. Please try again."}
    </div>
  )
}

export default ErrorMsg
